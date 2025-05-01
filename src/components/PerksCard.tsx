
import { ExternalLink } from 'lucide-react';

interface PerksCardProps {
  logo: string;
  title: string;
  description: string;
  link: string;
}

const PerksCard = ({ logo, title, description, link }: PerksCardProps) => {
  return (
    <div className="glass-card-hover rounded-lg p-6 transition-all hover:translate-y-[-5px]">
      <div className="flex flex-col items-center text-center">
        <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center mb-4">
          <img src={logo} alt={title} className="w-12 h-12 object-contain" />
        </div>
        <h3 className="text-lg font-semibold mb-1">{title}</h3>
        <p className="text-sm text-gray-300 mb-4 line-clamp-2">{description}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="button-glow py-1.5 px-4 text-sm flex items-center"
        >
          <span className="relative z-10 flex items-center">
            Claim Now
            <ExternalLink size={14} className="ml-1" />
          </span>
        </a>
      </div>
    </div>
  );
};

export default PerksCard;
