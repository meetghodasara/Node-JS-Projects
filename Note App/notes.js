const fs = require("fs");
const getNotes = function () {
    return "Your notes...";
};
const addNote = function (title, body) {
    const notes = loadNote();
    const duplicateNotes = notes.filter(function(notes){
        return notes.title === title
    })
    if(duplicateNotes.length === 0){
        notes.push({ title: title, body: body });
        saveNotes(notes)
        console.log("Successfully saved a note");
    }else{
        console.log("The title is already taken !");
    }
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

const removeNote = function(title){
    const notes = loadNote();
    const noteToKeep = notes.filter(function(note){
        return note.title!== title;
    })
    saveNotes(noteToKeep);
}
module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote:removeNote
};
