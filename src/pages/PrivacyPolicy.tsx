import Navbar from '../components/Navbar';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen pb-12">
      <Navbar />
      
      <div className="container mx-auto px-4 pt-24">
        <h1 className="text-4xl font-bold mb-8 text-center gradient-text">Privacy Policy</h1>
        
        <div className="max-w-3xl mx-auto glass-card-hover neon-border rounded-xl p-8">
          <div className="prose prose-invert max-w-none">
            <h2 className="text-2xl font-bold mb-4">Introduction</h2>
            <p className="mb-4">
              CampusVerse is a static website dedicated to providing educational resources for SRM students. 
              This privacy policy explains how we handle information on our website.
            </p>

            <h2 className="text-2xl font-bold mb-4">Information Collection</h2>
            <p className="mb-4">
              As a static website, CampusVerse does not collect or store any personal information from its users. 
              We do not use cookies or any tracking mechanisms to gather user data.
            </p>

            

            <h2 className="text-2xl font-bold mb-4">External Links</h2>
            <p className="mb-4">
              Our website contains links to external resources and study materials. We are not responsible 
              for the privacy practices or content of these external websites.
            </p>

            <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
            <p className="mb-4">
              If you have any questions about this privacy policy, please contact us at: 
              <a href="mailto:navix1456@gmail.com" className="text-campus-neonBlue hover:text-campus-neonBlue/80 ml-2">
                navix1456@gmail.com
              </a>
            </p>

            <h2 className="text-2xl font-bold mb-4">Updates to Privacy Policy</h2>
            <p className="mb-4">
              We may update this privacy policy from time to time. Any changes will be posted on this page 
              with an updated revision date.
            </p>

            <p className="text-sm text-gray-400 mt-8">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy; 