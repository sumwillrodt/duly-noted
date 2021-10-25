const fs = require('fs');
const path = require('path');


function createNote(body, notesArray) {
    let note = body;
    notesArray.push(note);
    fs.writeFile(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notesArray }, null, 2)
    );
    return note;
};

module.exports = {createNote};