
import { FileText, Video, ExternalLink } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './ui/collapsible';
import { useState } from 'react';

interface ResourceItem {
  name: string;
  link: string;
}

interface ResourceCardProps {
  type: 'PYQs' | 'Study Materials' | 'YouTube';
  title: string;
  link: string;
  items?: ResourceItem[];
}

const ResourceCard = ({ type, title, link, items = [] }: ResourceCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

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
      <div className="flex flex-col items-center text-center">
        <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-4 animate-pulse">
          {getIcon()}
        </div>
        <h3 className="text-xl font-semibold mb-2">{type}</h3>
        <p className="text-sm text-gray-300 mb-4">{title}</p>
        
        <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-full">
          <CollapsibleTrigger className="button-glow py-1.5 px-4 text-sm flex items-center mx-auto">
            <span className="relative z-10 flex items-center">
              {isOpen ? 'Hide' : 'View'}
              <ExternalLink size={14} className="ml-1" />
            </span>
          </CollapsibleTrigger>
          
          <CollapsibleContent className="mt-4 text-left">
            {items.length > 0 ? (
              <ul className="space-y-2">
                {items.map((item, index) => (
                  <li key={index} className="border-t border-white/10 pt-2">
                    <a 
                      href={item.link} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm flex justify-between items-center hover:text-campus-neonBlue transition-colors"
                    >
                      <span>{item.name}</span>
                      <ExternalLink size={12} />
                    </a>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-center text-gray-400">No items available</p>
            )}
            
            <div className="mt-4 text-center">
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-campus-neonBlue hover:underline"
              >
                View All Resources
              </a>
            </div>
          </CollapsibleContent>
        </Collapsible>
      </div>
    </div>
  );
};

export default ResourceCard;
