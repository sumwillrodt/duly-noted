const router = require('express').Router();
const { createNote } = require('../../lib/notes');
const { notes } = require('../../db/db');

router.get('/notes', (req, res) => {
    let results = notes;
    res.json(results);
});

router.post('/notes', (req, res) => {
    res.body.id = notes.length.toString();
    const note = createNote(req.body, notes);
    
    res.json(note);
});

module.exports = router;