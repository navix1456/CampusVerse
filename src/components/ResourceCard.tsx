import { FileText, Video, ExternalLink } from 'lucide-react';

interface ResourceItem {
  name: string;
  link: string;
  thumbnail?: string; // Added for YouTube thumbnails
}

interface ResourceCardProps {
  type: 'PYQs' | 'Study Materials' | 'YouTube';
  title: string;
  link: string;
  items?: ResourceItem[];
  emptyMessage?: string;
}

const ResourceCard = ({ type, title, link, items = [], emptyMessage = 'No items available' }: ResourceCardProps) => {
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
    <div className={`rounded-lg p-6 transition-all bg-gradient-to-br ${getGradientClass()} border border-white/10`}>
      <div className="flex flex-col items-center text-center mb-4">
        <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-4 animate-pulse">
          {getIcon()}
        </div>
        <h3 className="text-xl font-semibold mb-2">{type}</h3>
        <p className="text-sm text-gray-300">{title}</p>
      </div>

      {items.length > 0 ? (
        <div className="mt-4 text-left">
          <ul className="space-y-3">
            {items.map((item, index) => (
              <li key={index} className="border-t border-white/10 pt-3">
                {type === 'YouTube' && item.thumbnail ? (
                  <div className="flex items-center gap-2">
                    <div className="w-16 h-16 rounded overflow-hidden flex-shrink-0">
                      <img 
                        src={item.thumbnail} 
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <a 
                      href={item.link} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm flex-1 hover:text-campus-neonBlue transition-colors"
                    >
                      <span className="line-clamp-2">{item.name}</span>
                    </a>
                    <ExternalLink size={14} className="flex-shrink-0 opacity-70" />
                  </div>
                ) : (
                  <a 
                    href={item.link} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm flex justify-between items-center hover:text-campus-neonBlue transition-colors"
                  >
                    <span>{item.name}</span>
                    <ExternalLink size={14} className="opacity-70" />
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p className="text-sm text-center text-gray-400 mt-4">{emptyMessage}</p>
      )}
    </div>
  );
};

export default ResourceCard;
