
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import SemesterSelector from '../components/SemesterSelector';
import { useNavigate } from 'react-router-dom';
import { useEffect, useRef } from 'react';

const Index = () => {
  const navigate = useNavigate();
  const resourcesSectionRef = useRef<HTMLDivElement>(null);
  
  const handleSemesterSelect = (semester: number) => {
    // Navigate to subjects page with the selected semester
    navigate(`/subjects?semester=${semester}`);
  };

  const scrollToResources = () => {
    resourcesSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero onGetResources={scrollToResources} />
      <div id="resources-section" ref={resourcesSectionRef} className="pt-16">
        <SemesterSelector onSelect={handleSemesterSelect} />
      </div>
    </div>
  );
};

export default Index;
