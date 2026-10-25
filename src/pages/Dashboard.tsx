import React from 'react';
import { Users, DollarSign, Clock, CheckCircle } from 'lucide-react';
import DashboardLayout from '../layouts/DashboardLayout';
import { useAuth } from '../contexts/AuthContext';
import { mockEmployees, mockPayrollRecords } from '../data/mockData';

const Dashboard = () => {
  const { user } = useAuth();
  const totalEmployees = mockEmployees.length;
  const monthlyPayroll = mockPayrollRecords.reduce((sum, r) => sum + r.grossPay, 0);
  const pendingPayroll = mockPayrollRecords.filter(r => r.status === 'Pending').length;
  const processedPayroll = mockPayrollRecords.filter(r => r.status === 'Processed').length;

  return (
    <DashboardLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-heading font-bold text-gray-900">Welcome back, {user?.name}!</h1>
        <p className="text-gray-600 mt-1">Current Payroll Period: October 2026</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg shadow border-l-4 border-primary">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Employees</p>
              <p className="text-2xl font-bold text-gray-900">{totalEmployees}</p>
            </div>
            <Users className="text-primary" size={32} />
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow border-l-4 border-accent">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Monthly Payroll</p>
              <p className="text-2xl font-bold text-gray-900"></p>
            </div>
            <DollarSign className="text-accent" size={32} />
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow border-l-4 border-yellow-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Pending Payroll</p>
              <p className="text-2xl font-bold text-gray-900">{pendingPayroll}</p>
            </div>
            <Clock className="text-yellow-500" size={32} />
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow border-l-4 border-green-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Processed Payroll</p>
              <p className="text-2xl font-bold text-gray-900">{processedPayroll}</p>
            </div>
            <CheckCircle className="text-green-500" size={32} />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-heading font-semibold mb-3 text-gray-900">Payroll Overview</h2>
          <div className="h-48 bg-gradient-to-t from-primary/10 to-transparent rounded flex items-end justify-around p-4">
            <div className="w-12 bg-primary h-32 rounded-t"></div>
            <div className="w-12 bg-accent h-24 rounded-t"></div>
            <div className="w-12 bg-primary/70 h-28 rounded-t"></div>
            <div className="w-12 bg-accent/70 h-20 rounded-t"></div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-heading font-semibold mb-3 text-gray-900">Recent Transactions</h2>
          <div className="space-y-2">
            {mockPayrollRecords.slice(0, 3).map(record => (
              <div key={record.id} className="flex justify-between items-center p-2 bg-bg-soft rounded">
                <div>
                  <p className="text-sm font-medium">{record.employeeName}</p>
                  <p className="text-xs text-gray-600">{record.period}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold"></p>
                  <p className={	ext-xs }>{record.status}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 bg-white p-4 rounded-lg shadow">
        <h2 className="text-lg font-heading font-semibold mb-3 text-gray-900">Upcoming Payroll Deadlines</h2>
        <div className="space-y-2">
          <div className="flex justify-between items-center p-2 border-l-4 border-accent bg-red-50 rounded">
            <span className="text-sm">Payroll Processing Deadline</span>
            <span className="text-sm font-medium">October 30, 2026</span>
          </div>
          <div className="flex justify-between items-center p-2 border-l-4 border-primary bg-red-50 rounded">
            <span className="text-sm">Payslip Distribution</span>
            <span className="text-sm font-medium">November 1, 2026</span>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;

