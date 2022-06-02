const note = require("./notes");
const yargs = require("yargs");
const { describe } = require("yargs");
const fs = require('fs');




//Adding a new Note

yargs.command({
    command : 'add',
    describe : 'Add a new note',
    builder:{
        title:{
            describe:'Add a note',
            demandOption :true,
            type: 'string'
        },
        body:{
            describe: 'Add a description',
            demandOption : true,
            type: 'string'
        }
    },
    handler(argv){
        note.addNote(argv.title , argv.body);
    }
})
// debugger
//Removing a new Note

yargs.command({
    command : 'remove',
    describe : 'Remove a note',
    builder : {
        title: {
            describe:'Remove a note',
            demandOption :true,
            type: 'string'
        },
    },
    handler(argv){
       note.removeNote(argv.title);

    }

})

yargs.command({
    command:'list',
    describe:'List an all notes',
    handler(argv){
        note.listNotes(argv.title);
    }
})

yargs.command({
    command:'read',
    describe:'Read a notes',
    builder : {
        title:{
            describe:'Read a note',
            demandOption:true,
            type: 'string'
        }
    },
    handler(argv){
        note.readNote(argv.title);
    }
})
// console.log(yargs.argv);
yargs.parse();