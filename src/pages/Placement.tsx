import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import PlacementModal from '../components/PlacementModal';
import { ChevronDown, ChevronUp, Link, FileText, Book, ExternalLink, Building, FileCheck, Video, FileSpreadsheet } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const placementData = {
  srmResources: [
    { 
      name: 'Use Cases - Marquee Companies', 
      link: 'https://drive.google.com/drive/folders/1bV0a9biHI6e0Yhcnyt-6W0GqjH7tgeUH',
      icon: <Building size={18} className="text-campus-neonBlue" />
    },
    { 
      name: 'Use Cases - SuperDream Companies', 
      link: 'https://drive.google.com/drive/folders/1974Mq5Hizq9kDnr6gedY6bBs7w3THI1X',
      icon: <Building size={18} className="text-campus-neonBlue" />
    },
    { 
      name: 'Resumes of Placed Students', 
      link: 'https://docs.google.com/spreadsheets/d/1sMwmPRpBir5IrNfmji6AcJNIQhAyE9OF2_-J0w6XJsw',
      icon: <FileCheck size={18} className="text-campus-neonPink" />
    },
    { 
      name: 'Placement Prep Talk', 
      link: 'https://docs.google.com/spreadsheets/d/1c2H5X2bvLYup1J7kYXaaDz1SY28WKqhNvPRpniRd4hE',
      icon: <FileSpreadsheet size={18} className="text-campus-neonPink" />
    },
    { 
      name: 'Technical Aptitude Questions Video', 
      link: 'https://drive.google.com/file/d/1NzieNEZNYcu3S2yQjirAxLC5M1zPk7AO',
      icon: <Video size={18} className="text-red-500" />
    },
    { 
      name: 'Video - Use Cases', 
      link: 'https://docs.google.com/spreadsheets/d/1aUQ6NxPTDd9hhO1s3zK5HIy8s-tSEh4YU1MDhWzoL7Y',
      icon: <Video size={18} className="text-red-500" />
    },
    { 
      name: 'E&T Global Industry Certification Details', 
      link: 'https://drive.google.com/file/d/1LM5T1DQguJfU20LQ37KcpCI9h3AgMwg8/view?usp=sharing',
      icon: <FileText size={18} className="text-campus-neonBlue" />
    },
    { 
      name: 'PREPARE PURSUE PROSPER (P CUBE PPT)', 
      link: 'https://docs.google.com/presentation/d/1fv9SuR8XtDy8-PUQlcmuq2ELO_7sf8Ht/edit?usp=sharing&ouid=103174872615923954136&rtpof=true&sd=true',
      icon: <FileText size={18} className="text-campus-neonBlue" />
    },
  ]
};

const ResourceLink = ({ item }: { item: { name: string; link: string; icon?: React.ReactNode } }) => (
  <li className="flex items-center">
    {item.icon || <Link size={16} className="mr-2 text-campus-neonPink" />}
    <a 
      href={item.link} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="hover:text-campus-neonBlue transition-colors flex-1"
    >
      {item.name}
    </a>
    <a 
      href={item.link} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="ml-2 px-4 py-1 text-xs bg-campus-purple/30 rounded-full hover:bg-campus-purple/50 transition-colors"
    >
      View
    </a>
  </li>
);

const Placement = () => {
  const [showModal, setShowModal] = useState(true);

  const handlePortalClick = () => {
    window.open('https://sp.srmist.edu.in/srmiststudentportal/students/loginManager/youLogin.jsp', '_blank');
    setShowModal(false);
  };

  return (
    <div className="min-h-screen pb-12">
      <Navbar />
      
      <PlacementModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onPortalClick={handlePortalClick}
      />
      
      <div className="container mx-auto px-4 pt-24">
        <h1 className="text-4xl font-bold mb-2 text-center gradient-text">Placement Resources</h1>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          Comprehensive resources to help you prepare for interviews and land your dream job.
        </p>
        
        <div className="max-w-4xl mx-auto">          
          <h2 className="text-2xl font-semibold mb-6 text-center">SRM Placement Resources</h2>
          <div className="glass-card rounded-lg p-6 mb-12">
            <ul className="space-y-4">
              {placementData.srmResources.map((item, index) => (
                <ResourceLink key={index} item={item} />
              ))}
            </ul>
          </div>
          
          <h3 className="text-2xl font-bold text-campus-neonBlue mb-4">For More Information About Placements</h3>
          <a
            href="https://sp.srmist.edu.in/srmiststudentportal/students/loginManager/youLogin.jsp"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl font-semibold hover:underline"
          >
            Use SRMIST STUDENT PORTAL
          </a>
          
          <div className="mt-8 flex flex-col items-center gap-6">
            <div className="glass-card p-4 rounded-lg max-w-md">
              <img 
                src="/uploads/d95674d1-2c4b-4f94-84c2-dbc4cf607e30.png" 
                alt="Placement Insight Dashboard Logo" 
                className="w-full"
              />
            </div>
            
            <div className="glass-card p-4 rounded-lg w-full">
              <img 
                src="/uploads/3cfa8070-714e-47c5-a960-4376b3e71a08.png" 
                alt="Placement Insight Dashboard Interface" 
                className="w-full rounded"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Placement;
