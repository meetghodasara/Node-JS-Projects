const getNotes = require("./notes");
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
    handler: function(argv){
        console.log("Title : " + argv.title);
        console.log("Body : " + argv.body);
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
// console.log(yargs.argv);
yargs.parse();