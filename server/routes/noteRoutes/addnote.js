const router = require('express').Router()
let Note = require('../../models/noteModel/noteSchema')
const {
    editNote,
    getAllNotes,
    getSingleNote,
    addNote,
    getImportantNotes
} = require('../../controllers/notesController')
const { protect } = require('../../middlewares/authmiddleware')

router.route('/task').get(getAllNotes)

router.route('/task/important').get(getImportantNotes)
 

router.post('/task', protect, addNote)

router.put('/task/:id/edit', editNote)

router.route('/task/:id').get(getSingleNote)

module.exports = router