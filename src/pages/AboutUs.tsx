import Navbar from '../components/Navbar';
import DeveloperCard from '../components/DeveloperCard';
import { Mail } from 'lucide-react';

const AboutUs = () => {
  return (
    <div className="min-h-screen pb-12">
      <Navbar />
      
      <div className="container mx-auto px-4 pt-24">
        <h1 className="text-4xl font-bold mb-8 text-center gradient-text">About Us</h1>
        
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <p className="text-lg text-gray-300 mb-6">
            CampusVerse is the one and only platform dedicated to SRM students, providing a comprehensive collection of study materials, 
            previous year question papers, and valuable resources. Our mission is to create a centralized hub where SRM students can 
            find everything they need for their academic success.
          </p>
          <p className="text-lg text-gray-300 mb-6">
            We are actively looking for contributors who share our vision of making CampusVerse the ultimate resource for SRM students. 
            Together, we can build a stronger academic community.
          </p>
        </div>

        <div className="max-w-md mx-auto mb-12 glass-card-hover neon-border rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-4 text-center gradient-text">Contact Us</h2>
          <div className="flex items-center justify-center gap-2 text-gray-300">
            <Mail size={20} />
            <a href="mailto:navix1456@gmail.com" className="hover:text-campus-neonBlue transition-colors">
              navix1456@gmail.com
            </a>
          </div>
        </div>
        
        <DeveloperCard
          name="Navin Muthu M"
          role="Full Stack Developer"
          image="/uploads/340a89e8-3464-4b85-b6c1-01aac74d9fab.png"
          bio="CampusVerse is built by students, for students. Meet the developer who's building a smarter campus ecosystem."
          github="https://github.com/navix1456/"
          linkedin="https://www.linkedin.com/in/navin-muthu/"
        />
      </div>
    </div>
  );
};

export default AboutUs;
