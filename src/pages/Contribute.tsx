import Navbar from '../components/Navbar';
import { Upload, Book, Video, AlertTriangle, MessageSquare } from 'lucide-react';
import ContributorCard from '../components/ContributorCard';
import { Button } from '../components/ui/button';

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

const Contribute = () => {
  return (
    <div className="min-h-screen pb-12">
      <Navbar />
      
      <div className="container mx-auto px-4 pt-24">
        <h1 className="text-4xl font-bold mb-2 text-center gradient-text">Contribute to CampusVerse</h1>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          Help us build a comprehensive resource hub for all students. Share your knowledge and materials to support the community.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-12">
          <a href="/contribute-instructions" className="w-full md:w-auto">
            <Button className="w-full md:w-auto" variant="default" size="lg">
              CONTRIBUTE VIA GITHUB
            </Button>
          </a>
          <a href="https://chat.whatsapp.com/GJApsQYmqZ18rJk822MZe4" target="_blank" rel="noopener noreferrer" className="w-full md:w-auto">
            <Button className="w-full md:w-auto bg-[#25D366] hover:bg-[#25D366]/90 text-white" variant="default" size="lg">
              CONTRIBUTE VIA WHATSAPP
            </Button>
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          <ContributionCard
            icon={<Upload size={32} className="text-campus-neonBlue" />}
            title="Upload Notes"
            description="Share your class notes, presentations, and study materials."
            link="https://chat.whatsapp.com/GJApsQYmqZ18rJk822MZe4"
          />
          
          <ContributionCard
            icon={<Book size={32} className="text-campus-neonPink" />}
            title="Share PYQs"
            description="Upload previous year question papers and solutions."
            link="https://chat.whatsapp.com/GJApsQYmqZ18rJk822MZe4"
          />
          
          <ContributionCard
            icon={<Video size={32} className="text-red-500" />}
            title="Recommend Resources"
            description="Suggest YouTube channels and online resources."
            link="https://chat.whatsapp.com/GJApsQYmqZ18rJk822MZe4"
          />
          
          <ContributionCard
            icon={<AlertTriangle size={32} className="text-yellow-500" />}
            title="Report Errors"
            description="Help us improve by reporting any errors or issues."
            link="https://chat.whatsapp.com/GJApsQYmqZ18rJk822MZe4"
          />
        </div>
        
        <div className="text-center mt-16">
          <h3 className="text-2xl font-semibold mb-4">Join Our Community</h3>
          <p className="text-gray-300 mb-6 max-w-lg mx-auto">
            Connect with other students, share resources, and stay updated on new materials.
          </p>
          
          <a
            href="https://chat.whatsapp.com/GJApsQYmqZ18rJk822MZe4"
            className="inline-flex items-center px-6 py-3 rounded-lg bg-[#25D366] hover:bg-[#25D366]/90 transition-colors mb-16"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageSquare size={20} className="mr-2" />
            <span>Join Our WhatsApp Community</span>
          </a>
        </div>

        {/* Credits Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-8 text-center gradient-text">Credits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <ContributorCard
              name="Bharathwaj Manoharan"
              link="https://github.com/BharathwajManoharan"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contribute;
