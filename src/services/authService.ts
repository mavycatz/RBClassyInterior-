import { mockUsers } from '../data/mockData';

export const authService = {
  login: async (email: string, password: string) => {
    // Mock authentication
    const user = mockUsers.find(u => u.email === email);
    if (user && password === 'password') {
      return { success: true, user };
    }
    return { success: false, error: 'Invalid credentials' };
  },
  
  getCurrentUser: () => {
    const userData = localStorage.getItem('currentUser');
    return userData ? JSON.parse(userData) : null;
  },
  
  logout: () => {
    localStorage.removeItem('currentUser');
  }
};
