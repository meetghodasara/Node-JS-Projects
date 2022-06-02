const fs = require("fs");

const addNote = (title, body) => {
    const notes = loadNote();
    // const duplicateNotes = notes.filter(function(notes){
    //     return notes.title === title
    // })
    const duplicateNote = notes.find((note) => note.title === title);
    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        });
        saveNotes(notes);
        console.log("Successfully saved a note");
    } else {
        console.log("The title is already taken !");
    }
};




const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync("notes.json", dataJSON);
};
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
    const noteToKeep = notes.filter((note) => note.title !== title);

    if (notes.length === noteToKeep.length) {
        console.log("Note is not removed");
    } else {
        console.log("Note is removed");
    }
    saveNotes(noteToKeep);
};

const listNotes = () => {
    const notes = loadNote();
    console.log("::: Your notes :::");
    notes.forEach((note) => {
        console.log(note.title);
    });
};


const readNote = (title) => {
    const notes = loadNote();
    const note = notes.find((note)=> note.title === title)

    if(note !== undefined){
        console.log(note.title);
        console.log(note.body);
    }else{
        console.log('Note is not found');
    }

}
module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote:readNote
};