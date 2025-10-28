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
            
            {/* Quote Reference */}
            <div className="text-center">
              <p className="text-slate-500 text-sm font-sans font-normal">1C3:9-11</p>
            </div>
          </div>
        );
      
      case 'group':
        return (
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-sans font-normal tracking-widest uppercase text-slate-900 mb-6">
                GROUP ETHOS
              </h2>
              <div className="space-y-4 text-slate-700 font-sans font-normal leading-relaxed">
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
              <h3 className="text-xl font-sans font-normal tracking-widest uppercase text-slate-900 mb-3">
                ++ ANNA-NICOLE MORRIS
              </h3>
              <p className="text-slate-700 font-sans font-normal">
                Bachelor of Science in Interior Design from Baylor University - 2021
              </p>
            </div>

            <div className="flex justify-center">
              <img 
                src="/images/group.jpg" 
                alt="Group decorative image" 
                className="w-64 h-auto object-contain rounded-sm"
              />
            </div>

            <div className="w-full">
              <blockquote className="text-slate-700 font-sans font-normal leading-relaxed italic">
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
                  <button 
                    onClick={() => setSelectedProject(project)}
                    className="w-full h-64 rounded-sm border border-black hover:opacity-80 transition-opacity cursor-pointer overflow-hidden"
                  >
                    <img 
                      src={project.images[0]} 
                      alt={`${project.title} - ${project.location}`} 
                      className="w-full h-full object-cover"
                    />
                  </button>
                  <div>
                    <p className="text-slate-600 text-sm font-sans font-normal">{project.type}</p>
                    <p className="text-slate-900 font-sans font-semibold tracking-wider uppercase">{project.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      
      case 'inquire':
        return (
          <div className="flex flex-col items-center justify-center h-full space-y-12">
            {/* Contact Text */}
            <div className="text-center max-w-md">
              <p className="text-slate-700 font-sans font-normal leading-relaxed">
                To inquire about projects, press or partnerships, please get in touch by writing to{' '}
                <a href="mailto:studio@gpdesignstudio.com" className="text-slate-900 hover:underline">
                  studio@gpdesignstudio.com
                </a>
              </p>
            </div>
            
            {/* Centered Cherub Illustration */}
            <div className="flex justify-center">
              <img 
                src="/images/2_cherub.jpg" 
                alt="Cherub illustration" 
                className="w-32 h-24 object-contain"
              />
            </div>

            {/* Contact Info */}
            <div className="flex items-center space-x-6">
              <p className="text-slate-900 font-sans font-normal">+1 512 992 7981</p>
              <a 
                href="https://instagram.com/group_project_design_studio" 
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

            {/* Bottom Reference */}
            <div className="text-center">
              <p className="text-slate-500 text-sm font-sans font-normal">1C3:9-11</p>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-stone-50 flex">
      {/* Left Sidebar */}
      <div className="w-1/3 h-screen bg-stone-50 p-12 flex flex-col sticky top-0">
        {/* Top Section */}
        <div className="space-y-8">
          {/* Cherub Illustration */}
          <div className="flex justify-center">
            <img 
              src="/images/2_cherub.jpg" 
              alt="Cherub illustration" 
              className="w-16 h-16 object-contain"
            />
          </div>

          {/* Branding */}
          <div className="text-center space-y-2">
            <button
              onClick={() => setActivePage('landing')}
              className="hover:opacity-80 transition-opacity cursor-pointer"
            >
              <h1 className="text-3xl font-serif font-normal tracking-widest uppercase text-slate-900">
                GROUP PROJECT
          </h1>
              <div className="space-y-1">
                <p className="text-lg font-serif font-normal tracking-widest uppercase text-slate-700">
                  design
                </p>
                <p className="text-lg font-serif font-normal tracking-widest uppercase text-slate-700">
                  studio
                </p>
              </div>
            </button>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            {['projects', 'group', 'inquire'].map((page) => (
              <button
                key={page}
                onClick={() => setActivePage(page)}
                className={`block w-full text-left font-serif font-normal tracking-widest uppercase transition-colors cursor-pointer ${
                  activePage === page
                    ? 'text-slate-900 font-semibold'
                    : 'text-slate-700 hover:text-slate-900'
                }`}
              >
                {page}
              </button>
            ))}
          </div>
        </div>

        {/* Bottom Section - Fixed Position */}
        <div className="mt-auto">
          <p className="text-sm font-serif font-normal tracking-widest uppercase text-slate-700">
            LISTEN WITH US
          </p>
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

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
        <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-stone-50 rounded-sm max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex justify-between items-center p-6 border-b border-slate-200">
                {/* Navigation Arrow - Previous */}
                <button
                  onClick={() => navigateProject('prev')}
                  className="text-slate-500 hover:text-slate-900 transition-colors cursor-pointer p-2"
                  title="Previous project"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                {/* Project Info */}
                <div className="text-center flex-1">
                  <h2 className="text-2xl font-serif font-normal tracking-widest uppercase text-slate-900">
                    {selectedProject.title}
                  </h2>
                  <p className="text-slate-600 font-sans font-normal mt-1">
                    {selectedProject.location} • {selectedProject.completionDate}
                  </p>
                  <p className="text-slate-400 text-xs font-sans font-normal mt-1">
                    {projects.findIndex(p => p.id === selectedProject.id) + 1} of {projects.length}
                  </p>
                </div>

                {/* Navigation and Close */}
                <div className="flex items-center space-x-2">
                  {/* Navigation Arrow - Next */}
                  <button
                    onClick={() => navigateProject('next')}
                    className="text-slate-500 hover:text-slate-900 transition-colors cursor-pointer p-2"
                    title="Next project"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>

                  {/* Close Button */}
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="text-slate-500 hover:text-slate-900 transition-colors cursor-pointer p-2"
                    title="Close"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6 space-y-6">
                {/* Hero Image */}
                <button
                  onClick={() => setFullSizeImage(selectedProject.images[0])}
                  className="w-full h-80 rounded-sm border border-black overflow-hidden hover:opacity-90 transition-opacity cursor-pointer"
                >
                  <img 
                    src={selectedProject.images[0]} 
                    alt="Project hero image" 
                    className="w-full h-full object-cover"
                  />
                </button>

                {/* Project Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-serif font-normal tracking-widest uppercase text-slate-900 mb-2">
                        Project Overview
                      </h3>
                      <p className="text-slate-700 font-sans font-normal leading-relaxed">
                        {selectedProject.description}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-serif font-normal tracking-widest uppercase text-slate-900 mb-2">
                        Design Details
                      </h3>
                      <div className="space-y-2 text-slate-700 font-sans font-normal">
                        <p><span className="font-semibold">Style:</span> {selectedProject.style}</p>
                        <p><span className="font-semibold">Square Footage:</span> {selectedProject.squareFootage}</p>
                        <p><span className="font-semibold">Type:</span> {selectedProject.type}</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-serif font-normal tracking-widest uppercase text-slate-900 mb-2">
                        Key Materials
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.materials.map((material, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-slate-100 text-slate-700 text-sm font-sans font-normal rounded-sm"
                          >
                            {material}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-serif font-normal tracking-widest uppercase text-slate-900 mb-2">
                        Additional Images
                      </h3>
                      <div className="grid grid-cols-1 gap-4">
                        {selectedProject.images.slice(1).map((image, index) => (
                          <button
                            key={index}
                            onClick={() => setFullSizeImage(image)}
                            className="w-full h-32 rounded-sm border border-black overflow-hidden hover:opacity-90 transition-opacity cursor-pointer"
                          >
                            <img 
                              src={image} 
                              alt={`Additional project image ${index + 2}`} 
                              className="w-full h-full object-cover"
                            />
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
          </div>
        </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Full Size Image Modal */}
      <AnimatePresence>
        {fullSizeImage && (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
            onClick={() => setFullSizeImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={fullSizeImage} 
                alt="Full size project image" 
                className="max-w-full max-h-full object-contain rounded-sm"
              />
              <button
                onClick={() => setFullSizeImage(null)}
                className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors cursor-pointer bg-black/50 rounded-full p-2"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
          </button>
        </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
