const yargs = require("yargs");
const notes = require("./notes.js");

yargs.version("1.1.0");

//add,remove,read,list

//creat a add command

yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.addNote(argv.title, argv.body);
  },
});

//creat a remove command
yargs.command({
  command: "remove",
  describe: "Removing a note",
  builder: {
    title: {
      describe: "Note a title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.removeNote(argv.title);
  },
});

//create a read command
yargs.command({
  command: "read",
  describe: "reading a list",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler() {
    notes.readNote(yargs.argv.title);
  },
});

//create a list command
yargs.command({
  command: "list",
  describe: "Listing note",
  handler() {
    notes.listNotes();
  },
});

yargs.parse();
