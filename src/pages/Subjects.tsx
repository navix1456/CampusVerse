
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import SemesterView from '../components/SemesterView';
import SubjectView from '../components/SubjectView';
import { ChevronLeft } from 'lucide-react';
import { subjectsBySemseter } from '../data/subjectsData';
import { resourceData } from '../data/resourcesData';

const Subjects = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [semester, setSemester] = useState<number | null>(null);
  const [selectedSubject, setSelectedSubject] = useState<{ id: string; name: string; code: string } | null>(null);
  
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const semesterParam = params.get('semester');
    
    if (semesterParam) {
      setSemester(parseInt(semesterParam));
    }
    
    const subjectParam = params.get('subject');
    if (subjectParam && semester) {
      const subject = subjectsBySemseter[semester]?.find(s => s.id === subjectParam);
      if (subject) {
        setSelectedSubject(subject);
      }
    } else {
      setSelectedSubject(null);
    }
  }, [location.search, semester]);
  
  const handleSubjectClick = (subject: { id: string; name: string; code: string }) => {
    setSelectedSubject(subject);
    navigate(`/subjects?semester=${semester}&subject=${subject.id}`);
  };
  
  const handleBackClick = () => {
    if (selectedSubject) {
      setSelectedSubject(null);
      navigate(`/subjects?semester=${semester}`);
    } else {
      navigate('/');
    }
  };
  
  return (
    <div className="min-h-screen pb-12">
      <Navbar />
      
      <div className="container mx-auto px-4 pt-24">
        {!semester && (
          <>
            <h1 className="text-3xl font-bold mb-8 text-center">
              <span className="gradient-text">Select Your Semester</span>
            </h1>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((sem) => (
                <button
                  key={sem}
                  onClick={() => {
                    setSemester(sem);
                    navigate(`/subjects?semester=${sem}`);
                  }}
                  className="glass-card-hover rounded-lg p-6 flex flex-col items-center justify-center transition-all"
                >
                  <span className="text-xl font-semibold mb-1">Semester</span>
                  <span className="text-3xl font-bold text-campus-neonBlue">{sem}</span>
                </button>
              ))}
            </div>
          </>
        )}
        
        {semester && !selectedSubject && (
          <SemesterView
            semester={semester}
            subjects={subjectsBySemseter[semester] || []}
            onSubjectClick={handleSubjectClick}
            onBackClick={handleBackClick}
          />
        )}
        
        {semester && selectedSubject && (
          <SubjectView
            subject={selectedSubject}
            resourceData={resourceData}
            onBackClick={handleBackClick}
          />
        )}
      </div>
    </div>
  );
};

export default Subjects;
