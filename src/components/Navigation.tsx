import React from 'react';
import { LayoutDashboard, BarChart2, Brain, Settings } from 'lucide-react';
import { NavSection } from '../types';

interface Props {
  activeSection: NavSection;
  onNavigate: (section: NavSection) => void;
}

export const Navigation: React.FC<Props> = ({ activeSection, onNavigate }) => {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'analytics', label: 'Analytics', icon: BarChart2 },
    { id: 'predictions', label: 'Predictions', icon: Brain },
    { id: 'settings', label: 'Settings', icon: Settings },
  ] as const;

  return (
    <nav className="bg-white shadow-lg mb-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-8">
            {navItems.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => onNavigate(id as NavSection)}
                className={`flex items-center px-4 py-4 text-sm font-medium transition-colors duration-200
                  ${activeSection === id 
                    ? 'text-blue-600 border-b-2 border-blue-600' 
                    : 'text-gray-500 hover:text-blue-600'}`}
              >
                <Icon className="w-5 h-5 mr-2" />
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};