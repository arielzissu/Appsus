import { storageService } from '../../../main/services/storage.service.js'

const NOTE_KEY = 'notes';
var notesDB = [];

function query() {
    var notes = storageService.load(NOTE_KEY);
    if (!notes) { //////this if is only for test
        notes = createNotes();
        storageService.store(NOTE_KEY, notes)
    }
    if (notes) {
        notesDB = notes;
        return Promise.resolve(notesDB);
    }
}

function createNotes() {
    var notes = [{
            id: 11111,
            type: "txt",
            isPinned: false,
            info: { txt: "Fullstack Me Baby!" }
        },

        {
            id: 22222,
            type: "img",
            info: {
                url: "http://some-img/me",
                title: "My picture:"
            },
            style: { backgroundColor: "#00d" }
        },

        {
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
            id: _makeId(),
            type: "txt",
            isPinned: false,
            info: { txt }
        }
    } else if (type === "img") {
        return {
            id: _makeId(),
            type: "img",
            info: {
                url: txt,
                title: "My picture:" ////////לתת למשתמש לבחור את  הכותרת
            },
            style: { backgroundColor: "#00d" }
        }
    } else if (type === "list") {
        return {
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
    getNoteById
}