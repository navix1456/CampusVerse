import { useEffect, useState } from 'react';
import ResourceCard from '../components/ResourceCard';
import { ChevronLeft } from 'lucide-react';
import { ScrollArea } from './ui/scroll-area';
import { subjectResources } from '../data/resourcesData';

interface ResourceItem {
  name: string;
  link: string;
  thumbnail?: string;
}

interface SubjectViewProps {
  subject: { id: string; name: string; code: string };
  onBackClick: () => void;
}

const SubjectView = ({ subject, onBackClick }: SubjectViewProps) => {
  const [resources, setResources] = useState<{
    pyqs: ResourceItem[];
    studyMaterials: ResourceItem[];
    youtube?: ResourceItem[];
    examStrategies?: ResourceItem[];
    syllabus?: string;
  } | null>(null);

  useEffect(() => {
    const subjectData = subjectResources[subject.id];
    if (!subjectData || (!subjectData.pyqs?.length && !subjectData.studyMaterials?.length)) {
      setResources(null);
      return;
    }
    // Sort studyMaterials by Unit/Chapter number
    const sortedStudyMaterials = [...(subjectData.studyMaterials || [])].sort((a, b) => {
      const getNum = (name: string) => {
        const match = name.match(/(Unit|Chapter)[^\d]*(\d+)/i);
        return match ? parseInt(match[2], 10) : 1000; // Non-units/chapters go last
      };
      return getNum(a.name) - getNum(b.name);
    });
    // Sort pyqs by year (descending)
    const sortedPyqs = [...(subjectData.pyqs || [])].sort((a, b) => {
      const getYear = (name: string) => {
        const match = name.match(/(20\d{2}|19\d{2})/);
        return match ? parseInt(match[0], 10) : 0;
      };
      return getYear(b.name) - getYear(a.name);
    });
    setResources({
      ...subjectData,
      studyMaterials: sortedStudyMaterials,
      pyqs: sortedPyqs,
    });
  }, [subject.id]);
  
  return (
    <>
      <button
        onClick={onBackClick}
        className="mb-8 flex items-center text-campus-neonBlue hover:underline"
      >
        <ChevronLeft size={20} />
        <span>Back to Subjects</span>
      </button>

      <h1 className="text-3xl font-bold mb-2 text-center gradient-text">
        {subject.name}
      </h1>
      <p className="text-center text-gray-400 mb-8">{subject.code}</p>
      
      {resources?.syllabus && (
        <div className="max-w-5xl mx-auto mb-8">
          <a 
            href={resources.syllabus}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-gradient-to-r from-blue-500/30 to-purple-500/30 border border-white/10 p-4 rounded-lg text-center hover:from-blue-500/40 hover:to-purple-500/40 transition-colors"
          >
            <span className="text-xl font-medium">📚 View Syllabus</span>
          </a>
        </div>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <ResourceCard
          type="PYQs"
          title="Previous Year Papers"
          link="#"
          items={resources?.pyqs || []}
          emptyMessage="Coming Soon"
        />
        <ResourceCard
          type="Study Materials"
          title="Notes, Slides, PDFs"
          link="#"
          items={resources?.studyMaterials || []}
          emptyMessage="Coming Soon"
        />
        <ResourceCard
          type="YouTube"
          title="YouTube Resources"
          link="#"
          items={resources?.youtube || []}
          emptyMessage="Coming Soon"
        />
      </div>
    </>
  );
};

export default SubjectView;
