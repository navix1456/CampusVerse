
import Navbar from '../components/Navbar';
import PerksCard from '../components/PerksCard';

// Mock perks data
const perksData = [
  {
    logo: "https://github.githubassets.com/favicons/favicon-dark.svg",
    title: "GitHub Student Pack",
    description: "Access developer tools, learning resources, and cloud credits for free.",
    link: "https://education.github.com/pack"
  },
  {
    logo: "https://resources.jetbrains.com/storage/products/jetbrains/img/meta/jetbrains_logo_300x300.png",
    title: "JetBrains Developer Tools",
    description: "Free access to JetBrains IDEs including IntelliJ, PyCharm, and more.",
    link: "https://www.jetbrains.com/student/"
  },
  {
    logo: "https://www.perplexity.ai/favicon.ico",
    title: "Perplexity AI Pro",
    description: "Advanced AI research assistant for academic work and projects.",
    link: "https://www.perplexity.ai/referrals/C21J3TVQ"
  },
  {
    logo: "https://azurecomcdn.azureedge.net/cvt-1c2e480f8fb41a998b2bb498f9b53946d0b8c38123213583bf5c6142f7297d9f/images/icon/favicon.ico",
    title: "Microsoft Azure",
    description: "$100 Azure credit for cloud computing experiments and projects.",
    link: "https://azure.microsoft.com/en-us/free/students/"
  },
  {
    logo: "https://www.canva.com/favicon.ico",
    title: "Canva Pro",
    description: "Free premium Canva access for students to create professional designs.",
    link: "https://www.canva.com/education/students/"
  },
  {
    logo: "https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0a6818292917dbccbc1e_icon_clyde_black_RGB.png",
    title: "Discord Nitro",
    description: "Get 2 months of Discord Nitro for free.",
    link: "https://discord.com/nitro"
  },
  {
    logo: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3ASpotify_logo_without_text.svg&psig=AOvVaw1rk8maEmlDAGVF37XN9LAD&ust=1746166475063000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCLD_oZbPgY0DFQAAAAAdAAAAABAQ.png",
    title: "Spotify Premium",
    description: "50% discount on Spotify Premium subscription.",
    link: "https://www.spotify.com/us/student/"
  },
  {
    logo: "https://static-00.iconduck.com/assets.00/notion-icon-2048x2048-r5vxrxfo.png",
    title: "Notion Personal Pro",
    description: "Free Notion Personal Pro plan for students.",
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
          Exclusive tools, discounts, and resources available to students. Boost your productivity and learning with these offers.
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
