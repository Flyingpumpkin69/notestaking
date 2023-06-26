const colors = require("colors");

const fs = require("fs");

//const colors = require('colors');
const getNotes = () => {
  return "your notes...";
};

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNotes = notes.find((note) => note.title === title); //findmethod
  // const duplicateNotes = notes.filter(function(note){
  //     return note.title === title;
  // })
  if (!duplicateNotes) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes); //2
    console.log(colors.green("New note added!"));
  } else {
    console.log(colors.rainbow("Note title already exist"));
  }
};

const removeNote = (title) => {
  const notes = loadNotes();
  const notesToKeep = notes.filter((note) => note.title !== title);
  if (notes.length > notesToKeep.length) {
    console.log(colors.bold.red("Note removed!"));

    saveNotes(notesToKeep);
  } else {
    console.log(colors.america("No note Removed!"));
  }
};

const saveNotes = function (notes) {
  //1 notes
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const listNotes = () => {
  const notes = loadNotes();

  console.log(colors.bgBrightMagenta("Your Notes"));
  notes.forEach((note) => {
    console.log(note.title);
  });
};

const readNote = (title) => {
  const notes = loadNotes();
  const note = notes.find((note) => note.title === title);

  if (note) {
    console.log(colors.inverse(note.title));
    console.log(note.body);
  } else {
    console.log(colors.red.inverse("Note not found!"));
  }
};

const loadNotes = () => {
  try {
    const databuffer = fs.readFileSync("notes.json");
    const dataJSON = databuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

module.exports = {
  //exporting more than 1 function by declaring object
  getNotes: getNotes,
  addNote: addNote,
  listNotes: listNotes,
  removeNote: removeNote,
  readNote: readNote,
};
