const express = require('express');
const {
  getAcronyms,
  insertAcronym,
  updateAcronym,
  deleteAcronym,
} = require('../controllers/acronymController');

const router = express.Router();

router.route('/').get(getAcronyms).post(insertAcronym);
router.route('/:acronymID').patch(updateAcronym).delete(deleteAcronym);

module.exports = router;
