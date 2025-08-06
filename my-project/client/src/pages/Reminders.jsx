import React from 'react'

import { Clock, Plus, CheckCircle2, Bell, AlertCircle, Star, Calendar, Edit3, Trash2,} from 'lucide-react';


const Reminders = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-blue-100">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl shadow-lg">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">Reminders</h1>
                <p className="text-gray-600">Never miss important tasks</p>
              </div>
            </div>
            <button
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <Plus size={20} />
              <span className="hidden sm:inline">Add Reminder</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Stats Overview */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <div className="bg-white rounded-2xl p-4 lg:p-6 shadow-lg border border-blue-100">
              <div className="flex items-center gap-3">
                <div className="p-2 lg:p-3 bg-blue-100 rounded-xl">
                  <Bell className="h-5 w-5 lg:h-6 lg:w-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-xl lg:text-2xl font-bold text-gray-900"></p>
                  <p className="text-gray-600 text-xs lg:text-sm">Total</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-4 lg:p-6 shadow-lg border border-blue-100">
              <div className="flex items-center gap-3">
                <div className="p-2 lg:p-3 bg-yellow-100 rounded-xl">
                  <Clock className="h-5 w-5 lg:h-6 lg:w-6 text-yellow-600" />
                </div>
                <div>
                  <p className="text-xl lg:text-2xl font-bold text-gray-900"></p>
                  <p className="text-gray-600 text-xs lg:text-sm">Pending</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-4 lg:p-6 shadow-lg border border-blue-100">
              <div className="flex items-center gap-3">
                <div className="p-2 lg:p-3 bg-green-100 rounded-xl">
                  <CheckCircle2 className="h-5 w-5 lg:h-6 lg:w-6 text-green-600" />
                </div>
                <div>
                  <p className="text-xl lg:text-2xl font-bold text-gray-900"></p>
                  <p className="text-gray-600 text-xs lg:text-sm">Completed</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-4 lg:p-6 shadow-lg border border-blue-100">
              <div className="flex items-center gap-3">
                <div className="p-2 lg:p-3 bg-red-100 rounded-xl">
                  <AlertCircle className="h-5 w-5 lg:h-6 lg:w-6 text-red-600" />
                </div>
                <div>
                  <p className="text-xl lg:text-2xl font-bold text-gray-900"></p>
                  <p className="text-gray-600 text-xs lg:text-sm">Overdue</p>
                </div>
              </div>
            </div>
          </div>
        {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 mb-6">
              <button className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200
              `}></button>
          </div>

        {/* Reminders List */}
        <div className="space-y-4">
            <div className="text-center py-12">
              <div className="p-6 bg-white rounded-2xl shadow-lg border border-blue-100 max-w-md mx-auto">
                <Clock className="h-16 w-16 text-blue-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2"></h3>
                <p className="text-gray-600 mb-6">
                </p>
                  <button
                    className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors"
                  >
                    Add Your First Reminder
                  </button>
                
              </div>
            </div>
                <div
                  className={`bg-white rounded-2xl shadow-lg border overflow-hidden hover:shadow-xl transition-all duration-300`}
                >
                  <div className="p-6">
                    <div className="flex items-start gap-4">
                      <button
                        className={`mt-1 transition-colors `}
                      >
                      </button>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className={`text-lg font-bold `}>
                          </h3>
                          <div className="flex items-center gap-2 ml-4">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium `}>
                            </span>
                            <Star className="h-4 w-4 text-red-500" />
                          </div>
                        </div>
                        

                        
                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            
                          </div>
                          <span className="px-2 py-1 bg-gray-100 rounded-full text-xs">
                          </span>
                            <span className="text-red-600 font-medium text-xs">
                              Overdue
                            </span>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <button
                          className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
                        >
                          <Edit3 size={18} />
                        </button>
                        <button
                          className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all duration-200"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
        </div>
      </div>

      
    </div>
  )
}

export default Reminders
