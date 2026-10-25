import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Users, DollarSign, Calendar, FileText, History, LogOut } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const { user, logout } = useAuth();
  const location = useLocation();

  const navItems = [
    { path: '/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { path: '/employees', icon: Users, label: 'Employees' },
    { path: '/payroll', icon: DollarSign, label: 'Payroll' },
    { path: '/attendance', icon: Calendar, label: 'Attendance' },
    { path: '/payslips', icon: FileText, label: 'Payslips' },
    { path: '/history', icon: History, label: 'History' },
  ];

  return (
    <div className="min-h-screen bg-bg-soft flex">
      <aside className="w-64 bg-primary text-white flex flex-col">
        <div className="p-4 border-b border-red-800">
          <h1 className="text-xl font-heading font-bold">Interior Payroll</h1>
          <p className="text-xs text-red-200 mt-1">{user?.role}</p>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          {navItems.map(item => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center space-x-3 px-3 py-2 rounded transition-colors ${
                  isActive ? 'bg-accent' : 'hover:bg-red-800'
                }`}
              >
                <Icon size={18} />
                <span className="text-sm">{item.label}</span>
              </Link>
            );
          })}
        </nav>
        <div className="p-4 border-t border-red-800">
          <div className="mb-3 text-sm">
            <p className="font-medium">{user?.name}</p>
            <p className="text-xs text-red-200">{user?.email}</p>
          </div>
          <button
            onClick={logout}
            className="flex items-center space-x-2 w-full px-3 py-2 hover:bg-red-800 rounded transition-colors text-sm"
          >
            <LogOut size={18} />
            <span>Logout</span>
          </button>
        </div>
      </aside>
      <main className="flex-1 p-6 overflow-auto">
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;

