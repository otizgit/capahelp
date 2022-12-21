const { loginController, refreshUserToken } = require('./loginController');
const {
  createUser,
  getUser,
  updateUser,
  viewUser,
  deleteUser,
  deactivateUser,
  reactivateUser,
  adminCreateUser,
  adminDashboard,
  filterUsers,
  adminUpdateProfile,
  updateProfile,
} = require('./userController');

const {
  getTicket,
  createTicket,
  listTicket,
  updateTicket,
  deleteTicket,
  activeTickets,
  cancelledTickets,
  inProgressTickets,
  pendingTickets,
  resolvedTickets,
} = require('./ticketController');

const {
  createDepartment,
  getDepartment,
  deleteDepartment,
  updateDepartment,
  viewDepartment,
  removeAgentFromDepartment,
} = require('./departmentController');
const resetPassword = require('./resetPasswordController');

const addAgentToDept = require('./manageAgentDept');
module.exports = {
  loginController,
  // ticket
  getTicket,
  createTicket,
  listTicket,
  updateTicket,
  deleteTicket,
  // customer
  createUser,
  getUser,
  filterUsers,
  adminUpdateProfile,
  updateUser,
  viewUser,
  deleteUser,
  deactivateUser,
  reactivateUser,
  updateProfile,
  // department
  createDepartment,
  getDepartment,
  deleteDepartment,
  updateDepartment,
  viewDepartment,

  // resetPassword
  resetPassword,
  removeAgentFromDepartment,
  addAgentToDept,
  adminCreateUser,
  refreshUserToken,
  // admin dashboard
  adminDashboard,
  activeTickets,
  cancelledTickets,
  inProgressTickets,
  pendingTickets,
  resolvedTickets,
};
