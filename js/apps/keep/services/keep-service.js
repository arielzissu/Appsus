import { storageService } from '../../../main/services/storage.service.js'

const NOTE_KEY = 'notes';
var notesDB = [];

function query() {
    var notes = storageService.load(NOTE_KEY);
    if (!notes) { //////this if is only for test
        notes = _createNotes();
        storageService.store(NOTE_KEY, notes)
    }
    if (notes) {
        notesDB = notes;
        return Promise.resolve(notesDB);
    }
}

function _createNotes() {
    var notes = [{
            style: { backgroundColor: "#fff" },
            id: 11111,
            type: "txt",
            isPinned: false,
            info: { txt: "Fullstack Me Baby!" }
        },

        {
            style: { backgroundColor: "#fff" },
            id: 22222,
            type: "img",
            info: {
                url: "https://images.theconversation.com/files/304244/original/file-20191128-178107-9wucox.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=496&fit=clip",
                title: "My picture:"
            },

        },

        {
            style: { backgroundColor: "#fff" },
            id: 33333,
            type: "list",
            info: {
                label: "How was it:",
                todos: [
                    "Do that",
                    "Do this"
                ]
            }
        }
    ];
    return notes;
}


function addNote(txt, type) {
    if (!txt || txt === " " || txt === "  ") return;
    let note = _putIntoFormat(txt, type);
    notesDB.push(note);
    storageService.store(NOTE_KEY, notesDB);
    return Promise.resolve(notesDB);
}

function _putIntoFormat(txt, type) {
    if (type === "txt") {
        return {
            style: { backgroundColor: "#fff" },
            id: _makeId(),
            type: "txt",
            isPinned: false,
            info: { txt }
        }
    } else if (type === "img") {
        return {
            style: { backgroundColor: "#fff" },
            id: _makeId(),
            type: "img",
            info: {
                url: txt,
                title: "My picture:" ////////לתת למשתמש לבחור את  הכותרת
            },
        }
    } else if (type === "list") {
        return {
            style: { backgroundColor: "#fff" },
            id: _makeId(),
            type: "list",
            info: {
                label: "How was it:",
                todos: _changeStrToArr(txt)
            }
        }
    }
}

function _changeStrToArr(str) {
    return str.split(',');
}

function getNoteById(noteId) {
    return query().then(note => {
        const currNote = note.find(note => note.id === noteId);
        return currNote;
    })
}

function removeNote(noteId) {
    console.log('noteId', noteId);
    const idx = notesDB.findIndex(note => note.id === noteId)
    if (idx === -1) return Promise.reject('DID NOT REMOVE NOTE')
    notesDB.splice(idx, 1);
    storageService.store(NOTE_KEY, notesDB);
    return Promise.resolve('NOTE REMOVED')
}

function pinningNote(noteId) {
    const idx = notesDB.findIndex(note => note.id === noteId)
    if (idx === -1) return Promise.reject('DID NOT PIN NOTE')
    let currNote = notesDB.splice(idx, 1);
    console.log('currNote', currNote[0]);
    notesDB.unshift(currNote[0]);

    storageService.store(NOTE_KEY, notesDB);
    return Promise.resolve('NOTE PINNING')
}

function changeColor(color, id) {
    const idx = notesDB.findIndex(note => note.id === id)
    notesDB[idx].style.backgroundColor = color;
    storageService.store(NOTE_KEY, notesDB);
}


function _makeId(length = 5) {
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return txt;
}


export const keepService = {
    addNote,
    query,
    getNoteById,
    removeNote,
    pinningNote,
    changeColor
}