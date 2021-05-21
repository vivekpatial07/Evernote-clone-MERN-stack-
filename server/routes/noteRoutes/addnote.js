const router = require('express').Router()
const {
    editNote,
    getAllNotes,
    getSingleNote,
    addNote,
    getImportantNotes
} = require('../../controllers/notesController')
const { protect } = require('../../middlewares/authmiddleware')

//get all notes
router.route('/task').get(getAllNotes)

//get important notes
router.route('/task/important').get(getImportantNotes)

// add note
router.post('/task', protect, addNote)

//edit note
router.put('/task/:id/edit', editNote)

//get single note
router.route('/task/:id').get(getSingleNote)

module.exports = router