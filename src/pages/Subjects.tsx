
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import SubjectCard from '../components/SubjectCard';
import ResourceCard from '../components/ResourceCard';
import { ChevronLeft } from 'lucide-react';

// Comprehensive subjects data by semester
const subjectsBySemseter: Record<number, Array<{ id: string; name: string; code: string }>> = {
  1: [
    { id: 'mat101', name: 'Calculus And Linear Algebra', code: 'MAT101' },
    { id: 'chy101', name: 'Chemistry', code: 'CHY101' },
    { id: 'poe101', name: 'Philosophy Of Engineering', code: 'POE101' },
    { id: 'icb101', name: 'Introduction To Computational Biology', code: 'ICB101' },
    { id: 'pps101', name: 'Programming For Problem Solving', code: 'PPS101' },
    { id: 'foe101', name: 'Fundamental Of Economics', code: 'FOE101' },
    { id: 'bms101', name: 'Biomedical Sensors', code: 'BMS101' },
    { id: 'frl101', name: 'Foreign Languages', code: 'FRL101' },
    { id: 'clb101', name: 'Cell Biology', code: 'CLB101' },
    { id: 'mcb101', name: 'Microbiology', code: 'MCB101' },
    { id: 'pac101', name: 'Physical And Analytical Chemistry', code: 'PAC101' },
    { id: 'bcm101', name: 'Biochemistry', code: 'BCM101' },
  ],
  2: [
    { id: 'mat102', name: 'Advanced Calculus And Complex Analysis', code: 'MAT102' },
    { id: 'eee101', name: 'Electrical And Electronics Engineering', code: 'EEE101' },
    { id: 'spc101', name: 'Semiconductor Physics And Computational Methods', code: 'SPC101' },
    { id: 'mec101', name: 'Physics-Mechanics', code: 'MEC101' },
    { id: 'oop101', name: 'Object Oriented Design And Programming', code: 'OOP101' },
    { id: 'eng101', name: 'Communicative English', code: 'ENG101' },
    { id: 'emp101', name: 'Electromagnetic Physics', code: 'EMP101' },
    { id: 'erm101', name: 'Engineering Mechanics', code: 'ERM101' },
    { id: 'esp101', name: 'Electronic System And PCB Design', code: 'ESP101' },
  ],
  3: [
    { id: 'dsa101', name: 'Data Structures And Algorithm', code: 'DSA101' },
    { id: 'coa101', name: 'Computer Organization And Architecture', code: 'COA101' },
    { id: 'ops101', name: 'Operating Systems', code: 'OPS101' },
    { id: 'tbv101', name: 'Transforms And Boundary Value Problems', code: 'TBV101' },
    { id: 'app101', name: 'Advanced Programming Practice', code: 'APP101' },
    { id: 'dtm101', name: 'Design Thinking And Methodology', code: 'DTM101' },
    { id: 'dld101', name: 'Digital Logic Design', code: 'DLD101' },
    { id: 'ssd101', name: 'Solid State Devices', code: 'SSD101' },
    { id: 'bcm101', name: 'Biochemistry', code: 'BCM101' },
    { id: 'emt101', name: 'Electromagnetic Thoery And Interference', code: 'EMT101' },
    { id: 'bce101', name: 'Basic Chemical Engineering', code: 'BCE101' },
    { id: 'bpp101', name: 'Bioprocess Principles', code: 'BPP101' },
    { id: 'gac101', name: 'Genetics And Cytogenetics', code: 'GAC101' },
    { id: 'mcb101', name: 'Microbiology', code: 'MCB101' },
    { id: 'soe101', name: 'Social Engineering', code: 'SOE101' },
  ],
  4: [
    { id: 'daa101', name: 'Design And Analysis Of Algorithms', code: 'DAA101' },
    { id: 'dbms101', name: 'Database Management Systems', code: 'DBMS101' },
    { id: 'ai101', name: 'Artificial Intelligence', code: 'AI101' },
    { id: 'pqt101', name: 'Probability And Queueing Theory', code: 'PQT101' },
    { id: 'soe101', name: 'Social Engineering', code: 'SOE101' },
    { id: 'bpe101', name: 'Bioprocess Engineering', code: 'BPE101' },
    { id: 'ccs101', name: 'Cell Communication And Signaling', code: 'CCS101' },
    { id: 'swp101', name: 'Software Process', code: 'SWP101' },
    { id: 'cep101', name: 'Chemical Engineering Principles', code: 'CEP101' },
    { id: 'mob101', name: 'Molecular Biology', code: 'MOB101' },
    { id: 'iot101', name: 'Internet Of Things', code: 'IOT101' },
  ],
  5: [
    { id: 'dsm101', name: 'Discrete Mathematics', code: 'DSM101' },
    { id: 'fla101', name: 'Formal Language And Automata', code: 'FLA101' },
    { id: 'cnt101', name: 'Computer Networks', code: 'CNT101' },
    { id: 'ml101', name: 'Machine Learning', code: 'ML101' },
    { id: 'pe2101', name: 'Professional Elective 2', code: 'PE2101' },
    { id: 'oe1101', name: 'Open Elective 1', code: 'OE1101' },
    { id: 'cc101', name: 'Community Connect', code: 'CC101' },
  ],
  6: [
    { id: 'ds101', name: 'Data Science', code: 'DS101' },
    { id: 'sepm101', name: 'Software Engineering And Project Management', code: 'SEPM101' },
    { id: 'cd101', name: 'Compiler Design', code: 'CD101' },
    { id: 'pe3101', name: 'Professional Elective 3', code: 'PE3101' },
    { id: 'pe4101', name: 'Professional Elective 4', code: 'PE4101' },
    { id: 'oe2101', name: 'Open Elective 2', code: 'OE2101' },
    { id: 'pm101', name: 'Project & MOOC', code: 'PM101' },
  ],
  7: [
    { id: 'bp101', name: 'Behavioral Psychology', code: 'BP101' },
    { id: 'pe5101', name: 'Professional Elective 5', code: 'PE5101' },
    { id: 'pe6101', name: 'Professional Elective 6', code: 'PE6101' },
    { id: 'pe7101', name: 'Professional Elective 7', code: 'PE7101' },
    { id: 'pe8101', name: 'Professional Elective 8', code: 'PE8101' },
    { id: 'oe3101', name: 'Open Elective 3', code: 'OE3101' },
  ],
  8: [
    { id: 'mp101', name: 'Major Project', code: 'MP101' },
    { id: 'int101', name: 'Internship', code: 'INT101' },
  ],
};

// Enhanced mock resources data with detailed items and thumbnails for YouTube
const resourceData = {
  pyqs: [
    { name: 'Mid Term Exam 2023', link: '#' },
    { name: 'End Term Exam 2023', link: '#' },
    { name: 'Supplementary Exam 2023', link: '#' },
    { name: 'Mid Term Exam 2022', link: '#' },
    { name: 'End Term Exam 2022', link: '#' },
    { name: 'End Term Exam 2021', link: '#' },
    { name: 'Mid Term Exam 2020', link: '#' },
    { name: 'End Term Exam 2020', link: '#' },
    { name: 'End Term Exam 2019', link: '#' },
  ],
  studyMaterials: [
    { name: 'Unit 1: Introduction', link: '#' },
    { name: 'Unit 2: Basic Concepts', link: '#' },
    { name: 'Unit 3: Advanced Topics', link: '#' },
    { name: 'Unit 4: Applications', link: '#' },
    { name: 'Unit 5: Case Studies', link: '#' },
    { name: 'Topic 1 Slides', link: '#' },
    { name: 'Topic 2 Slides', link: '#' },
    { name: 'Problem Set 1', link: '#' },
    { name: 'Problem Set 2', link: '#' },
    { name: 'Problem Set 3', link: '#' },
  ],
  youtube: [
    { 
      name: 'Complete Course by Jenny Lectures', 
      link: 'https://www.youtube.com/c/JennyLectures', 
      thumbnail: 'https://yt3.googleusercontent.com/ytc/AIf8zZRjZJZj5UsW7hsqN2zpYVvotAdW-AD0OE0nNbZW=s88-c-k-c0x00ffffff-no-rj' 
    },
    { 
      name: 'Tutorial Series by Neso Academy', 
      link: 'https://www.youtube.com/user/nesoacademy', 
      thumbnail: 'https://yt3.googleusercontent.com/ytc/AIf8zZQRr0-dlVxFNQZ2u0Vz9l8K1lWxfcZtu7-_eSFtQQ=s88-c-k-c0x00ffffff-no-rj' 
    },
    { 
      name: 'Crash Course by Gate Smashers', 
      link: 'https://www.youtube.com/c/GateSmashers', 
      thumbnail: 'https://yt3.googleusercontent.com/ytc/AIf8zZTbFjMfwxDYoYIpQikqFwT7BuPZ3M4JCtRjXmaTuw=s88-c-k-c0x00ffffff-no-rj' 
    },
    { 
      name: 'Concept Explanations by Unacademy', 
      link: 'https://www.youtube.com/c/unacademy', 
      thumbnail: 'https://yt3.googleusercontent.com/ytc/AIf8zZQ45ATGnyQf1dBeEYZOdjKkaQ0NOgRmHHre-E2R=s88-c-k-c0x00ffffff-no-rj' 
    },
    { 
      name: 'Problem Solving by CodeWithHarry', 
      link: 'https://www.youtube.com/c/CodeWithHarry', 
      thumbnail: 'https://yt3.googleusercontent.com/ytc/AIf8zZSn_hGYu-EqbholbQFpeRZ-WnUmWM90jiQTaJ4z=s88-c-k-c0x00ffffff-no-rj' 
    },
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
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <ResourceCard
                type="PYQs"
                title="2019-2023 papers"
                link="#"
                items={resourceData.pyqs}
              />
              <ResourceCard
                type="Study Materials"
                title="Notes, Slides, PDFs"
                link="#"
                items={resourceData.studyMaterials}
              />
              <ResourceCard
                type="YouTube"
                title="Playlist links"
                link="#"
                items={resourceData.youtube}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Subjects;
