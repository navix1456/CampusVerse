
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import SemesterSelector from '../components/SemesterSelector';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();
  
  const handleSemesterSelect = (semester: number) => {
    // Navigate to subjects page with the selected semester
    navigate(`/subjects?semester=${semester}`);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <div id="resources-section">
        <SemesterSelector onSelect={handleSemesterSelect} />
      </div>
    </div>
  );
};

export default Index;
