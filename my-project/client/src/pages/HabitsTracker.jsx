import React from 'react'
import { Plus, CheckCircle2, Circle, Trash2, Calendar, Target, Flame } from 'lucide-react'

const HabitsTracker = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50">
      {/* Header */}
      <div className="bg-white shadow-lg border-b border-emerald-100">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl shadow-lg">
                <Target className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">Habits Tracker</h1>
                <p className="text-gray-600">Build better habits, one day at a time</p>
              </div>
            </div>
            <button
              className="flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-xl hover:bg-emerald-700 transition-all duration-200 shadow-lg hover:shadow-xl">
              <Plus size={20} />
              <span className="hidden sm:inline">Add Habit</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-white shadow-lg border border-emerald-100 rounded-2xl p-6 flex items-center gap-3">
            <Target className="h-6 w-6 text-emerald-600" />
            <div className="flex flex-col gap-1">
              <p className="text-lg font-bold text-emerald-900">2</p>
              <p className="text-gray-600">Active Habits</p>
            </div>
          </div>
          <div className="bg-white shadow-lg border border-emerald-100 rounded-2xl p-6 flex items-center gap-3">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-orange-100 rounded-xl">
                <Flame className="h-6 w-6 text-orange-600" />
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-2xl font-bold text-emerald-900">5</p>
              <p className="text-gray-600">Longest Streak</p>
            </div>
          </div>
          <div className="bg-white shadow-lg border border-emerald-100 rounded-2xl p-6 flex items-center gap-3">
            <CheckCircle2 className="h-6 w-6 text-emerald-600" />
            <div className="flex flex-col gap-1">
              <p className="text-lg font-bold text-emerald-900">12</p>
              <p className="text-gray-600">Habits Completed</p>
            </div>
          </div>
        </div>
      </div>
      {/* Habits List Section */}
      <div className='space-y-4'>
        <div className='text-center py-12'>
          <div className='p-6 bg-white shadow-lg border border-emerald-100 rounded-2xl max-w-md mx-auto'>
            <Target className='h-16 w-16 text-emerald-600 mx-auto mb-4'/>
            <h3 className='text-xl font-semibold text-gray-900 mb-2'>No Habits yet</h3>
            <p className='text-gray-600 mb-6'>Start building habits by adding your first one!</p>
            <button className='px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors'>Add Your First Habit</button>
          </div>
        </div>

        <div className='bg-white shadow-lg border border-emerald-100 overflow-hidden hover:shadow-xl rounded-2xl transition-all duration-300'>
          <div className='p-6'>
            <div className='flex items-start justify-between mb-4'>
              <div className='flex-1'>
                <h3 className='text-xl font-bold text-gray-900'></h3>
                <p className='text-gray-600 mt-1'></p>

                <div className='flex items-center gap-4 mt-3 text-sm text-gray-500'>
                  <div className='flex items-center gap-1'>
                    <Flame className='h-6 w-6 text-orange-600' />
                    <span> 5 days</span>
                  </div>
                  <div className='flex items-center gap-1'>
                    <CheckCircle2 className='h-6 w-6 text-emerald-600' />
                    <span>total</span>
                  </div>
                </div>
              </div>
              <button className='p-2 text-gray-400 rounded-full hover:text-red-500 hover:bg-red-50 rounded-lg transition-all duration-200'>
                <Trash2 size={18} />
              </button>
              {/*Week View*/}
              <div className='space-y-3'>
                <div className='flex items-center gap-2 text-sm text-gray-600'>
                  <Calendar className='h-4 w-4' />
                  <span>Last 7 days</span>
                </div>
                <div className='grid grid-cols-7 gap-2'>
                  //Here write the logic to display the days of the week with checkboxes

                </div>
              </div>
            </div>

          </div>
        </div>
        
      </div>
    </div>
  )
}

export default HabitsTracker
