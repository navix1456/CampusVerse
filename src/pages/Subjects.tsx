import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import SubjectCard from '../components/SubjectCard';
import ResourceCard from '../components/ResourceCard';
import { ChevronLeft } from 'lucide-react';

// Mock subjects data
const subjectsBySemseter: Record<number, Array<{ id: string; name: string; code: string }>> = {
  1: [
    { id: 'mat101', name: 'Mathematics I', code: 'MAT101' },
    { id: 'phy101', name: 'Physics', code: 'PHY101' },
    { id: 'eng101', name: 'Technical English', code: 'ENG101' },
    { id: 'cs101', name: 'Introduction to Programming', code: 'CS101' },
  ],
  2: [
    { id: 'mat102', name: 'Mathematics II', code: 'MAT102' },
    { id: 'chy101', name: 'Chemistry', code: 'CHY101' },
    { id: 'cs102', name: 'Data Structures', code: 'CS102' },
    { id: 'ec101', name: 'Digital Electronics', code: 'EC101' },
  ],
  3: [
    { id: 'cs201', name: 'Data Structures And Algorithms', code: 'CS201' },
    { id: 'cs202', name: 'Computer Organization', code: 'CS202' },
    { id: 'cs203', name: 'Operating Systems', code: 'CS203' },
    { id: 'cs204', name: 'Database Management', code: 'CS204' },
  ],
  4: [
    { id: 'cs205', name: 'Computer Networks', code: 'CS205' },
    { id: 'cs206', name: 'Software Engineering', code: 'CS206' },
    { id: 'cs207', name: 'Theory of Computation', code: 'CS207' },
    { id: 'cs208', name: 'Web Technologies', code: 'CS208' },
  ],
  5: [
    { id: 'cs301', name: 'Artificial Intelligence', code: 'CS301' },
    { id: 'cs302', name: 'Computer Graphics', code: 'CS302' },
    { id: 'cs303', name: 'Cryptography', code: 'CS303' },
    { id: 'cs304', name: 'Mobile Computing', code: 'CS304' },
  ],
  6: [
    { id: 'cs305', name: 'Machine Learning', code: 'CS305' },
    { id: 'cs306', name: 'Cloud Computing', code: 'CS306' },
    { id: 'cs307', name: 'IoT & Applications', code: 'CS307' },
    { id: 'cs308', name: 'Big Data Analytics', code: 'CS308' },
  ],
  7: [
    { id: 'cs401', name: 'Deep Learning', code: 'CS401' },
    { id: 'cs402', name: 'Information Security', code: 'CS402' },
    { id: 'cs403', name: 'Blockchain Technology', code: 'CS403' },
    { id: 'cs404', name: 'Natural Language Processing', code: 'CS404' },
  ],
  8: [
    { id: 'cs405', name: 'Quantum Computing', code: 'CS405' },
    { id: 'cs406', name: 'Robotics', code: 'CS406' },
    { id: 'cs407', name: 'Edge Computing', code: 'CS407' },
    { id: 'cs408', name: 'AR & VR', code: 'CS408' },
  ],
};

// Enhanced mock resources data with detailed items
const resourceData = {
  pyqs: [
    { year: '2023', link: '#', items: [
      { name: 'Mid Term Exam', link: '#' },
      { name: 'End Term Exam', link: '#' },
      { name: 'Supplementary Exam', link: '#' },
    ]},
    { year: '2022', link: '#', items: [
      { name: 'Mid Term Exam', link: '#' },
      { name: 'End Term Exam', link: '#' },
    ]},
    { year: '2021', link: '#', items: [
      { name: 'End Term Exam', link: '#' },
    ]},
    { year: '2020', link: '#', items: [
      { name: 'Mid Term Exam', link: '#' },
      { name: 'End Term Exam', link: '#' },
    ]},
    { year: '2019', link: '#', items: [
      { name: 'End Term Exam', link: '#' },
    ]},
  ],
  studyMaterials: [
    { name: 'Lecture Notes', link: '#', items: [
      { name: 'Unit 1: Introduction', link: '#' },
      { name: 'Unit 2: Basic Concepts', link: '#' },
      { name: 'Unit 3: Advanced Topics', link: '#' },
      { name: 'Unit 4: Applications', link: '#' },
      { name: 'Unit 5: Case Studies', link: '#' },
    ]},
    { name: 'Presentation Slides', link: '#', items: [
      { name: 'Topic 1 Slides', link: '#' },
      { name: 'Topic 2 Slides', link: '#' },
    ]},
    { name: 'Practice Problems', link: '#', items: [
      { name: 'Problem Set 1', link: '#' },
      { name: 'Problem Set 2', link: '#' },
      { name: 'Problem Set 3', link: '#' },
    ]},
  ],
  youtube: [
    { name: 'Topic Playlist', link: '#', items: [
      { name: 'Channel 1: Complete Course', link: '#' },
      { name: 'Channel 2: Tutorial Series', link: '#' },
      { name: 'Channel 3: Crash Course', link: '#' },
    ]},
    { name: 'Important Concepts', link: '#', items: [
      { name: 'Concept 1 Explanation', link: '#' },
      { name: 'Concept 2 Deep Dive', link: '#' },
    ]},
  ],
};

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
        <button
          onClick={handleBackClick}
          className="mb-8 flex items-center text-campus-neonBlue hover:underline"
        >
          <ChevronLeft size={20} />
          <span>{selectedSubject ? 'Back to Subjects' : 'Back to Semesters'}</span>
        </button>
        
        {semester && !selectedSubject && (
          <>
            <h1 className="text-3xl font-bold mb-8 text-center">
              <span className="gradient-text">Semester {semester} Subjects</span>
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {subjectsBySemseter[semester]?.map((subject) => (
                <SubjectCard
                  key={subject.id}
                  subject={subject}
                  onClick={handleSubjectClick}
                />
              ))}
            </div>
          </>
        )}
        
        {semester && selectedSubject && (
          <>
            <h1 className="text-3xl font-bold mb-2 text-center gradient-text">
              {selectedSubject.name}
            </h1>
            <p className="text-center text-gray-400 mb-8">{selectedSubject.code}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <ResourceCard
                type="PYQs"
                title="2019-2023 papers"
                link="#"
                items={resourceData.pyqs.flatMap(year => year.items || [])}
              />
              <ResourceCard
                type="Study Materials"
                title="Notes, Slides, PDFs"
                link="#"
                items={resourceData.studyMaterials.flatMap(material => material.items || [])}
              />
              <ResourceCard
                type="YouTube"
                title="Playlist links"
                link="#"
                items={resourceData.youtube.flatMap(video => video.items || [])}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Subjects;
