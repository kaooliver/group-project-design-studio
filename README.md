# Interior Designer Portfolio

A modern, animated portfolio website for interior designers built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- **Landing Page**: Clean, modern design with smooth animations
- **Loading Page**: Animated stick figures with tab navigation
- **Three Main Sections**:
  - Projects: Portfolio showcase with project cards
  - Team: Team member profiles and information
  - About: Company information, values, and process
- **Video Background**: Looping background video on the loading page
- **Responsive Design**: Optimized for all device sizes
- **Smooth Animations**: Powered by Framer Motion

## Setup Instructions

1. **Add Background Video**:
   - Place your background video file in `public/videos/`
   - Name it `background-video.mp4`
   - Ensure the video is optimized for web (compressed, appropriate format)

2. **Add Project Images**:
   - Place project images in `public/images/`
   - Name them `project1.jpg`, `project2.jpg`, etc.
   - Recommended size: 800x600px or similar aspect ratio

3. **Environment Variables**:
   - Copy `.env.local` and update the values as needed
   - Customize site name, designer name, and other settings

## Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Deployment

The project is ready for deployment on Vercel:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with one click

## Customization

- Update colors in Tailwind classes throughout the components
- Modify animations in the Framer Motion components
- Add your own content to the tab components
- Replace placeholder content with real project data

## File Structure

```
src/
├── app/
│   ├── loading/
│   │   └── page.tsx          # Main loading page with tabs
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Landing page
└── components/
    └── tabs/
        ├── ProjectsTab.tsx   # Projects showcase
        ├── TeamTab.tsx       # Team information
        └── AboutTab.tsx      # About section
```

## Technologies Used

- Next.js 14+ (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- React 18+