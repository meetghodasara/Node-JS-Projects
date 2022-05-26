const getNotes = require("./notes");
const yargs = require("yargs");
const { describe } = require("yargs");

//Adding a new Note
yargs.command({
    command : 'add',
    describe : 'Add a new note',
    handler: function(){
        console.log("Adding a new Notes");
    }
})

//Removing a new Note

yargs.command({
    command : 'remove',
    describe : 'Remove a note',
    handler: function(){
        console.log("Removing a Note");
    }
})

yargs.command({
    command:'list',
    describe:'List an all notes',
    handler : function(){
        console.log("Listing a notes");
    }
})

yargs.command({
    command:'read',
    describe:'Read a notes',
    handler:function(){
        console.log("Reading a note...");
    }
})
console.log(yargs.argv);