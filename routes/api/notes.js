const router = require('express').Router();
const { createNote } = require('../../lib/notes');
const { notes } = require('../../db/db');

router.get('/db', (req, res) => {
    let results = notes;
    res.json(results);
});

router.post('/db', (req, res) => {
    res.body.id = notes.length.toString();
    const note = createNewNote(req.body, notes);
    
    res.json(note);
});

module.exports = router;