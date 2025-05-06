import { Button } from '../components/ui/button';
import Image from '../components/OptimizedImage';

const images = [
  '/uploads/Screenshot 2025-05-06 202922.png', // 1: Fork repo
  '/uploads/Screenshot 2025-05-06 222525.png', // 2: Clone repo
  '/uploads/Screenshot 2025-05-06 220906.png', // 3: Edit files
  '/uploads/Screenshot 2025-05-06 202753.png', // 4: Commit changes
  '/uploads/Screenshot 2025-05-06 203015.png', // 5: Create PR
  '/uploads/Screenshot 2025-05-06 203121.png', // 6: Go to PR tab
  '/uploads/Screenshot 2025-05-06 203143.png', // 7: Click create PR
  '/uploads/Screenshot 2025-05-06 203247.png', // 8: Add description
];

const ContributeInstructions = () => (
  <div className="min-h-screen pb-12 px-4 max-w-3xl mx-auto">
    <h1 className="text-4xl font-bold mb-6 text-center gradient-text">How to Contribute via GitHub</h1>
    <div className="mb-8 text-lg text-gray-300 text-center">
      Follow these steps to contribute to CampusVerse using GitHub!
    </div>

    {/* Step 1: Fork */}
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-2">1. Fork the Repository</h2>
      <p className="mb-4">Click the button below to fork the repository to your own GitHub account.</p>
      <a href="https://github.com/navix1456/CampusVerse" target="_blank" rel="noopener noreferrer">
        <Button variant="default" size="lg">Fork Repository</Button>
      </a>
      <div className="my-4 flex justify-center">
        <Image src={images[0]} alt="Fork the repository" className="rounded-lg shadow-lg max-w-full h-auto" />
      </div>
      <p className="mb-2">Now you have your own copy of the repository!</p>
    </div>

    {/* Step 2: Clone */}
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-2">2. Clone Your Fork</h2>
      <p className="mb-2">Copy the link from your forked repository and run this command in your terminal (VSCode recommended):</p>
      <pre className="bg-gray-900 rounded p-4 overflow-x-auto mb-2"><code>git clone https://github.com/your-username/CampusVerse.git</code></pre>
      <div className="my-4 flex justify-center">
        <Image src={images[1]} alt="Clone the repository" className="rounded-lg shadow-lg max-w-full h-auto" />
      </div>
    </div>

    {/* Step 3: Prerequisites */}
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-2">3. Prerequisites</h2>
      <p className="mb-2">Make sure you have Node.js & npm installed. We recommend using nvm for easy version management.</p>
      <a href="https://github.com/nvm-sh/nvm#installing-and-updating" target="_blank" rel="noopener noreferrer">
        <Button variant="outline" size="sm">Install nvm</Button>
      </a>
    </div>

    {/* Step 4: Setup Project */}
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-2">4. Set Up the Project</h2>
      <p className="mb-2">In your terminal, run the following commands:</p>
      <pre className="bg-gray-900 rounded p-4 overflow-x-auto mb-2"><code>{`cd CampusVerse
npm install
npm run dev`}</code></pre>
      <div className="my-4 flex justify-center">
        <Image src={images[2]} alt="Project setup" className="rounded-lg shadow-lg max-w-full h-auto" />
      </div>
    </div>

    {/* Step 5: Add Upstream */}
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-2">5. Add Upstream Remote</h2>
      <p className="mb-2">To keep your fork updated with the original repository, add the upstream remote:</p>
      <pre className="bg-gray-900 rounded p-4 overflow-x-auto mb-2"><code>git remote add upstream https://github.com/navix1456/CampusVerse.git</code></pre>
    </div>

    {/* Step 6: Make Your Changes */}
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-2">6. Make Your Changes</h2>
      <p className="mb-2">Check <span className="font-mono bg-gray-800 px-2 py-1 rounded">subjectsData.ts</span> for subject IDs, then add or update resources in <span className="font-mono bg-gray-800 px-2 py-1 rounded">resourcesData.ts</span>. You can add links for PYQs, Study Materials, YouTube URLs, etc.</p>
      <div className="my-4 flex justify-center">
        <Image src={images[3]} alt="Edit files" className="rounded-lg shadow-lg max-w-full h-auto" />
      </div>
    </div>

    {/* Step 7: Commit & Push */}
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-2">7. Commit and Push</h2>
      <p className="mb-2">Create a new branch (recommended) or use <span className="font-mono bg-gray-800 px-2 py-1 rounded">main</span>:</p>
      <pre className="bg-gray-900 rounded p-4 overflow-x-auto mb-2"><code>git checkout -b feature-branch-name</code></pre>
      <pre className="bg-gray-900 rounded p-4 overflow-x-auto mb-2"><code>{`git add .
git commit -m "Your clear and concise commit message"
git push origin feature-branch-name`}</code></pre>
      <div className="my-4 flex justify-center">
        <Image src={images[4]} alt="Commit and push" className="rounded-lg shadow-lg max-w-full h-auto" />
      </div>
    </div>

    {/* Step 8: Create Pull Request */}
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-2">8. Create a Pull Request</h2>
      <p className="mb-2">Go to your forked repository on GitHub and click "Compare & pull request".</p>
      <div className="my-4 flex justify-center">
        <Image src={images[5]} alt="Create pull request" className="rounded-lg shadow-lg max-w-full h-auto" />
      </div>
      <p className="mb-2">Go to the Pull Requests tab:</p>
      <div className="my-4 flex justify-center">
        <Image src={images[6]} alt="Go to pull requests" className="rounded-lg shadow-lg max-w-full h-auto" />
      </div>
      <p className="mb-2">Click "Create pull request":</p>
      <div className="my-4 flex justify-center">
        <Image src={images[7]} alt="Click create pull request" className="rounded-lg shadow-lg max-w-full h-auto" />
      </div>
      <p className="mb-2">Add a clear description and click <b>Create pull request</b>.</p>
      <h2 className="text-3xl font-bold text-center mt-8 mb-4 text-green-400">That's it! You're officially a contributor! 🎉</h2>
    </div>
  </div>
);

export default ContributeInstructions; 