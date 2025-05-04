
import PerksCard from '../PerksCard';
import { PerkItem } from '../../data/perksData';

interface CategorySectionProps {
  title: string;
  items: PerkItem[];
  columns?: number;
}

const CategorySection = ({ title, items, columns = 4 }: CategorySectionProps) => {
  // Determine grid columns class based on the number of columns
  const gridColumnsClass = () => {
    switch (columns) {
      case 3:
        return "grid-cols-1 md:grid-cols-3";
      case 4:
        return "grid-cols-1 md:grid-cols-2 lg:grid-cols-4";
      default:
        return "grid-cols-1 md:grid-cols-2 lg:grid-cols-3";
    }
  };

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold mb-6 gradient-text">{title}</h2>
      <div className={`grid ${gridColumnsClass()} gap-6`}>
        {items.map((perk, index) => (
          <PerksCard
            key={`${title.toLowerCase()}-${index}`}
            logo={perk.logo}
            title={perk.title}
            description={perk.description}
            link={perk.link}
          />
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
