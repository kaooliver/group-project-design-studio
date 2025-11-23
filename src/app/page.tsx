'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

interface Project {
  id: number;
  title: string;
  location: string;
  type: string;
  description: string;
  images: string[];
  materials: string[];
  style: string;
  completionDate: string;
  squareFootage: string;
}

export default function Home() {
  const [activePage, setActivePage] = useState('landing');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [fullSizeImage, setFullSizeImage] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const navigateProject = (direction: 'prev' | 'next') => {
    if (!selectedProject) return;
    
    const currentIndex = projects.findIndex(p => p.id === selectedProject.id);
    let newIndex;
    
    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : projects.length - 1;
    } else {
      newIndex = currentIndex < projects.length - 1 ? currentIndex + 1 : 0;
    }
    
    setSelectedProject(projects[newIndex]);
  };

  const projects: Project[] = [
    {
      id: 1,
      title: "Modern Living Room",
      location: "Fort Worth, TX",
      type: "commercial sample project",
      description: "A contemporary living space featuring clean lines, natural materials, and thoughtful lighting design.",
      images: ["/images/GPDS View 2.jpeg", "/images/GPDS View 1.jpeg"],
      materials: ["Oak Wood", "Marble", "Brass Hardware"],
      style: "Mid-Century Modern",
      completionDate: "2024",
      squareFootage: "1,200 sq ft"
    },
    {
      id: 2,
      title: "Residential Design",
      location: "Nashville, TN",
      type: "residential",
      description: "A warm and inviting residential space that balances modern functionality with timeless comfort.",
      images: ["/images/2_cherub.jpg"],
      materials: ["Walnut Wood", "Natural Stone", "Linen"],
      style: "Contemporary",
      completionDate: "2024",
      squareFootage: "2,400 sq ft"
    },
    {
      id: 3,
      title: "Country Home",
      location: "Round Top, TX",
      type: "residential",
      description: "A serene country retreat emphasizing natural materials and connection to the landscape.",
      images: ["/images/2_cherub.jpg"],
      materials: ["Reclaimed Wood", "Local Stone", "Iron"],
      style: "Rustic Modern",
      completionDate: "2024",
      squareFootage: "1,800 sq ft"
    },
    {
      id: 4,
      title: "Sample Project",
      location: "Sample Location",
      type: "sample",
      description: "This is a sample project placeholder for future work and portfolio expansion.",
      images: ["/images/2_cherub.jpg"],
      materials: ["Various Materials"],
      style: "Mixed",
      completionDate: "TBD",
      squareFootage: "TBD"
    }
  ];

  const renderContent = () => {
    switch (activePage) {
      case 'landing':
        return (
          <div className="flex flex-col items-center justify-center h-full">
            {/* Large Image */}
            <div className="w-full max-w-4xl mb-8">
              <img 
                src="/images/landing.png" 
                alt="Landing page image" 
                className="w-full h-auto object-contain rounded-sm"
              />
            </div>
          </div>
        );
      
      case 'group':
        return (
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-serif font-normal tracking-widest uppercase text-slate-900 mb-4">
                GROUP ETHOS
              </h2>
              <div className="space-y-4 text-slate-700 font-serif font-normal leading-relaxed">
                <p>
                  Balancing comfort with quiet intention, we believe home is both refuge and reflection. 
                  Our approach centers on creating spaces that feel timeless, collected, and deeply personal.
                </p>
                <p>
                  Founded in 2026 by Anna-Nicole Morris, Group Project Design Studio brings together 
                  thoughtful design, quality craftsmanship, and intentional living.
                </p>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-serif font-normal tracking-widest uppercase text-slate-900 mb-3">
                ++ ANNA-NICOLE MORRIS
              </h3>
              <div className="text-slate-700 font-serif font-normal">
                <p>
                  Principal & Founder
                </p >
                <p>
                Bachelor of Science in Interior Design from Baylor University - 2021
              </p>
              </div>
            </div>

            <div className="flex justify-center">
              <img 
                src="/images/group.jpg" 
                alt="Group decorative image" 
                className="w-64 h-auto object-contain rounded-sm"
              />
            </div>

            <div className="w-full">
              <blockquote className="text-slate-700 font-serif font-normal leading-relaxed italic">
                "For we are co-workers in God's service: you are God's field, God's building. 
                By the grace God has given me, I laid a foundation as a wise builder, and someone else is building on it. 
                But each one should build with care. For no one can lay any foundation other than the one already laid, 
                which is Jesus Christ"
              </blockquote>
              <p className="text-slate-500 text-sm mt-4">1C3:9-11</p>
            </div>
          </div>
        );
      
      case 'projects':
        return (
          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <div key={project.id} className="space-y-4">
                  {project.id === 1 ? (
                  <button 
                      onClick={() => {
                        setSelectedProject(project);
                        setCurrentImageIndex(0);
                        setActivePage('project-detail');
                      }}
                    className="w-full h-64 rounded-sm border border-black hover:opacity-80 transition-opacity cursor-pointer overflow-hidden"
                  >
                    <img 
                      src={project.images[0]} 
                      alt={`${project.title} - ${project.location}`} 
                      className="w-full h-full object-cover"
                    />
                  </button>
                  ) : (
                    <div className="w-full h-64 rounded-sm border border-black flex items-center justify-center">
                      <p className="text-slate-700 font-serif font-normal text-lg">coming soon</p>
                    </div>
                  )}
                  <div>
                    <p className="text-slate-600 text-sm font-serif font-normal">{project.type}</p>
                    <p className="text-slate-900 font-serif font-semibold tracking-wider uppercase">{project.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      
      case 'inquire':
        return (
          <div className="relative h-full flex flex-col items-center justify-center space-y-12">
            {/* Contact Text */}
            <div className="text-center max-w-md">
              <p className="text-slate-700 font-serif font-normal leading-relaxed">
                To inquire about projects, press or partnerships, please get in touch by writing to{' '}
                <a href="mailto:studio@gpdesignstudio.com" className="text-slate-900 hover:underline">
                  studio@gpdesignstudio.com
                </a>
              </p>
            </div>
            
            {/* Centered GPDS Logo */}
            <div className="flex justify-center">
              <img 
                src="/images/GPDS_Logo.jpg" 
                alt="GPDS Logo" 
                className="w-48 h-auto object-contain"
              />
            </div>


          </div>
        );
      
      case 'project-detail':
        if (!selectedProject) {
          setActivePage('projects');
          return null;
        }

        const navigateImage = (direction: 'prev' | 'next') => {
          if (direction === 'prev') {
            setCurrentImageIndex((prev) => 
              prev === 0 ? selectedProject.images.length - 1 : prev - 1
            );
          } else {
            setCurrentImageIndex((prev) => 
              prev === selectedProject.images.length - 1 ? 0 : prev + 1
            );
          }
        };

        return (
          <div className="w-full flex items-center gap-4">
            {/* Previous Arrow */}
            <button
              onClick={() => navigateImage('prev')}
              className="flex-shrink-0 text-slate-700 hover:text-slate-900 transition-colors cursor-pointer"
              aria-label="Previous image"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6M6 12l6-6M6 12l6 6" />
              </svg>
            </button>

            {/* Current Image */}
            <div className="flex-1 relative">
              <div className="relative w-full">
                {/* Invisible image to maintain container height */}
                <img 
                  src={selectedProject.images[currentImageIndex]}
                  alt=""
                  aria-hidden="true"
                  className="invisible w-full h-auto object-contain"
                />
                {/* Clickable Left Half */}
                <div
                  onClick={() => navigateImage('prev')}
                  className="absolute left-0 top-0 w-1/2 bottom-0 cursor-w-resize z-10"
                  aria-label="Previous image"
                />
                {/* Clickable Right Half */}
                <div
                  onClick={() => navigateImage('next')}
                  className="absolute right-0 top-0 w-1/2 bottom-0 cursor-e-resize z-10"
                  aria-label="Next image"
                />
                {/* Image with fade transition */}
                <AnimatePresence mode="sync">
                  <motion.img
                    key={selectedProject.images[currentImageIndex]}
                    src={selectedProject.images[currentImageIndex]}
                    alt={`${selectedProject.title} - Image ${currentImageIndex + 1}`}
                    className="absolute inset-0 w-full h-full object-contain pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { duration: 0.6, ease: 'easeInOut' } }}
                    exit={{ opacity: 0, transition: { duration: 0.6, ease: 'easeInOut' } }}
                  />
                </AnimatePresence>
              </div>
            </div>

            {/* Next Arrow */}
            <button
              onClick={() => navigateImage('next')}
              className="flex-shrink-0 text-slate-700 hover:text-slate-900 transition-colors cursor-pointer"
              aria-label="Next image"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12h12m0 0l-6-6m6 6l-6 6" />
              </svg>
            </button>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-stone-50 flex relative">
      {/* Left Sidebar */}
      <div className="w-1/3 h-screen bg-stone-50 p-12 flex flex-col sticky top-0">
        {/* Top Section */}
        <div className="space-y-8">
          {/* Branding */}
          <div className="flex justify-center mb-8">
            <button
              onClick={() => setActivePage('landing')}
              className="hover:opacity-80 transition-opacity cursor-pointer"
            >
              <img 
                src="/images/GPDS_Logo.jpg" 
                alt="GPDS Logo" 
                className="w-48 h-auto object-contain"
              />
            </button>
          </div>

          {/* Navigation */}
          <div className="space-y-4 mb-8">
            {['projects', 'group', 'inquire'].map((page) => (
              <button
                key={page}
                onClick={() => {
                  if (page !== 'projects') {
                    setSelectedProject(null);
                  }
                  setActivePage(page);
                }}
                className={`block w-fit text-left font-sans tracking-widest uppercase transition-colors cursor-pointer ${
                  activePage === page || (activePage === 'project-detail' && page === 'projects')
                    ? 'text-slate-900 font-semibold'
                    : 'text-slate-700 font-normal hover:text-slate-900'
                }`}
              >
                {page}
              </button>
            ))}
          </div>

          {/* Project Info (only shown on project detail page) */}
          {activePage === 'project-detail' && selectedProject && (
            <div className="space-y-6">
              <div>
                <p className="text-sm font-sans font-normal tracking-widest uppercase text-slate-900 mb-4">
                  {selectedProject.type.toUpperCase()}
                </p>
                <p className="text-slate-700 font-serif font-normal leading-relaxed mb-6">
                  {selectedProject.description}
                </p>
              </div>
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-sans font-normal tracking-widest uppercase text-slate-900 mb-1">LOCATION</p>
                  <p className="text-slate-700 font-serif font-normal">{selectedProject.location}</p>
                </div>
                <div>
                  <p className="text-sm font-sans font-normal tracking-widest uppercase text-slate-900 mb-1">PHOTOGRAPHER</p>
                  <p className="text-slate-700 font-serif font-normal">n/a</p>
                </div>
                <div>
                  <p className="text-sm font-sans font-normal tracking-widest uppercase text-slate-900 mb-1">YEAR</p>
                  <p className="text-slate-700 font-serif font-normal">{selectedProject.completionDate}</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Bottom Section - Fixed Position */}
        <div className="mt-auto">
          <a 
            href="https://open.spotify.com/playlist/06FLeHP5H9K1lSmZ2SdQoS?si=iF8KAshVSZyw7YPfEeXO6Q&pi=NAXXBSeaS1mrQ"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-sans font-normal tracking-widest uppercase text-slate-700 hover:text-slate-900 transition-colors"
          >
            LISTEN WITH US
          </a>
        </div>
      </div>

      {/* Right Content Area */}
      <div className="flex-1 min-h-screen bg-stone-50 p-12 flex items-center">
        <div className="max-w-4xl w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={activePage}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              {renderContent()}
        </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Quote Reference - Fixed Bottom Right Corner */}
      <div className="fixed bottom-4 right-4 z-10">
        <p className="text-black text-sm font-serif font-normal">1C3:9-11</p>
      </div>

      {/* Contact Info - Fixed Bottom Left (only on inquire page) */}
      {activePage === 'inquire' && (
        <div className="fixed bottom-4 left-1/3 ml-12 z-10 flex items-center space-x-6">
          <p className="text-slate-900 font-serif font-normal">+1 512 992 7981</p>
          <a 
            href="https://www.instagram.com/grouprojectdesign" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity cursor-pointer"
          >
            <img 
              src="/images/instagram_logo_icon_bw.jpg" 
              alt="Instagram" 
              className="w-6 h-6 object-contain"
            />
          </a>
        </div>
      )}




    </div>
  );
}
