export interface User {
  id: string;
  name: string;
  email: string;
  role: 'Administrator' | 'HR' | 'Payroll Officer';
  department?: string;
}

export interface Employee {
  id: string;
  employeeId: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  department: string;
  position: string;
  salary: number;
  status: 'Active' | 'Inactive';
  hireDate: string;
}

export interface PayrollRecord {
  id: string;
  employeeId: string;
  employeeName: string;
  period: string;
  basicSalary: number;
  overtime: number;
  allowances: number;
  deductions: number;
  tax: number;
  grossPay: number;
  netPay: number;
  status: 'Pending' | 'Processed';
  processedDate?: string;
}

export interface Attendance {
  id: string;
  employeeId: string;
  date: string;
  status: 'Present' | 'Absent' | 'Late';
}

export interface LeaveRequest {
  id: string;
  employeeId: string;
  employeeName: string;
  leaveType: 'Vacation' | 'Sick' | 'Personal';
  startDate: string;
  endDate: string;
  reason: string;
  status: 'Pending' | 'Approved' | 'Rejected';
  requestedDate: string;
}



export const mockUsers: User[] = [
  { id: '1', name: 'Admin User', email: 'admin@interiorpayroll.com', role: 'Administrator' },
  { id: '2', name: 'HR Manager', email: 'hr@interiorpayroll.com', role: 'HR', department: 'Human Resources' },
  { id: '3', name: 'Payroll Officer', email: 'payroll@interiorpayroll.com', role: 'Payroll Officer', department: 'Finance' },
];

export const mockEmployees: Employee[] = [
  { id: '1', employeeId: 'EMP-001', firstName: 'John', lastName: 'Doe', email: 'john.doe@company.com', phone: '555-0101', department: 'Engineering', position: 'Senior Developer', salary: 6500, status: 'Active', hireDate: '2023-01-15' },
  { id: '2', employeeId: 'EMP-002', firstName: 'Jane', lastName: 'Smith', email: 'jane.smith@company.com', phone: '555-0102', department: 'Marketing', position: 'Marketing Manager', salary: 5800, status: 'Active', hireDate: '2023-03-20' },
  { id: '3', employeeId: 'EMP-003', firstName: 'Mike', lastName: 'Johnson', email: 'mike.j@company.com', phone: '555-0103', department: 'Sales', position: 'Sales Rep', salary: 4200, status: 'Active', hireDate: '2023-06-10' },
  { id: '4', employeeId: 'EMP-004', firstName: 'Sarah', lastName: 'Williams', email: 'sarah.w@company.com', phone: '555-0104', department: 'Engineering', position: 'Developer', salary: 5200, status: 'Active', hireDate: '2024-01-05' },
  { id: '5', employeeId: 'EMP-005', firstName: 'Robert', lastName: 'Brown', email: 'robert.b@company.com', phone: '555-0105', department: 'HR', position: 'HR Specialist', salary: 4800, status: 'Active', hireDate: '2024-02-12' },
];

export const mockPayrollRecords: PayrollRecord[] = [
  { id: '1', employeeId: 'EMP-001', employeeName: 'John Doe', period: 'October 2026', basicSalary: 6500, overtime: 500, allowances: 300, deductions: 800, tax: 975, grossPay: 7300, netPay: 5525, status: 'Processed', processedDate: '2026-10-25' },
  { id: '2', employeeId: 'EMP-002', employeeName: 'Jane Smith', period: 'October 2026', basicSalary: 5800, overtime: 200, allowances: 250, deductions: 700, tax: 825, grossPay: 6250, netPay: 4725, status: 'Processed', processedDate: '2026-10-25' },
  { id: '3', employeeId: 'EMP-003', employeeName: 'Mike Johnson', period: 'October 2026', basicSalary: 4200, overtime: 150, allowances: 200, deductions: 500, tax: 607.5, grossPay: 4550, netPay: 3442.5, status: 'Pending' },
];

export const mockAttendance: Attendance[] = [
  { id: '1', employeeId: 'EMP-001', date: '2026-10-25', status: 'Present' },
  { id: '2', employeeId: 'EMP-002', date: '2026-10-25', status: 'Present' },
  { id: '3', employeeId: 'EMP-003', date: '2026-10-25', status: 'Late' },
];

export const mockLeaveRequests: LeaveRequest[] = [
  { id: '1', employeeId: 'EMP-001', employeeName: 'John Doe', leaveType: 'Vacation', startDate: '2026-11-01', endDate: '2026-11-05', reason: 'Family vacation', status: 'Pending', requestedDate: '2026-10-20' },
  { id: '2', employeeId: 'EMP-002', employeeName: 'Jane Smith', leaveType: 'Sick', startDate: '2026-10-28', endDate: '2026-10-28', reason: 'Medical appointment', status: 'Approved', requestedDate: '2026-10-24' },
];

export interface User { id: string; name: string; email: string; role: 'Administrator' | 'HR' | 'Payroll Officer'; department?: string }
export interface Employee { id: string; employeeId: string; firstName: string; lastName: string; email: string; phone: string; department: string; position: string; salary: number; status: 'Active' | 'Inactive'; hireDate: string }
export interface PayrollRecord { id: string; employeeId: string; employeeName: string; period: string; basicSalary: number; overtime: number; allowances: number; deductions: number; tax: number; grossPay: number; netPay: number; status: 'Pending' | 'Processed'; processedDate?: string }
export interface Attendance { id: string; employeeId: string; date: string; status: 'Present' | 'Absent' | 'Late' }
export interface LeaveRequest { id: string; employeeId: string; employeeName: string; leaveType: 'Vacation' | 'Sick' | 'Personal'; startDate: string; endDate: string; reason: string; status: 'Pending' | 'Approved' | 'Rejected'; requestedDate: string }
