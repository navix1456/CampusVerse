
import Navbar from '../components/Navbar';
import DeveloperCard from '../components/DeveloperCard';

const Developer = () => {
  return (
    <div className="min-h-screen pb-12">
      <Navbar />
      
      <div className="container mx-auto px-4 pt-24">
        <h1 className="text-4xl font-bold mb-8 text-center gradient-text">Developer</h1>
        
        <DeveloperCard
          name="Navin Muthu M"
          role="Full Stack Developer"
          image="/lovable-uploads/340a89e8-3464-4b85-b6c1-01aac74d9fab.png"
          bio="CampusVerse is built by students, for students. Meet the developer who's building a smarter campus ecosystem."
          github="https://github.com/navix1456/"
          linkedin="https://www.linkedin.com/in/navin-muthu/"
        />
      </div>
    </div>
  );
};

export default Developer;
