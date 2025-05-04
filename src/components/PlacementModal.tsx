import { X } from 'lucide-react';

interface PlacementModalProps {
  isOpen: boolean;
  onClose: () => void;
  onPortalClick: () => void;
}

const PlacementModal = ({ isOpen, onClose, onPortalClick }: PlacementModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="glass-card rounded-lg p-6 max-w-md w-full relative animate-in fade-in zoom-in duration-300">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <X size={20} />
        </button>

        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold mb-4 gradient-text">📢 Important Notice</h2>
          <p className="text-gray-300 mb-4">
            We're unable to display personal or sensitive placement information here, as this is a public-facing website. Access to such data is restricted to SRM students and is only available through official login credentials.
          </p>
          <p className="text-gray-300 mb-6">
            This page contains only general information.
          </p>
          <p className="text-campus-neonBlue font-semibold mb-6">
            🔒 For complete details, please log in to the SRM Student Portal.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <button
            onClick={onPortalClick}
            className="button-glow py-2 px-4 rounded-lg text-center font-medium hover:opacity-90 transition-opacity"
          >
            Alright, take me to the SRM Portal
          </button>
          <button
            onClick={onClose}
            className="py-2 px-4 rounded-lg text-center font-medium text-gray-400 hover:text-white transition-colors"
          >
            Nah, I'm just here for the general info
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlacementModal; 