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
      <div className="flex flex-col min-h-screen">
        {/* Network-Themed Background */}
        <div
          className="fixed inset-0 bg-[url('/Gradient_1.jpg')] 
          bg-cover bg-center opacity-100 z-0"  
          aria-hidden="true"
        ></div>

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
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12 lg:mb-16">
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
