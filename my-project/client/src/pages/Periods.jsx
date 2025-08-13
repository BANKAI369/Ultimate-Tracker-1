import React from 'react';
import { Calendar, TrendingUp, Circle, Heart, Moon, Sun, Droplets } from 'lucide-react';
import PeriodCalendar from './PeriodCalendar';
import CycleDiagram from './CycleDiagram';
import SymptomsTracker from './SymptomsTracker';
import StatsCard from './StatsCard';

function Periods() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-pink-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                CycleTracker
              </h1>
            </div>
            <nav className="flex space-x-1">
              <button className="px-4 py-2 rounded-lg flex items-center space-x-2 text-sm font-medium bg-pink-100 text-pink-700 shadow-sm">
                <Calendar className="w-4 h-4" />
                <span className="hidden sm:inline">Overview</span>
              </button>
              <button className="px-4 py-2 rounded-lg flex items-center space-x-2 text-sm font-medium text-gray-600 hover:text-pink-600 hover:bg-pink-50">
                <TrendingUp className="w-4 h-4" />
                <span className="hidden sm:inline">Trends</span>
              </button>
              <button className="px-4 py-2 rounded-lg flex items-center space-x-2 text-sm font-medium text-gray-600 hover:text-pink-600 hover:bg-pink-50">
                <Circle className="w-4 h-4" />
                <span className="hidden sm:inline">Cycle</span>
              </button>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Current Phase Banner */}
        <div className="mb-8 bg-white rounded-2xl shadow-sm border border-pink-100 p-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center space-x-4 mb-4 sm:mb-0">
              <div className="w-12 h-12 rounded-full flex items-center justify-center bg-red-100 text-red-600">
                <Droplets className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-lg font-semibold capitalize text-gray-900">
                  menstrual Phase
                </h2>
                <p className="text-sm text-gray-600">Day 1 of your cycle</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-600">Next period in</p>
              <p className="text-xl font-bold text-pink-600">27 days</p>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <StatsCard
            title="Average Cycle"
            value="28 days"
            icon={Calendar}
            color="pink"
            trend="+1 day from last month"
          />
          <StatsCard
            title="Period Length"
            value="5 days"
            icon={Droplets}
            color="purple"
            trend="Consistent"
          />
          <StatsCard
            title="Next Ovulation"
            value="14 days"
            icon={Heart}
            color="teal"
            trend="High fertility window"
          />
        </div>

        {/* Main Content - Static Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <PeriodCalendar />
          </div>
          <div className="space-y-8">
            <CycleDiagram />
            <SymptomsTracker />
          </div>
        </div>
      </main>
    </div>
  );
}

export default Periods;