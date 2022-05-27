const fs = require("fs");
const getNotes =  () => {
    return "Your notes...";
};
const addNote =(title, body) => {
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

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json' , dataJSON);
}
const loadNote = () => {
    try {
        const databuffer = fs.readFileSync("notes.json");
        const dataJSON = databuffer.toString();
        return JSON.parse(dataJSON);
    } catch {
        return [];
    }
};

const removeNote = (title) => {
    const notes = loadNote();
    const noteToKeep = notes.filter((note) => 
         note.title!== title)
    
    if(notes.length === noteToKeep.length){
        console.log("Note is not removed");    
    }else{
        console.log("Note is removed");
    }
    saveNotes(noteToKeep);
}
module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote:removeNote
};
