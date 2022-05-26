const fs = require("fs");
const getNotes = function () {
    return "Your notes...";
};
const addNote = function (title, body) {
    const notes = loadNote();
    notes.push({ title: title, body: body });
    saveNotes(notes)
};

const saveNotes = function(notes){
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json' , dataJSON);
}


const loadNote = function () {
    try {
        const databuffer = fs.readFileSync("notes.json");
        const dataJSON = databuffer.toString();
        return JSON.parse(dataJSON);
    } catch {
        return [];
    }
};

module.exports = {
    getNotes: getNotes,
    addNote: addNote
};
