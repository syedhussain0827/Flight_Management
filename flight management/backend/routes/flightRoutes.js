const router = require('express').Router();
const { protect, adminOnly } = require('../middleware/authMiddleware');
const ctrl = require('../controllers/flightController');

router.get('/',          protect,            ctrl.getAllFlights);
router.get('/search',    protect,            ctrl.searchFlights);
router.get('/admin/all', protect, adminOnly, ctrl.getAdminFlights);
router.post('/',         protect, adminOnly, ctrl.createFlight);
router.put('/:id',       protect, adminOnly, ctrl.updateFlight);
router.delete('/:id',    protect, adminOnly, ctrl.deleteFlight);

module.exports = router;