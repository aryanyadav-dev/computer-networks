import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import TopicCard from './components/TopicCard';
import Modules from './components/contentLinks/Modules';
import PPTs from './components/contentLinks/PPTs';
import PYQs from './components/contentLinks/PYQs';
import Practicals from './components/contentLinks/Practicals';
import StudyMaterials from './components/contentLinks/StudyMaterials';
import ResourcesSection from './components/ResourcesSection';
import { topics } from './data/topics';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gradient-to-br from-black via-blue-900 to-black bg-fixed">
        {/* Network-Themed Background */}
        <div
          className="fixed inset-0 bg-[url('https://images.unsplash.com/photo-1610563166150-fda5495f85a1?auto=format&fit=crop&q=80&w=1920&h=1080&crop=entropy')] 
          bg-cover bg-center opacity-20 z-0"
          aria-hidden="true"
        ></div>

        {/* Glow Effects */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute top-0 left-0 w-[50vw] h-[50vw] bg-third-glow opacity-80 
            blur-[90px] animate-[animateBefore_7s_infinite_cubic-bezier(0.47,_0,_0.745,_0.715)]"
            aria-hidden="true"
          ></div>
          <div
            className="absolute top-[calc(50vh_-_25vw)] left-[calc(50vw_-_25vw)] w-[500px] h-[700px] bg-secondary-glow 
            opacity-80 blur-[90px] animate-[animateAfter_7s_infinite_cubic-bezier(0.47,_0,_0.745,_0.715)]"
            aria-hidden="true"
          ></div>
        </div>

        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main className="flex-grow relative z-10">
          <Routes>
            {/* Default Route - Hero Section with Topics */}
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <div className="container mx-auto px-4" id="content">
                    {/* Topic Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                      {topics.map((topic, index) => (
                        <TopicCard key={index} {...topic} />
                      ))}
                    </div>

                    {/* Resources Section */}
                    <ResourcesSection />
                  </div>
                </>
              }
            />

            {/* Individual Routes for Content Pages */}
            <Route path="/modules" element={<Modules />} />
            <Route path="/ppts" element={<PPTs />} />
            <Route path="/pyqs" element={<PYQs />} />
            <Route path="/practicals" element={<Practicals />} />
            <Route path="/study-materials" element={<StudyMaterials />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
