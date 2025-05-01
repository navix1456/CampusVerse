
import SubjectCard from '../components/SubjectCard';
import { ChevronLeft } from 'lucide-react';

interface SemesterViewProps {
  semester: number;
  subjects: Array<{ id: string; name: string; code: string }>;
  onSubjectClick: (subject: { id: string; name: string; code: string }) => void;
  onBackClick: () => void;
}

const SemesterView = ({ semester, subjects, onSubjectClick, onBackClick }: SemesterViewProps) => {
  return (
    <>
      <button
        onClick={onBackClick}
        className="mb-8 flex items-center text-campus-neonBlue hover:underline"
      >
        <ChevronLeft size={20} />
        <span>Back to Semesters</span>
      </button>

      <h1 className="text-3xl font-bold mb-8 text-center">
        <span className="gradient-text">Semester {semester} Subjects</span>
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {subjects?.map((subject) => (
          <SubjectCard
            key={subject.id}
            subject={subject}
            onClick={onSubjectClick}
          />
        ))}
      </div>
    </>
  );
};

export default SemesterView;
