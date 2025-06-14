import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, Menu, X, Code, Home, Calendar, Newspaper, Mail, Info, FolderKanban, Trophy, Layers, FileText, LifeBuoy, ArrowRight } from 'lucide-react';
import { Link } from "react-router-dom";
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMoreDropdownOpen, setIsMoreDropdownOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const toggleMoreDropdown = () => setIsMoreDropdownOpen(!isMoreDropdownOpen);

  const navItems = [
    { label: 'Home', href: '/', icon: Home },
    { label: 'Hackathons', href: '/hackathons', icon: Trophy },
    { label: 'Events', href: '/events', icon: Calendar },
    { label: 'Contact', href: '/contact', icon: Mail }
  ];

  const moreItems = [
    { label: 'Blog', href: '/blog', icon: Newspaper },
    { label: 'Resources', href: '/resources', icon: Layers },
    { label: 'Privacy Policy', href: '/privacy-policy', icon: FileText },
    { label: 'Terms of Service', href: '/terms-of-service', icon: FileText },
    { label: 'Support', href: '/support', icon: LifeBuoy }
  ];

  return (
    <>
      <nav className="sticky top-0 z-40 w-full border-b border-gray-500/50 bg-transparent backdrop-blur-md supports-[not(backdrop-filter)]:bg-transparent shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="flex items-center gap-2">
                <Avatar className="h-9 w-9 rounded-full">
                  <AvatarFallback className="bg-primary text-primary-foreground font-bold text-sm">CX</AvatarFallback>
                </Avatar>
                <span className="text-primary font-semibold tracking-tight">CodeX</span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-5">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className="flex items-center space-x-3 tracking-tight hover:bg-white/20 rounded-sm px-3 py-2 text-sm font-medium transition-colors duration-200"
                >
                  {item.icon && React.createElement(item.icon, { className: "h-4 w-4 mr-2" })}
                  {item.label}
                </Link>
              ))}

              {/* More Dropdown (Unchanged) */}
              <div className="relative group">
                <button
                  className="flex items-center space-x-1 tracking-tight hover:bg-white/20 rounded-sm px-3 py-2 text-sm font-medium transition-colors duration-200"
                >
                  <span>More</span>
                  <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
                </button>

                <div className="absolute right-0 mt-2 w-48 bg-background rounded-md shadow-lg border border-primary/10 py-1 z-50 opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 pointer-events-none group-hover:pointer-events-auto">
                  {moreItems.map((item) => (
                    <Link
                      key={item.label}
                      to={item.href}
                      className="flex items-center space-x-3 px-4 py-2 text-sm text-foreground hover:bg-accent hover:text-primary transition-colors duration-200"
                    >
                      {item.icon && React.createElement(item.icon, { className: "h-4 w-4 opacity-70" })}
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Join Us Button (Desktop) */}
              <Link to="https://chat.whatsapp.com/HXQnlpYjI1tELYU2zUgCe7" aria-label="Join the CodeX community">
                <Button 
                  size="lg" 
                  className="group bg-black text-white border border-gray-300/50 hover:bg-gray-900 hover:text-white transition-all duration-300 transform hover:translate-y-[-2px] rounded-2xl"
                >
                  Join Us 
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={toggleMobileMenu}
                className="p-2 rounded-full text-gray-200 hover:text-blue-400 hover:bg-white/20 hover:backdrop-blur-sm transition-all duration-200"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="fixed inset-0 bg-black bg-opacity-50" onClick={toggleMobileMenu}></div>

          {/* Sidebar */}
          <div className="fixed top-0 right-0 h-full w-80 bg-transparent backdrop-blur-md shadow-xl transform transition-transform duration-300 ease-in-out border-l border-gray-700/50">
            <div className="flex items-center justify-between p-4 border-b border-gray-700/50">
              <div className="flex items-center space-x-2">
                <div className="bg-black p-2 rounded-lg border border-gray-300/50">
                  <Code className="h-6 w-6 text-white" />
                </div>
                <span className="text-xl font-bold text-gray-200">CodeX</span>
              </div>
              <button
                onClick={toggleMobileMenu}
                className="p-2 rounded-full text-gray-200 hover:text-blue-400 hover:bg-white/20 hover:backdrop-blur-sm transition-all duration-200"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="py-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className="flex items-center space-x-3 tracking-tight hover:bg-white/20 rounded-sm px-3 py-2 text-sm font-medium text-gray-200 transition-colors duration-200"
                  onClick={toggleMobileMenu}
                >
                  {item.icon && React.createElement(item.icon, { className: "h-4 w-4 mr-2" })}
                  {item.label}
                </Link>
              ))}

              {/* More Section */}
              <div className="mt-4 pt-4 border-t border-gray-700/50">
                <div className="px-3 py-2">
                  <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">More</span>
                </div>
                {moreItems.map((item) => (
                  <Link
                    key={item.label}
                    to={item.href}
                    className="flex items-center space-x-3 tracking-tight hover:bg-white/20 rounded-sm px-3 py-2 text-sm font-medium text-gray-200 transition-colors duration-200"
                    onClick={toggleMobileMenu}
                  >
                    {item.icon && React.createElement(item.icon, { className: "h-4 w-4 mr-2" })}
                    {item.label}
                  </Link>
                ))}
              </div>

              {/* Mobile Join Us Button */}
              <div className="mt-6 px-3">
                <Link to="https://chat.whatsapp.com/HXQnlpYjI1tELYU2zUgCe7" className="block">
                  <Button 
                    className="w-full bg-black text-white border border-gray-300/50 hover:bg-gray-900 hover:text-white py-3 text-base font-medium rounded-2xl transition-all duration-300 transform hover:translate-y-[-2px]"
                  >
                    Join Us
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Click outside to close dropdown */}
      {isMoreDropdownOpen && (
        <div 
          className="fixed inset-0 z-40"
          onClick={() => setIsMoreDropdownOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Navbar;