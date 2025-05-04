
import Navbar from '../components/Navbar';
import CategorySection from '../components/perks/CategorySection';
import { perksData, categoryTitles } from '../data/perksData';

const Perks = () => {
  return (
    <div className="min-h-screen pb-12">
      <Navbar />
      
      <div className="container mx-auto px-4 pt-24">
        <h1 className="text-4xl font-bold mb-2 text-center gradient-text">Student Perks</h1>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          Exclusive tools, discounts, and resources available to SRM Students. Boost your productivity and learning with these special offers.
        </p>
        
        {/* Development Tools */}
        <CategorySection 
          title={categoryTitles.development} 
          items={perksData.development} 
          columns={4}
        />
        
        {/* Learning Platforms */}
        <CategorySection 
          title={categoryTitles.learning} 
          items={perksData.learning} 
          columns={4}
        />
        
        {/* Entertainment */}
        <CategorySection 
          title={categoryTitles.entertainment} 
          items={perksData.entertainment} 
          columns={4}
        />
        
        {/* Tools & Security */}
        <CategorySection 
          title={categoryTitles.tools} 
          items={perksData.tools} 
          columns={3}
        />
        
        {/* Travel */}
        <CategorySection 
          title={categoryTitles.travel} 
          items={perksData.travel} 
          columns={3}
        />
        
        {/* Lifestyle */}
        <CategorySection 
          title={categoryTitles.lifestyle} 
          items={perksData.lifestyle} 
          columns={3}
        />
      </div>
    </div>
  );
};

export default Perks;
