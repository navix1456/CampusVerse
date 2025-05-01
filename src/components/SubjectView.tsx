
import ResourceCard from '../components/ResourceCard';
import { ChevronLeft } from 'lucide-react';

interface ResourceItem {
  name: string;
  link: string;
  thumbnail?: string;
}

interface ResourceData {
  pyqs: ResourceItem[];
  studyMaterials: ResourceItem[];
  youtube: ResourceItem[];
}

interface SubjectViewProps {
  subject: { id: string; name: string; code: string };
  resourceData: ResourceData;
  onBackClick: () => void;
}

const SubjectView = ({ subject, resourceData, onBackClick }: SubjectViewProps) => {
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
  );
};

export default SubjectView;
