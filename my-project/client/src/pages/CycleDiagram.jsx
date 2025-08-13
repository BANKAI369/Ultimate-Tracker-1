import React from 'react';
import { Droplets, Sun, Heart, Moon } from 'lucide-react';

const CycleDiagram = () => {
  // Static phase info for display only
  const phases = [
    {
      name: 'Menstrual',
      color: '#EF4444',
      lightColor: '#FEE2E2',
      icon: Droplets,
      description: 'Menstruation occurs',
      symptoms: ['Cramps', 'Bloating', 'Fatigue'],
      days: '1-5'
    },
    {
      name: 'Follicular',
      color: '#10B981',
      lightColor: '#D1FAE5',
      icon: Sun,
      description: 'Follicles develop',
      symptoms: ['Energy increase', 'Mood improvement'],
      days: '6-13'
    },
    {
      name: 'Ovulation',
      color: '#F59E0B',
      lightColor: '#FEF3C7',
      icon: Heart,
      description: 'Egg is released',
      symptoms: ['Fertile mucus', 'Slight temperature rise'],
      days: '14-16'
    },
    {
      name: 'Luteal',
      color: '#8B5CF6',
      lightColor: '#EDE9FE',
      icon: Moon,
      description: 'Preparing for next cycle',
      symptoms: ['PMS symptoms', 'Mood changes'],
      days: '17-28'
    }
  ];

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-pink-100 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">
        Menstrual Cycle Phases
      </h3>
      <div className="flex flex-col items-center">
        {/* Static SVG placeholder */}
        <div className="relative mb-6">
          <svg width="300" height="300">
            <circle cx="150" cy="150" r="100" stroke="#E5E7EB" strokeWidth="12" fill="none" />
            <text x="150" y="160" textAnchor="middle" className="text-2xl font-bold" fill="#EF4444">
              Day 1
            </text>
          </svg>
        </div>
        {/* Static Phase Info */}
        <div className="text-center mb-6">
          <div className="flex items-center justify-center space-x-3 mb-2">
            <div 
              className="w-10 h-10 rounded-full flex items-center justify-center"
              style={{ backgroundColor: phases[0].lightColor }}
            >
              <Droplets className="w-5 h-5" style={{ color: phases[0].color }} />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900">
                {phases[0].name} Phase
              </h4>
              <p className="text-sm text-gray-600">{phases[0].description}</p>
            </div>
          </div>
        </div>
        {/* Phase Legend */}
        <div className="grid grid-cols-2 gap-4 w-full mb-6">
          {phases.map((phase) => {
            const Icon = phase.icon;
            return (
              <div 
                key={phase.name}
                className="flex items-center space-x-3 p-3 rounded-lg border"
                style={{ backgroundColor: phase.lightColor, borderColor: phase.color + '30' }}
              >
                <Icon className="w-5 h-5" style={{ color: phase.color }} />
                <div>
                  <p className="font-medium text-gray-900">{phase.name}</p>
                  <p className="text-xs text-gray-600">Days {phase.days}</p>
                </div>
              </div>
            );
          })}
        </div>
        {/* Common Symptoms */}
        <div className="w-full">
          <h4 className="font-medium text-gray-900 mb-3">Common symptoms during menstrual phase:</h4>
          <div className="flex flex-wrap gap-2">
            {phases[0].symptoms.map((symptom, index) => (
              <span
                key={index}
                className="px-3 py-1 rounded-full text-sm"
                style={{ 
                  backgroundColor: phases[0].lightColor,
                  color: phases[0].color
                }}
              >
                {symptom}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CycleDiagram;
