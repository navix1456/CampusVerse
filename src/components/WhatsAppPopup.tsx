import { useState, useEffect } from 'react';
import { MessageSquare, X } from 'lucide-react';

const WhatsAppPopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if it's the user's first visit
    const hasVisited = localStorage.getItem('hasVisited');
    if (!hasVisited) {
      setIsVisible(true);
      localStorage.setItem('hasVisited', 'true');
    }
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="glass-card-hover neon-border rounded-xl p-6 max-w-md w-full relative animate-float">
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <X size={20} />
        </button>
        
        <div className="text-center">
          <div className="w-16 h-16 rounded-full bg-[#25D366]/20 flex items-center justify-center mx-auto mb-4">
            <MessageSquare size={32} className="text-[#25D366]" />
          </div>
          
          <h3 className="text-2xl font-bold mb-2 gradient-text">Join Our Community!</h3>
          <p className="text-gray-300 mb-6">
            Connect with fellow SRM students, share resources, and stay updated with the latest materials.
          </p>
          
          <a
            href="https://chat.whatsapp.com/GJApsQYmqZ18rJk822MZe4"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 rounded-lg bg-[#25D366] hover:bg-[#25D366]/90 transition-colors"
          >
            <MessageSquare size={20} className="mr-2" />
            <span>Join WhatsApp Community</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default WhatsAppPopup; 