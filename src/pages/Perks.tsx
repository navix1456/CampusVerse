import Navbar from '../components/Navbar';
import PerksCard from '../components/PerksCard';

// Mock perks data
const perksData = [
  {
    logo: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
    title: "GitHub Student Pack",
    description: "Access developer tools, learning resources, and cloud credits for free. Made for SRM Students!",
    link: "https://education.github.com/pack"
  },
  {
    logo: "https://resources.jetbrains.com/storage/products/jetbrains/img/meta/jetbrains_logo_300x300.png",
    title: "JetBrains Developer Tools",
    description: "Free access to JetBrains IDEs including IntelliJ, PyCharm, and more. Exclusive for SRM Students!",
    link: "https://www.jetbrains.com/student/"
  },
  {
    logo: "https://www.perplexity.ai/favicon.ico",
    title: "Perplexity AI Pro",
    description: "Advanced AI research assistant for academic work and projects. Perfect for SRM Students!",
    link: "https://www.perplexity.ai/referrals/C21J3TVQ"
  },
  {
    logo: "https://azurecomcdn.azureedge.net/cvt-1c2e480f8fb41a998b2bb498f9b53946d0b8c38123213583bf5c6142f7297d9f/images/icon/favicon.ico",
    title: "Microsoft Azure",
    description: "$100 Azure credit for cloud computing experiments and projects. Special offer for SRM Students!",
    link: "https://azure.microsoft.com/en-us/free/students/"
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/84/Spotify_icon.svg",
    title: "Spotify Premium",
    description: "50% discount on Spotify Premium subscription. Made for SRM Students!",
    link: "https://www.spotify.com/us/student/"
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png",
    title: "Notion Personal Pro",
    description: "Free Notion Personal Pro plan for students. Exclusive for SRM Students!",
    link: "https://www.notion.so/students"
  },
];

const Perks = () => {
  return (
    <div className="min-h-screen pb-12">
      <Navbar />
      
      <div className="container mx-auto px-4 pt-24">
        <h1 className="text-4xl font-bold mb-2 text-center gradient-text">Student Perks</h1>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          Exclusive tools, discounts, and resources available to SRM Students. Boost your productivity and learning with these special offers.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {perksData.map((perk, index) => (
            <PerksCard
              key={index}
              logo={perk.logo}
              title={perk.title}
              description={perk.description}
              link={perk.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Perks;
