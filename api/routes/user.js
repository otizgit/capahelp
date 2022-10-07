const { router } = require('../../utils/packages');

const {
  createUser,
  getUser,
  updateUser,
  viewUser,
  deleteUser,
  deactivateUser,
  reactivateUser,
} = require('../controllers');
const authenticateToken = require('../../auth/authenticateToken');
router.post('/user/register', createUser);

// gets all user
router.get('/user/list', authenticateToken, getUser);

// gets a user
router.get('/user/view/:userId', authenticateToken, viewUser);

// update a user
router.patch('/user/update/:userId', authenticateToken, updateUser);
// delete a user
router.delete('/user/delete/:userId', authenticateToken, deleteUser);
router.put('/user/deactivate/:userId', authenticateToken, deactivateUser);
router.put('/user/reactivate/:userId', authenticateToken, reactivateUser);

module.exports = router;