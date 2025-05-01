
import Navbar from '../components/Navbar';
import DeveloperCard from '../components/DeveloperCard';

const Developer = () => {
  return (
    <div className="min-h-screen pb-12">
      <Navbar />
      
      <div className="container mx-auto px-4 pt-24">
        <h1 className="text-4xl font-bold mb-8 text-center gradient-text">Developer</h1>
        
        <DeveloperCard
          name="Campus Developer"
          role="Full Stack Developer"
          image="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
          bio="CampusVerse is built by students, for students. Meet the developer who's building a smarter campus ecosystem."
          github="https://github.com/"
          linkedin="https://linkedin.com/"
        />
      </div>
    </div>
  );
};

export default Developer;
