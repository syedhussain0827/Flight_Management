const router = require('express').Router()
const { protect, adminOnly } = require('../middleware/authMiddleware')
const ctrl = require('../controllers/bookingController')

router.post('/', protect, ctrl.bookFlight)
router.get('/my', protect, ctrl.getMyBookings)
router.put('/cancel/:id', protect, ctrl.cancelBooking)
router.get('/admin/all', protect, adminOnly, ctrl.getAllBookings)

module.exports = router