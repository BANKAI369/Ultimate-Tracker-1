import React from 'react'
import { 
  Calendar, 
  DollarSign, 
  Heart, 
  CheckCircle2, 
  Plus,  
  Clock,
  Target,
  Wallet,
  BarChart3
} from 'lucide-react';
import { ThemeProvider } from '../context/ThemeContext';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const handleAddReminder = () => {
    navigate('/reminders');
  };
  return (
    <ThemeProvider>
      <div className='w-full min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100'>
        {/* Main content*/}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Welcome*/}
          <div className='mb-6 text-center'>
            <h2 className='text-3xl font-bold text-gray-800 mb-2'>Good morning 🌟</h2>
            <p className='text-gray-600'>Here's your daily overview Let's make today count</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 w-full">
            {/* Habits Tracker Section */}
            <div className="flex flex-col w-full shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300">
              <div className="w-full bg-gradient-to-br from-emerald-50 to-green-100 rounded-2xl shadow-lg border border-emerald-100">
                <div className="flex gap-3 sm:gap-4 p-3 sm:p-4 lg:p-6 rounded-lg shadow-md items-center w-full">
                  <CheckCircle2 className="h-10 w-10 sm:h-12 sm:w-12 lg:h-14 lg:w-14 p-2 sm:p-3 lg:p-4 text-white bg-purple-500 rounded-md" />
                  <div className="flex flex-col flex-1 border-l border-gray-200 pl-4">
                    <h2 className="font-bold text-green-800 sm:text-lg lg:text-xl">Habits Tracker</h2>
                    <p className="text-gray-500 text-xs sm:text-sm lg:text-base">Track your daily habits</p>
                  </div>
                  <button className="p-2 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition-colors">
                    <Plus size={16} />
                  </button>
                </div>
              </div>
            </div>
            {/* Reminders Section */}
            <div onClick={()=> navigate('/reminders')} className="flex flex-col w-full rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300 bg-gradient-to-br from-blue-50 to-indigo-100 shadow-lg border border-blue-100">
              <div className="w-full flex flex-1 sm:gap-4 p-4 lg:p-6 rounded-md shadow-md items-center">
                <Clock className="h-10 w-10 sm:h-12 sm:w-12 lg:h-14 lg:w-14 p-2 sm:p-3 lg:p-4 text-white bg-orange-500 rounded-md flex-shrink-0" />
                <div className="flex flex-col flex-1 min-w-0 border-l pl-4 border-gray-200">
                  <h2 className="font-semibold font-bold text-blue-800 sm:text-lg lg:text-xl truncate">Reminders</h2>
                  <p className="text-gray-500 text-xs sm:text-sm lg:text-base truncate">Never miss important tasks</p>
                </div>
                <button className="ml-auto p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
                  <Plus size={16} />
                </button>
              </div>
            </div>
            {/* Money Tracker Section */}
            <div className="flex flex-col w-full rounded-2xl bg-gradient-to-br from-purple-50 to-violet-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300">
              <div className="w-full flex gap-3 sm:gap-4 p-3 sm:p-4 lg:p-6 rounded-lg shadow-md border border-purple-100 items-center">
                <DollarSign className="h-10 w-10 sm:h-12 sm:w-12 lg:h-14 lg:w-14 p-2 sm:p-3 lg:p-4 text-white bg-green-500 rounded-md" />
                <div className="flex flex-col flex-1 min-w-0 border-l border-gray-200 pl-4">
                  <h2 className="font-bold sm:text-lg lg:text-xl text-purple-800">Money Tracker</h2>
                  <p className="text-gray-500 text-xs sm:text-sm lg:text-base">Manage your finances</p>
                </div>
                <button className="ml-auto">
                  <Wallet className="text-purple-600" size={24} />
                </button>
              </div>
            </div>
            {/* Period Tracker Section */}
            <div className="flex flex-col w-full rounded-2xl shadow-sm bg-gradient-to-br from-pink-50 to-rose-100 shadow-lg border border-pink-100 overflow-hidden hover:shadow-md transition-shadow duration-300">
              <div className="w-full flex gap-3 sm:gap-4 p-3 sm:p-4 lg:p-6 rounded-lg shadow-md items-center">
                <Heart className="h-10 w-10 sm:h-12 sm:w-12 lg:h-14 lg:w-14 p-2 sm:p-3 lg:p-4 text-white bg-pink-500 rounded-md" />
                <div className="flex flex-col flex-1 min-w-0 border-l border-gray-200 pl-4">
                  <h2 className="font-semibold text-base text-pink-800 font-bold sm:text-lg lg:text-xl">Period Tracker</h2>
                  <p className="text-gray-500 text-xs sm:text-sm">Monitor your cycle</p>
                </div>
                <button className="ml-auto">
                  <Calendar size={24} className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7 text-pink-600 p-1 rounded-md cursor-pointer" />
                </button>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="col-span-full bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 mt-8">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Actions</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <button className="p-4 bg-gradient-to-r from-emerald-500 to-green-600 text-white rounded-xl hover:shadow-lg transition-all transform hover:scale-105">
                <Target className="mx-auto mb-2" size={20} />
                <span className="text-sm font-medium">Add Habit</span>
              </button>
              <button className="p-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl hover:shadow-lg transition-all transform hover:scale-105">
                <Calendar className="mx-auto mb-2" size={20} />
                <span className="text-sm font-medium">Set Reminder</span>
              </button>
              <button className="p-4 bg-gradient-to-r from-purple-500 to-violet-600 text-white rounded-xl hover:shadow-lg transition-all transform hover:scale-105">
                <Wallet className="mx-auto mb-2" size={20} />
                <span className="text-sm font-medium">Add Expense</span>
              </button>
              <button className="p-4 bg-gradient-to-r from-pink-500 to-rose-600 text-white rounded-xl hover:shadow-lg transition-all transform hover:scale-105">
                <BarChart3 className="mx-auto mb-2" size={20} />
                <span className="text-sm font-medium">View Stats</span>
              </button>
            </div>
          </div>
        </main>
        <footer className="w-full bg-white/60 backdrop-blur-md rounded-2xl shadow-sm border border-white/20 p-4 sm:p-6 lg:p-8 mt-6">
          <div className="text-center text-gray-600 text-sm">
            <p className="text-sm text-gray-600">
              Ultimate Tracker • Track everything that matters to you
            </p>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default Home