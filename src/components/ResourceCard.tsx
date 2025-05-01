
import { FileText, Video, ExternalLink } from 'lucide-react';

interface ResourceCardProps {
  type: 'PYQs' | 'Study Materials' | 'YouTube';
  title: string;
  link: string;
}

const ResourceCard = ({ type, title, link }: ResourceCardProps) => {
  const getIcon = () => {
    switch (type) {
      case 'PYQs':
        return <FileText size={24} className="text-campus-neonPink" />;
      case 'Study Materials':
        return <FileText size={24} className="text-campus-neonBlue" />;
      case 'YouTube':
        return <Video size={24} className="text-red-500" />;
      default:
        return <FileText size={24} />;
    }
  };

  const getGradientClass = () => {
    switch (type) {
      case 'PYQs':
        return 'from-pink-500/20 to-purple-600/20';
      case 'Study Materials':
        return 'from-blue-500/20 to-teal-500/20';
      case 'YouTube':
        return 'from-red-500/20 to-amber-500/20';
      default:
        return 'from-purple-500/20 to-blue-500/20';
    }
  };

  return (
    <div className={`rounded-lg p-6 transition-all hover:scale-105 bg-gradient-to-br ${getGradientClass()} border border-white/10`}>
      <div className="flex flex-col items-center text-center">
        <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-4 animate-pulse">
          {getIcon()}
        </div>
        <h3 className="text-xl font-semibold mb-2">{type}</h3>
        <p className="text-sm text-gray-300 mb-4">{title}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="button-glow py-1.5 px-4 text-sm flex items-center"
        >
          <span className="relative z-10 flex items-center">
            View
            <ExternalLink size={14} className="ml-1" />
          </span>
        </a>
      </div>
    </div>
  );
};

export default ResourceCard;
