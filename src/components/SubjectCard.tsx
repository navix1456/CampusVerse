
import { Book } from 'lucide-react';

interface SubjectCardProps {
  subject: {
    id: string;
    name: string;
    code: string;
  };
  onClick: (subject: { id: string; name: string; code: string }) => void;
}

const SubjectCard = ({ subject, onClick }: SubjectCardProps) => {
  return (
    <div
      onClick={() => onClick(subject)}
      className="glass-card-hover rounded-lg p-6 cursor-pointer transition-transform hover:scale-105 group"
    >
      <div className="flex flex-col items-center text-center">
        <div className="w-12 h-12 rounded-full bg-campus-purple bg-opacity-30 flex items-center justify-center mb-4 group-hover:animate-pulse">
          <Book size={24} className="text-campus-neonBlue" />
        </div>
        <h3 className="text-lg font-semibold mb-1">{subject.name}</h3>
        <p className="text-sm text-gray-400">{subject.code}</p>
      </div>
    </div>
  );
};

export default SubjectCard;
