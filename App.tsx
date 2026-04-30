import React from 'react';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { ThreeServices } from './components/ThreeServices';
import { DeckShowcase } from './components/DeckShowcase';
import { VideoGallery } from './components/VideoGallery';
import { SocialPosts } from './components/SocialPosts';
import { Carousels } from './components/Carousels';
import { CreativePortfolio } from './components/CreativePortfolio';
import { WorkExperience } from './components/WorkExperience';
import { TechStack } from './components/TechStack';
import { Contact } from './components/Contact';
import { SlideDeck } from './components/SlideDeck';

const App: React.FC = () => {
  const slides = [
    { id: 'hero', name: 'Intro', component: <Hero /> },
    { id: 'stats', name: 'Impact', component: <Stats /> },
    { id: 'services', name: 'Services', component: <ThreeServices /> },
    { id: 'decks', name: 'Live Decks', component: <DeckShowcase /> },
    { id: 'video', name: 'Video Production', component: <VideoGallery /> },
    { id: 'social', name: 'Short-Form Clips', component: <SocialPosts /> },
    { id: 'carousels', name: 'PDF Carousels', component: <Carousels /> },
    { id: 'creative', name: 'Campaigns', component: <CreativePortfolio /> },
    { id: 'experience', name: 'Experience', component: <WorkExperience /> },
    { id: 'stack', name: 'Tech Stack', component: <TechStack /> },
    { id: 'contact', name: 'Contact', component: <Contact /> },
  ];

  return (
    <div className="antialiased bg-brand-black text-white selection:bg-brand-lime selection:text-black">
      <SlideDeck slides={slides} />
    </div>
  );
};

export default App;
