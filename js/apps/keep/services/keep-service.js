import { storageService } from '../../../main/services/storage.service.js'

const NOTE_KEY = 'note';
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
            type: "noteText",
            isPinned: false,
            info: { txt: "Fullstack Me Baby!" }
        },

        {
            id: 22222,
            type: "noteImage",
            info: {
                url: "http://some-img/me",
                title: "Me playing Mi"
            },
            style: { backgroundColor: "#00d" }
        },

        {
            id: 33333,
            type: "noteTodos",
            info: {
                label: "How was it:",
                todos: [
                    { txt: "Do that", doneAt: null },
                    { txt: "Do this", doneAt: 187111111 }
                ]
            }
        }
    ];
    return notes;
}




function _addCar(note) {
    note.id = _makeId()
    notesDB.push(note);
    storageService.store(NOTE_KEY, notesDB)
    return Promise.resolve(note)
}




// function getnotes() {
//     var notesDB = storageService.load(NOTE_KEY)
//     if (!notesDB) notesDB = notes;
//     storageService.store(NOTE_KEY, notesDB)
//     return Promise.resolve(notesDB);
// }



function addNote(txt, type) {

    let note = _putIntoFormat(txt, type);
    notesDB.push(note);
    storageService.store(NOTE_KEY, notesDB);
    return Promise.resolve(notesDB);
}

function _putIntoFormat(txt, type) {
    if (type === "txt") {
        return {
            id: _makeId(),
            type: "noteText",
            isPinned: false,
            info: { txt }
        }
    } else if (type === "img") {
        return {
            id: _makeId(),
            type: "noteImage",
            info: {
                url: txt,
                title: "Me playing Mi" ////////לתת למשתמש לבחור את  הכותרת
            },
            style: { backgroundColor: "#00d" }
        }
    } else if (type === "list") {
        return {
            id: _makeId(),
            type: "noteTodos",
            info: {
                label: "How was it:",
                todos: [
                    { txt: "Do that", doneAt: null },
                    { txt: "Do this", doneAt: 187111111 }
                ]
            }
        }
    }
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
    // getnotes,
    addNote,
    query,
    getNoteById
}