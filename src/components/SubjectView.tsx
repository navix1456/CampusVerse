
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
    
    // Default to Calculus and Linear Algebra if the subject is not found
    setResources(subjectData || subjectResources['mat101']);
  }, [subject.id]);
  
  if (!resources) {
    return <div className="text-center">Loading resources...</div>;
  }

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
      
      {resources.syllabus && (
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
          items={resources.pyqs}
        />
        <ResourceCard
          type="Study Materials"
          title="Notes, Slides, PDFs"
          link="#"
          items={resources.studyMaterials}
        />
        {resources.youtube && resources.youtube.length > 0 ? (
          <ResourceCard
            type="YouTube"
            title="YouTube Channels & Playlists"
            link="#"
            items={resources.youtube}
          />
        ) : resources.examStrategies && resources.examStrategies.length > 0 ? (
          <ResourceCard
            type="Study Materials"
            title="Exam Strategies"
            link="#"
            items={resources.examStrategies}
          />
        ) : (
          <ResourceCard
            type="YouTube"
            title="YouTube Resources"
            link="#"
            items={[]}
          />
        )}
      </div>
    </>
  );
};

export default SubjectView;
