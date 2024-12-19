import React from 'react';
import { topics } from './data/topics';
import Navbar from './components/Navbar';
import TopicCard from './components/TopicCard';
import Hero from './components/Hero';
import ResourcesSection from './components/ResourcesSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-blue-900 to-black bg-fixed">
      {/* Network-Themed Background in Blue and Black */}
      <div 
        className="fixed inset-0 bg-[url('https://images.unsplash.com/photo-1610563166150-fda5495f85a1?auto=format&fit=crop&q=80&w=1920&h=1080&crop=entropy')] 
        bg-cover bg-center opacity-20 z-0"
      ></div>

      {/* Glow Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-[50vw] h-[50vw] bg-third-glow opacity-80 blur-[90px] animate-[animateBefore_7s_infinite_cubic-bezier(0.47,_0,_0.745,_0.715)]"></div>
        <div className="absolute top-[calc(50vh_-_25vw)] left-[calc(50vw_-_25vw)] w-[500px] h-[700px] bg-secondary-glow opacity-80 blur-[90px] animate-[animateAfter_7s_infinite_cubic-bezier(0.47,_0,_0.745,_0.715)]"></div>
      </div>

      <Navbar />
      
      <div className="relative z-10">
        <Hero />
        
        <main className="container mx-auto px-4" id="content">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {topics.map((topic, index) => (
              <TopicCard key={index} {...topic} />
            ))}
          </div>

          <ResourcesSection />
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default App;
