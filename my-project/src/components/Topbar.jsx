import React from 'react'
import { ThemeProvider, useTheme } from '../context/ThemeContext';
import { BarChart3,Target, Calendar, Wallet, Sun, Moon } from 'lucide-react';


const Topbar = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';
  const handleThemeToggle = () => {
    toggleTheme();
  };

  return (
    <ThemeProvider>
      <header className="bg-white/80 backdrop-blur-md border-b border-white/20 sticky top-0 z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl">
                    <BarChart3 className="text-white" size={24} />
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      Ultimate Tracker
                    </h1>
                    <p className="text-sm text-gray-600">Your all-in-one life dashboard</p>
                  </div>
                </div>
                <div className="hidden sm:flex items-center space-x-6 text-sm text-gray-600">
                  <div className="flex items-center space-x-1">
                    <Target size={16} />
                    <span>Goals</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar size={16} />
                    <span>Today</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Wallet size={16} />
                    <span>Budget</span>
                  </div>
                  <div>
                    <button
                      onClick={handleThemeToggle}
                      className="p-2 backdrop-blur-sm transition-all duration-200"
                      aria-label="Toggle theme"
                    >
                      {isDark ? (
                        <Sun className="text-yellow-500" size={20} />
                      ) : (
                        <Moon className="text-gray-600 dark:text-gray-300" size={20} />
                      )}
                    </button>
                  </div>
                  <div>
                  </div>
                </div>
              </div>
            </div>
          </header>
    </ThemeProvider>
  )
}

export default Topbar
