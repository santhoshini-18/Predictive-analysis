import React from 'react';
import * as Icons from 'lucide-react';
import { MetricCard as MetricCardType } from '../types';

export const MetricCard: React.FC<MetricCardType> = ({ title, value, change, icon }) => {
  const IconComponent = Icons[icon as keyof typeof Icons];
  const isPositive = change >= 0;

  return (
    <div className="bg-white rounded-xl p-6 shadow-lg">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="p-3 bg-blue-50 rounded-lg">
            <IconComponent className="w-6 h-6 text-blue-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-700">{title}</h3>
        </div>
      </div>
      <div className="mt-4">
        <p className="text-2xl font-bold text-gray-900">{value}</p>
        <div className="flex items-center mt-2">
          <span className={`text-sm ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
            {isPositive ? '↑' : '↓'} {Math.abs(change)}%
          </span>
          <span className="text-sm text-gray-500 ml-2">vs last month</span>
        </div>
      </div>
    </div>
  );
};