
import { Github, Linkedin } from 'lucide-react';

interface DeveloperCardProps {
  name: string;
  role: string;
  image: string;
  bio: string;
  github?: string;
  linkedin?: string;
}

const DeveloperCard = ({ name, role, image, bio, github, linkedin }: DeveloperCardProps) => {
  return (
    <div className="glass-card-hover neon-border rounded-xl p-8 max-w-md mx-auto animate-float">
      <div className="flex flex-col items-center text-center">
        <div className="w-32 h-32 rounded-full border-4 border-campus-purple mb-6 overflow-hidden shadow-lg shadow-campus-purple/30">
          <img src={image} alt={name} className="w-full h-full object-cover" />
        </div>
        <h2 className="text-2xl font-bold mb-1 gradient-text">{name}</h2>
        <p className="text-campus-neonBlue mb-4">{role}</p>
        <p className="text-gray-300 mb-6">{bio}</p>
        
        <div className="flex items-center space-x-4">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
            >
              <Github size={20} className="text-white" />
            </a>
          )}
          {linkedin && (
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-[#0A66C2] rounded-full hover:bg-[#0A66C2]/80 transition-colors"
            >
              <Linkedin size={20} className="text-white" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default DeveloperCard;
