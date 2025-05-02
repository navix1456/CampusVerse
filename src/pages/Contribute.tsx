
import Navbar from '../components/Navbar';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Upload, Book, Video, AlertTriangle, MessageSquare, Github } from 'lucide-react';

const ContributionCard = ({ icon, title, description, link }: {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
}) => (
  <div className="glass-card-hover rounded-lg p-6 group flex flex-col items-center text-center">
    <div className="w-16 h-16 rounded-full bg-campus-purple/20 flex items-center justify-center mb-4 group-hover:animate-pulse-glow">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-300 mb-4">{description}</p>
    <a
      href={link}
      className="button-glow py-1.5 px-6"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="relative z-10">Contribute</span>
    </a>
  </div>
);

const ContributorCard = ({ name, role, image, contribution }: {
  name: string;
  role: string;
  image: string;
  contribution: string;
}) => (
  <div className="flex flex-col items-center text-center p-4">
    <Avatar className="w-20 h-20 border-2 border-campus-purple mb-3">
      <AvatarImage src={image} alt={name} />
      <AvatarFallback>{name.charAt(0)}</AvatarFallback>
    </Avatar>
    <h4 className="font-semibold text-lg">{name}</h4>
    <p className="text-campus-neonPink text-sm mb-2">{role}</p>
    <p className="text-gray-400 text-sm">{contribution}</p>
  </div>
);

const contributors = [
  {
    name: "Aditya Sharma",
    role: "Frontend Developer",
    image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952",
    contribution: "UI Design & React Components"
  },
  {
    name: "Priya Mehta",
    role: "Content Curator",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    contribution: "Study Materials & Resources"
  },
  {
    name: "Karthik R",
    role: "Backend Developer",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    contribution: "Data Management & APIs"
  },
  {
    name: "Sneha Gupta",
    role: "Content Writer",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    contribution: "Documentation & Tutorials"
  }
];

const Contribute = () => {
  return (
    <div className="min-h-screen pb-12">
      <Navbar />
      
      <div className="container mx-auto px-4 pt-24">
        <h1 className="text-4xl font-bold mb-2 text-center gradient-text">Contribute to CampusVerse</h1>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          Help us build a comprehensive resource hub for all students. Share your knowledge and materials to support the community.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          <ContributionCard
            icon={<Upload size={32} className="text-campus-neonBlue" />}
            title="Upload Notes"
            description="Share your class notes, presentations, and study materials."
            link="#"
          />
          
          <ContributionCard
            icon={<Book size={32} className="text-campus-neonPink" />}
            title="Share PYQs"
            description="Upload previous year question papers and solutions."
            link="#"
          />
          
          <ContributionCard
            icon={<Video size={32} className="text-red-500" />}
            title="Recommend Resources"
            description="Suggest YouTube channels and online resources."
            link="#"
          />
          
          <ContributionCard
            icon={<AlertTriangle size={32} className="text-yellow-500" />}
            title="Report Errors"
            description="Help us improve by reporting any errors or issues."
            link="#"
          />
        </div>
        
        <div className="text-center mt-16">
          <h3 className="text-2xl font-semibold mb-4">Join Our Community</h3>
          <p className="text-gray-300 mb-6 max-w-lg mx-auto">
            Connect with other students, share resources, and stay updated on new materials.
          </p>
          
          <a
            href="#"
            className="inline-flex items-center px-6 py-3 rounded-lg bg-[#25D366] hover:bg-[#25D366]/90 transition-colors mb-16"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageSquare size={20} className="mr-2" />
            <span>Join Our WhatsApp Community</span>
          </a>
        </div>
        
        <div className="mt-16">
          <h3 className="text-2xl font-semibold mb-6 text-center">Our Contributors</h3>
          <div className="glass-card rounded-lg p-6 mb-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {contributors.map((contributor, index) => (
                <ContributorCard
                  key={index}
                  name={contributor.name}
                  role={contributor.role}
                  image={contributor.image}
                  contribution={contributor.contribution}
                />
              ))}
            </div>
            
            <div className="text-center mt-8">
              <a href="https://github.com/navix1456/campusverse" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-campus-neonBlue hover:underline">
                <Github size={16} className="mr-2" />
                <span>Become a Contributor on GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contribute;
