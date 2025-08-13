import React from 'react';
import { DivideIcon } from 'lucide-react';

const StatsCard = () => {
  return (
    <div className="bg-pink-50 rounded-2xl p-6 border border-opacity-20">
      <div className="flex items-center space-x-4">
        <div className="bg-pink-100 w-12 h-12 rounded-xl flex items-center justify-center">
          <DivideIcon className="w-6 h-6 text-pink-600" />
        </div>
        <div className="flex-1">
          <p className="text-sm text-gray-600 mb-1">Title</p>
          <p className="text-2xl font-bold text-pink-700">Value</p>
          <p className="text-xs text-gray-500 mt-1">Trend</p>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
