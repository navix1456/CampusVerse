
import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

interface SemesterSelectorProps {
  onSelect: (semester: number) => void;
}

const SemesterSelector = ({ onSelect }: SemesterSelectorProps) => {
  const [selectedSemester, setSelectedSemester] = useState<number | null>(null);
  const semesters = [1, 2, 3, 4, 5, 6, 7, 8];

  const handleSemesterClick = (semester: number) => {
    setSelectedSemester(semester);
    onSelect(semester);
  };

  return (
    <div className="py-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-8 gradient-text">Select Your Semester</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
        {semesters.map((semester) => (
          <button
            key={semester}
            onClick={() => handleSemesterClick(semester)}
            className={`glass-card-hover rounded-lg p-6 flex flex-col items-center justify-center transition-all ${
              selectedSemester === semester
                ? 'border-campus-neonBlue shadow-[0_0_15px_rgba(0,240,255,0.3)]'
                : 'border-white/10'
            }`}
          >
            <span className="text-xl font-semibold mb-1">Semester</span>
            <span className="text-3xl font-bold text-campus-neonBlue">{semester}</span>
            {selectedSemester === semester && (
              <ArrowRight className="mt-3 text-campus-neonBlue animate-pulse" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SemesterSelector;
