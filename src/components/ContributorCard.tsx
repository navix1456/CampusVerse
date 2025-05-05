import { Github, ExternalLink } from 'lucide-react';

interface ContributorCardProps {
  name: string;
  link: string;
}

const ContributorCard = ({ name, link }: ContributorCardProps) => {
  return (
    <div className="glass-card-hover rounded-lg p-6 group flex flex-col items-center text-center">
      <div className="w-32 h-32 rounded-full bg-gray-800 flex items-center justify-center mb-4">
        <span className="text-gray-400 text-lg">Credits</span>
      </div>
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center text-campus-neonBlue hover:text-campus-neonBlue/80 transition-colors"
      >
        <span className="mr-2">Visit Profile</span>
        <ExternalLink size={16} />
      </a>
    </div>
  );
};

export default ContributorCard; 