import React, { useState, useMemo } from "react";
import {
  Plus,
  Wallet,
  TrendingUp,
  TrendingDown,
  Target,
  Search,
  Filter,
  Calendar,
  Edit,
  Trash2,
  PieChart,
  BarChart3,
  Download,
  Settings
} from "lucide-react";

const CATEGORIES = {
  income: ["Salary", "Business", "Investments", "Freelance", "Gifts", "Other Income"],
  expense: ["Food", "Transportation", "Entertainment", "Shopping", "Bills", "Healthcare", "Education", "Travel", "Other"]
};

// Helper to get today's date as YYYY-MM-DD
const todayISO = () => new Date().toISOString().split("T")[0];

export default function App() {
  const [activeTab, setActiveTab] = useState("dashboard");

  // --- Dummy / sample data restored ---
  const [transactions, setTransactions] = useState([
    {
      id: "t1",
      type: "income",
      amount: 4500,
      category: "Salary",
      description: "September Salary",
      date: todayISO()
    },
    {
      id: "t2",
      type: "expense",
      amount: 75.5,
      category: "Food",
      description: "Groceries",
      date: todayISO()
    },
    {
      id: "t3",
      type: "expense",
      amount: 15,
      category: "Transportation",
      description: "Uber",
      date: todayISO()
    },
    {
      id: "t4",
      type: "income",
      amount: 200,
      category: "Freelance",
      description: "Side project",
      date: todayISO()
    },
    {
      id: "t5",
      type: "expense",
      amount: 1200,
      category: "Rent",
      description: "Monthly rent",
      date: todayISO()
    }
  ]);

  const [budgets, setBudgets] = useState([
    { id: "b1", category: "Food", limit: 400, spent: 0, period: "monthly" },
    { id: "b2", category: "Transportation", limit: 100, spent: 0, period: "monthly" },
    { id: "b3", category: "Entertainment", limit: 150, spent: 0, period: "monthly" }
  ]);

  const [goals, setGoals] = useState([
    {
      id: "g1",
      name: "Emergency Fund",
      targetAmount: 5000,
      currentAmount: 1200,
      deadline: "2025-12-31",
      category: "Savings"
    },
    {
      id: "g2",
      name: "Vacation",
      targetAmount: 2000,
      currentAmount: 300,
      deadline: "2025-08-01",
      category: "Travel"
    }
  ]);
  // --- end dummy data ---

  const [showAddTransaction, setShowAddTransaction] = useState(false);
  const [showAddBudget, setShowAddBudget] = useState(false);
  const [showAddGoal, setShowAddGoal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("");
  const [filterType, setFilterType] = useState("");
  const [dateRange, setDateRange] = useState({ start: "", end: "" });

  // Form states (pre-filled date where appropriate)
  const [transactionForm, setTransactionForm] = useState({
    type: "expense",
    amount: "",
    category: "",
    description: "",
    date: todayISO()
  });

  const [budgetForm, setBudgetForm] = useState({
    category: "",
    limit: "",
    period: "monthly"
  });

  const [goalForm, setGoalForm] = useState({
    name: "",
    targetAmount: "",
    currentAmount: "",
    deadline: "",
    category: ""
  });

  // Calculations
  const totalIncome = transactions
    .filter((t) => t.type === "income")
    .reduce((sum, t) => sum + t.amount, 0);

  const totalExpenses = transactions
    .filter((t) => t.type === "expense")
    .reduce((sum, t) => sum + t.amount, 0);

  const balance = totalIncome - totalExpenses;

  // Update budget spent amounts based on transactions
  const updatedBudgets = budgets.map((budget) => {
    const spent = transactions
      .filter((t) => t.type === "expense" && t.category === budget.category)
      .reduce((sum, t) => sum + t.amount, 0);
    return { ...budget, spent };
  });

  // Filtered transactions
  const filteredTransactions = useMemo(() => {
    return transactions.filter((transaction) => {
      const matchesSearch =
        transaction.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        transaction.category.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = !filterCategory || transaction.category === filterCategory;
      const matchesType = !filterType || transaction.type === filterType;
      const matchesDate =
        (!dateRange.start || transaction.date >= dateRange.start) &&
        (!dateRange.end || transaction.date <= dateRange.end);

      return matchesSearch && matchesCategory && matchesType && matchesDate;
    });
  }, [transactions, searchTerm, filterCategory, filterType, dateRange]);

  // Handlers
  const handleAddTransaction = (e) => {
    e.preventDefault();
    if (!transactionForm.amount || !transactionForm.category || !transactionForm.description) return;

    const newTransaction = {
      id: Date.now().toString(),
      type: transactionForm.type,
      amount: parseFloat(transactionForm.amount),
      category: transactionForm.category,
      description: transactionForm.description,
      date: transactionForm.date
    };

    setTransactions([newTransaction, ...transactions]);
    setTransactionForm({
      type: "expense",
      amount: "",
      category: "",
      description: "",
      date: todayISO()
    });
    setShowAddTransaction(false);
  };

  const handleAddBudget = (e) => {
    e.preventDefault();
    if (!budgetForm.category || !budgetForm.limit) return;

    const newBudget = {
      id: Date.now().toString(),
      category: budgetForm.category,
      limit: parseFloat(budgetForm.limit),
      spent: 0,
      period: budgetForm.period
    };

    setBudgets([newBudget, ...budgets]);
    setBudgetForm({ category: "", limit: "", period: "monthly" });
    setShowAddBudget(false);
  };

  const handleAddGoal = (e) => {
    e.preventDefault();
    if (!goalForm.name || !goalForm.targetAmount || !goalForm.deadline) return;

    const newGoal = {
      id: Date.now().toString(),
      name: goalForm.name,
      targetAmount: parseFloat(goalForm.targetAmount),
      currentAmount: parseFloat(goalForm.currentAmount) || 0,
      deadline: goalForm.deadline,
      category: goalForm.category
    };

    setGoals([newGoal, ...goals]);
    setGoalForm({ name: "", targetAmount: "", currentAmount: "", deadline: "", category: "" });
    setShowAddGoal(false);
  };

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter((t) => t.id !== id));
  };

  const deleteBudget = (id) => {
    setBudgets(budgets.filter((b) => b.id !== id));
  };

  const deleteGoal = (id) => {
    setGoals(goals.filter((g) => g.id !== id));
  };

  const exportData = () => {
    const data = {
      transactions,
      budgets: updatedBudgets,
      goals,
      summary: { totalIncome, totalExpenses, balance }
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `money-tracker-${new Date().toISOString().split("T")[0]}.json`;
    a.click();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Wallet className="w-8 h-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">MoneyTracker Pro</h1>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={exportData}
                className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <Download className="w-5 h-5" />
                <span>Export</span>
              </button>
              <button className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors">
                <Settings className="w-5 h-5" />
                <span>Settings</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            {[
              { id: "dashboard", label: "Dashboard", icon: BarChart3 },
              { id: "transactions", label: "Transactions", icon: TrendingUp },
              { id: "budgets", label: "Budgets", icon: PieChart },
              { id: "goals", label: "Goals", icon: Target }
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 py-4 px-1 border-b-2 transition-colors ${
                    activeTab === tab.id
                      ? "border-blue-600 text-blue-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Dashboard Tab */}
        {activeTab === "dashboard" && (
          <div className="space-y-8">
            {/* Balance Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Total Balance</p>
                    <p className={`text-3xl font-bold ${balance >= 0 ? "text-green-600" : "text-red-600"}`}>
                      ₹{balance.toFixed(2)}
                    </p>
                  </div>
                  <Wallet className="w-12 h-12 text-blue-600" />
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm border p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Total Income</p>
                    <p className="text-3xl font-bold text-green-600">₹{totalIncome.toFixed(2)}</p>
                  </div>
                  <TrendingUp className="w-12 h-12 text-green-600" />
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm border p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Total Expenses</p>
                    <p className="text-3xl font-bold text-red-600">₹{totalExpenses.toFixed(2)}</p>
                  </div>
                  <TrendingDown className="w-12 h-12 text-red-600" />
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <button
                  onClick={() => setShowAddTransaction(true)}
                  className="flex items-center justify-center space-x-2 py-3 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Plus className="w-5 h-5" />
                  <span>Add Transaction</span>
                </button>
                <button
                  onClick={() => setShowAddBudget(true)}
                  className="flex items-center justify-center space-x-2 py-3 px-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                >
                  <Plus className="w-5 h-5" />
                  <span>Create Budget</span>
                </button>
                <button
                  onClick={() => setShowAddGoal(true)}
                  className="flex items-center justify-center space-x-2 py-3 px-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                >
                  <Plus className="w-5 h-5" />
                  <span>Set Goal</span>
                </button>
              </div>
            </div>

            {/* Recent Transactions */}
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Transactions</h3>
              {transactions.length === 0 ? (
                <p className="text-gray-500 text-center py-8">No transactions yet. Add your first transaction to get started!</p>
              ) : (
                <div className="space-y-3">
                  {transactions.slice(0, 5).map((transaction) => (
                    <div key={transaction.id} className="flex items-center justify-between py-3 border-b last:border-b-0">
                      <div className="flex items-center space-x-3">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          transaction.type === "income" ? "bg-green-100" : "bg-red-100"
                        }`}>
                          {transaction.type === "income" ? (
                            <TrendingUp className="w-5 h-5 text-green-600" />
                          ) : (
                            <TrendingDown className="w-5 h-5 text-red-600" />
                          )}
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">{transaction.description}</p>
                          <p className="text-sm text-gray-500">{transaction.category} • {transaction.date}</p>
                        </div>
                      </div>
                      <p className={`font-semibold ${
                        transaction.type === "income" ? "text-green-600" : "text-red-600"
                      }`}>
                        {transaction.type === "income" ? "+" : "-"}₹{transaction.amount.toFixed(2)}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Transactions Tab */}
        {activeTab === "transactions" && (
          <div className="space-y-6">
            {/* Filters */}
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search transactions..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <select
                  value={filterType}
                  onChange={(e) => setFilterType(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">All Types</option>
                  <option value="income">Income</option>
                  <option value="expense">Expense</option>
                </select>

                <select
                  value={filterCategory}
                  onChange={(e) => setFilterCategory(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">All Categories</option>
                  {[...CATEGORIES.income, ...CATEGORIES.expense].map((category) => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>

                <button
                  onClick={() => setShowAddTransaction(true)}
                  className="flex items-center justify-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add Transaction</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
                  <input
                    type="date"
                    value={dateRange.start}
                    onChange={(e) => setDateRange({...dateRange, start: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">End Date</label>
                  <input
                    type="date"
                    value={dateRange.end}
                    onChange={(e) => setDateRange({...dateRange, end: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            {/* Transactions List */}
            <div className="bg-white rounded-lg shadow-sm border">
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Transactions ({filteredTransactions.length})
                </h3>
                {filteredTransactions.length === 0 ? (
                  <p className="text-gray-500 text-center py-8">
                    {transactions.length === 0 ? "No transactions yet." : "No transactions match your filters."}
                  </p>
                ) : (
                  <div className="space-y-3">
                    {filteredTransactions.map((transaction) => (
                      <div key={transaction.id} className="flex items-center justify-between py-4 border-b last:border-b-0">
                        <div className="flex items-center space-x-4">
                          <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                            transaction.type === "income" ? "bg-green-100" : "bg-red-100"
                          }`}>
                            {transaction.type === "income" ? (
                              <TrendingUp className="w-6 h-6 text-green-600" />
                            ) : (
                              <TrendingDown className="w-6 h-6 text-red-600" />
                            )}
                          </div>
                          <div>
                            <p className="font-semibold text-gray-900">{transaction.description}</p>
                            <p className="text-sm text-gray-500">{transaction.category}</p>
                            <p className="text-xs text-gray-400">{transaction.date}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-4">
                          <p className={`text-xl font-bold ${
                            transaction.type === "income" ? "text-green-600" : "text-red-600"
                          }`}>
                            {transaction.type === "income" ? "+" : "-"}₹{transaction.amount.toFixed(2)}
                          </p>
                          <div className="flex items-center space-x-2">
                            <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors">
                              <Edit className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => deleteTransaction(transaction.id)}
                              className="p-2 text-gray-400 hover:text-red-600 transition-colors"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Budgets Tab */}
        {activeTab === "budgets" && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">Budget Management</h2>
              <button
                onClick={() => setShowAddBudget(true)}
                className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                <Plus className="w-4 h-4" />
                <span>Create Budget</span>
              </button>
            </div>

            {updatedBudgets.length === 0 ? (
              <div className="bg-white rounded-lg shadow-sm border p-12 text-center">
                <PieChart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">No budgets yet</h3>
                <p className="text-gray-500 mb-4">Create your first budget to start tracking your spending</p>
                <button
                  onClick={() => setShowAddBudget(true)}
                  className="inline-flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                >
                  <Plus className="w-4 h-4" />
                  <span>Create Budget</span>
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {updatedBudgets.map((budget) => {
                  const percentage = (budget.spent / budget.limit) * 100;
                  const isOverBudget = percentage > 100;

                  return (
                    <div key={budget.id} className="bg-white rounded-lg shadow-sm border p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">{budget.category}</h3>
                          <p className="text-sm text-gray-500 capitalize">{budget.period} budget</p>
                        </div>
                        <button
                          onClick={() => deleteBudget(budget.id)}
                          className="p-1 text-gray-400 hover:text-red-600 transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Spent</span>
                          <span className={isOverBudget ? "text-red-600 font-semibold" : "text-gray-900"}>
                            ₹{budget.spent.toFixed(2)} / ₹{budget.limit.toFixed(2)}
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className={`h-2 rounded-full transition-all ${
                              isOverBudget ? "bg-red-500" : "bg-green-500"
                            }`}
                            style={{ width: `${Math.min(percentage, 100)}%` }}
                          />
                        </div>
                        <div className="flex justify-between text-xs">
                          <span className={`font-medium ${
                            isOverBudget ? "text-red-600" : "text-green-600"
                          }`}>
                            {percentage.toFixed(1)}% used
                          </span>
                          <span className="text-gray-500">
                            ${(budget.limit - budget.spent).toFixed(2)} remaining
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}

        {/* Goals Tab */}
        {activeTab === "goals" && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">Financial Goals</h2>
              <button
                onClick={() => setShowAddGoal(true)}
                className="flex items-center space-x-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
              >
                <Plus className="w-4 h-4" />
                <span>Set Goal</span>
              </button>
            </div>

            {goals.length === 0 ? (
              <div className="bg-white rounded-lg shadow-sm border p-12 text-center">
                <Target className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">No goals set yet</h3>
                <p className="text-gray-500 mb-4">Set your first financial goal to start tracking your progress</p>
                <button
                  onClick={() => setShowAddGoal(true)}
                  className="inline-flex items-center space-x-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                >
                  <Plus className="w-4 h-4" />
                  <span>Set Goal</span>
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {goals.map((goal) => {
                  const percentage = (goal.currentAmount / goal.targetAmount) * 100;
                  const isCompleted = percentage >= 100;

                  return (
                    <div key={goal.id} className="bg-white rounded-lg shadow-sm border p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">{goal.name}</h3>
                          <p className="text-sm text-gray-500">{goal.category}</p>
                          <p className="text-xs text-gray-400">Due: {goal.deadline}</p>
                        </div>
                        <button
                          onClick={() => deleteGoal(goal.id)}
                          className="p-1 text-gray-400 hover:text-red-600 transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Progress</span>
                          <span className={isCompleted ? "text-green-600 font-semibold" : "text-gray-900"}>
                            ${goal.currentAmount.toFixed(2)} / ${goal.targetAmount.toFixed(2)}
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-3">
                          <div
                            className={`h-3 rounded-full transition-all ${
                              isCompleted ? "bg-green-500" : "bg-purple-500"
                            }`}
                            style={{ width: `${Math.min(percentage, 100)}%` }}
                          />
                        </div>
                        <div className="flex justify-between text-xs">
                          <span className={`font-medium ${
                            isCompleted ? "text-green-600" : "text-purple-600"
                          }`}>
                            {percentage.toFixed(1)}% complete
                          </span>
                          <span className="text-gray-500">
                            ${(goal.targetAmount - goal.currentAmount).toFixed(2)} remaining
                          </span>
                        </div>
                        {isCompleted && (
                          <div className="mt-3 p-2 bg-green-100 rounded-lg text-center">
                            <span className="text-green-800 font-semibold text-sm">🎉 Goal Achieved!</span>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}
      </main>

      {/* Add Transaction Modal */}
      {showAddTransaction && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Add Transaction</h3>
            <form onSubmit={handleAddTransaction} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Type</label>
                <select
                  value={transactionForm.type}
                  onChange={(e) => setTransactionForm({...transactionForm, type: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="expense">Expense</option>
                  <option value="income">Income</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Amount</label>
                <input
                  type="number"
                  step="0.01"
                  value={transactionForm.amount}
                  onChange={(e) => setTransactionForm({...transactionForm, amount: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                <select
                  value={transactionForm.category}
                  onChange={(e) => setTransactionForm({...transactionForm, category: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                >
                  <option value="">Select Category</option>
                  {CATEGORIES[transactionForm.type].map((category) => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <input
                  type="text"
                  value={transactionForm.description}
                  onChange={(e) => setTransactionForm({...transactionForm, description: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                <input
                  type="date"
                  value={transactionForm.date}
                  onChange={(e) => setTransactionForm({...transactionForm, date: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              <div className="flex space-x-3 pt-4">
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Add Transaction
                </button>
                <button
                  type="button"
                  onClick={() => setShowAddTransaction(false)}
                  className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Add Budget Modal */}
      {showAddBudget && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Create Budget</h3>
            <form onSubmit={handleAddBudget} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                <select
                  value={budgetForm.category}
                  onChange={(e) => setBudgetForm({...budgetForm, category: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  required
                >
                  <option value="">Select Category</option>
                  {CATEGORIES.expense.map((category) => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Budget Limit</label>
                <input
                  type="number"
                  step="0.01"
                  value={budgetForm.limit}
                  onChange={(e) => setBudgetForm({...budgetForm, limit: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Period</label>
                <select
                  value={budgetForm.period}
                  onChange={(e) => setBudgetForm({...budgetForm, period: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  <option value="weekly">Weekly</option>
                  <option value="monthly">Monthly</option>
                  <option value="yearly">Yearly</option>
                </select>
              </div>

              <div className="flex space-x-3 pt-4">
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                >
                  Create Budget
                </button>
                <button
                  type="button"
                  onClick={() => setShowAddBudget(false)}
                  className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Add Goal Modal */}
      {showAddGoal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Set Financial Goal</h3>
            <form onSubmit={handleAddGoal} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Goal Name</label>
                <input
                  type="text"
                  value={goalForm.name}
                  onChange={(e) => setGoalForm({...goalForm, name: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  required
                  placeholder="e.g., Emergency Fund, Vacation"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Target Amount</label>
                <input
                  type="number"
                  step="0.01"
                  value={goalForm.targetAmount}
                  onChange={(e) => setGoalForm({...goalForm, targetAmount: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Current Amount</label>
                <input
                  type="number"
                  step="0.01"
                  value={goalForm.currentAmount}
                  onChange={(e) => setGoalForm({...goalForm, currentAmount: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="0.00"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Deadline</label>
                <input
                  type="date"
                  value={goalForm.deadline}
                  onChange={(e) => setGoalForm({...goalForm, deadline: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                <input
                  type="text"
                  value={goalForm.category}
                  onChange={(e) => setGoalForm({...goalForm, category: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="e.g., Savings, Investment"
                />
              </div>

              <div className="flex space-x-3 pt-4">
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                >
                  Set Goal
                </button>
                <button
                  type="button"
                  onClick={() => setShowAddGoal(false)}
                  className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
