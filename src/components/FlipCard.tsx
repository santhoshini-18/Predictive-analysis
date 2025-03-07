import React, { useState } from 'react';
import * as Icons from 'lucide-react';
import { FlipCard as FlipCardType } from '../types';

interface Props extends FlipCardType {
  riskPercentage?: number;
  tip?: string;
}

export const FlipCard: React.FC<Props> = ({ title, frontContent, backContent, icon, riskPercentage, tip }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const IconComponent = Icons[icon as keyof typeof Icons];

  return (
    <div
      className="relative h-64 w-full perspective-1000"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div className={`absolute w-full h-full transition-transform duration-500 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
        {/* Front */}
        <div className="absolute w-full h-full bg-white rounded-xl shadow-lg p-6 backface-hidden">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-blue-50 rounded-lg">
                <IconComponent className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
            </div>
            {riskPercentage && (
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                riskPercentage > 70 ? 'bg-red-100 text-red-800' :
                riskPercentage > 30 ? 'bg-yellow-100 text-yellow-800' :
                'bg-green-100 text-green-800'
              }`}>
                {riskPercentage}% Risk
              </span>
            )}
          </div>
          <p className="text-gray-600">{frontContent}</p>
          {tip && (
            <div className="mt-4 p-2 bg-blue-50 rounded-lg">
              <p className="text-sm text-blue-700">💡 Tip: {tip}</p>
            </div>
          )}
        </div>

        {/* Back */}
        <div className="absolute w-full h-full bg-blue-600 text-white rounded-xl shadow-lg p-6 rotate-y-180 backface-hidden">
          <h3 className="text-xl font-semibold mb-4">{title}</h3>
          <p>{backContent}</p>
        </div>
      </div>
    </div>
  );
};