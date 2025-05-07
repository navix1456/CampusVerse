import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Book, Home, Gift, Briefcase, Users, Github, Shield, Calculator } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem
} from './ui/dropdown-menu';

const NavLink = ({ to, children, isActive }: { to: string; children: React.ReactNode; isActive: boolean }) => (
  <Link
    to={to}
    className={`relative px-4 py-2 transition-all duration-300 ${
      isActive
        ? 'text-campus-neonBlue'
        : 'text-gray-200 hover:text-campus-neonBlue'
    } group`}
  >
    <span>{children}</span>
    <span
      className={`absolute bottom-0 left-0 h-0.5 w-0 bg-campus-neonBlue transition-all duration-300 ${
        isActive ? 'w-full' : 'group-hover:w-full'
      }`}
    />
  </Link>
);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isOpen
          ? 'py-3 bg-campus-navy bg-opacity-80 backdrop-blur-md shadow-md'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-campus-neonBlue via-campus-purple to-campus-neonPink flex items-center justify-center overflow-hidden">
              <div className="text-white font-bold text-xl transform -rotate-12">
                <Book size={22} className="text-white" />
              </div>
            </div>
            <span className="text-xl font-bold gradient-text">CampusVerse</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <NavLink to="/" isActive={location.pathname === '/'}>
              <div className="flex items-center">
                <Home size={16} className="mr-1" />
                <span>Home</span>
              </div>
            </NavLink>
            <NavLink to="/subjects" isActive={location.pathname === '/subjects'}>
              <div className="flex items-center">
                <Book size={16} className="mr-1" />
                <span>Subjects</span>
              </div>
            </NavLink>
            <NavLink to="/perks" isActive={location.pathname === '/perks'}>
              <div className="flex items-center">
                <Gift size={16} className="mr-1" />
                <span>Student Perks</span>
              </div>
            </NavLink>
            <NavLink to="/placement" isActive={location.pathname === '/placement'}>
              <div className="flex items-center">
                <Briefcase size={16} className="mr-1" />
                <span>Placement</span>
              </div>
            </NavLink>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className={`relative px-4 py-2 transition-all duration-300 flex items-center ${
                  location.pathname.startsWith('/cgpa-calculator') || location.pathname.startsWith('/grade-calculator')
                    ? 'text-campus-neonBlue'
                    : 'text-gray-200 hover:text-campus-neonBlue'
                }`}>
                  <Calculator size={16} className="mr-1" />
                  <span>Calculator</span>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuItem asChild>
                  <Link to="/cgpa-calculator">CGPA Calculator</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/grade-calculator">Grade Calculator</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <NavLink to="/about" isActive={location.pathname === '/about'}>
              <div className="flex items-center">
                <Users size={16} className="mr-1" />
                <span>About Us</span>
              </div>
            </NavLink>
            <NavLink to="/contribute" isActive={location.pathname === '/contribute'}>
              <div className="flex items-center">
                <Github size={16} className="mr-1" />
                <span>Contribute</span>
              </div>
            </NavLink>
            {/*
            <NavLink to="/privacy-policy" isActive={location.pathname === '/privacy-policy'}>
              <div className="flex items-center">
                <Shield size={16} className="mr-1" />
                <span>Privacy</span>
              </div>
            </NavLink>
            */}
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-700">
            <div className="flex flex-col space-y-3">
              <Link to="/" className="px-4 py-2 text-gray-200 hover:text-campus-neonBlue">
                <div className="flex items-center">
                  <Home size={16} className="mr-2" />
                  <span>Home</span>
                </div>
              </Link>
              <Link to="/subjects" className="px-4 py-2 text-gray-200 hover:text-campus-neonBlue">
                <div className="flex items-center">
                  <Book size={16} className="mr-2" />
                  <span>Subjects</span>
                </div>
              </Link>
              <Link to="/perks" className="px-4 py-2 text-gray-200 hover:text-campus-neonBlue">
                <div className="flex items-center">
                  <Gift size={16} className="mr-2" />
                  <span>Student Perks</span>
                </div>
              </Link>
              <Link to="/placement" className="px-4 py-2 text-gray-200 hover:text-campus-neonBlue">
                <div className="flex items-center">
                  <Briefcase size={16} className="mr-2" />
                  <span>Placement</span>
                </div>
              </Link>
              {/* Calculator collapsible section */}
              <div className="px-4 py-2">
                <details>
                  <summary className="flex items-center text-gray-200 hover:text-campus-neonBlue cursor-pointer select-none">
                    <Calculator size={16} className="mr-2" />
                    <span>Calculator</span>
                  </summary>
                  <div className="ml-6 mt-2 flex flex-col space-y-2">
                    <Link to="/cgpa-calculator" className="text-gray-200 hover:text-campus-neonBlue">CGPA Calculator</Link>
                    <Link to="/grade-calculator" className="text-gray-200 hover:text-campus-neonBlue">Grade Calculator</Link>
                  </div>
                </details>
              </div>
              <Link to="/about" className="px-4 py-2 text-gray-200 hover:text-campus-neonBlue">
                <div className="flex items-center">
                  <Users size={16} className="mr-2" />
                  <span>About Us</span>
                </div>
              </Link>
              <Link to="/contribute" className="px-4 py-2 text-gray-200 hover:text-campus-neonBlue">
                <div className="flex items-center">
                  <Github size={16} className="mr-2" />
                  <span>Contribute</span>
                </div>
              </Link>
              {/*
              <Link to="/privacy-policy" className="px-4 py-2 text-gray-200 hover:text-campus-neonBlue">
                <div className="flex items-center">
                  <Shield size={16} className="mr-2" />
                  <span>Privacy</span>
                </div>
              </Link>
              */}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
