import React from 'react';
import { Plus } from 'lucide-react';

const SymptomsTracker = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-pink-100 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">Today's Symptoms</h3>

      {/* Mood Tracker */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-3">Mood</label>
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-500">Terrible</span>
          <div className="flex space-x-2">
            {[...Array(5)].map((_, index) => (
              <button
                key={index}
                className="w-10 h-10 rounded-full text-xl transition-all duration-200 hover:bg-gray-100 hover:scale-105"
              >
                🙂
              </button>
            ))}
          </div>
          <span className="text-xs text-gray-500">Great</span>
        </div>
      </div>

      {/* Symptoms */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-3">Symptoms</label>
        <div className="grid grid-cols-2 gap-2">
          {[...Array(8)].map((_, index) => (
            <button
              key={index}
              className="px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer bg-gray-50 text-gray-600 border border-gray-200 hover:bg-gray-100"
            >
              <div className="flex items-center justify-between">
                <span>Symptom {index + 1}</span>
                <Plus className="w-3 h-3" />
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Quick Add Custom Symptom */}
      <div className="pt-4 border-t border-gray-100">
        <button className="w-full p-3 border-2 border-dashed border-gray-200 rounded-lg text-gray-500 hover:border-pink-300 hover:text-pink-600 transition-colors duration-200">
          <Plus className="w-4 h-4 inline mr-2" />
          Add custom symptom
        </button>
      </div>
    </div>
  );
};

export default SymptomsTracker;
