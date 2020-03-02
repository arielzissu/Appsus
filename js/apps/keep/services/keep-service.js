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
            id: 13121,
            type: "txt",
            isPinned: false,
            info: { txt: "Fullstack Me Baby!" }
        },

        {
            style: { backgroundColor: "#ff2080" },
            id: 22626,
            type: "img",
            info: {
                url: "https://images.theconversation.com/files/304244/original/file-20191128-178107-9wucox.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=496&fit=clip",
                title: "My picture:"
            },

        },

        {
            style: { backgroundColor: "#fff" },
            id: 33337,
            type: "list",
            info: {
                label: "How was it:",
                todos: [
                    "Do that",
                    "Do like this",
                    "Do with this",
                    "Do out this",
                    "Do this dsa",
                ]
            }
        },

        {
            style: { backgroundColor: "#fff" },
            id: 44148,
            type: "youtube",
            info: { txt: "https://www.youtube.com/embed/owsfdh4gxyc" }
        },
        {
            style: { backgroundColor: "#ffff00" },
            id: 23233,
            type: "list",
            info: {
                label: "How was it:",
                todos: [
                    "To clean that",
                    "Play with the cat",
                    "Learn with him",
                    "Do this list",
                    "Clean the room",
                    "Learn to english",
                    "Wash the room",
                    "Take the dog outside",
                ]
            }
        },
        {
            style: { backgroundColor: "#fff" },
            id: 11341,
            type: "txt",
            isPinned: false,
            info: { txt: "I love Java Script, But it doesn't love me (;" }
        },
        {
            style: { backgroundColor: "#ff8080" },
            id: 22121,
            type: "img",
            info: {
                url: "https://images.theconversation.com/files/304244/original/file-20191128-178107-9wucox.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=496&fit=clip",
                title: "My picture:"
            },

        },
        {
            style: { backgroundColor: "#fff" },
            id: 23234,
            type: "list",
            info: {
                label: "How was it:",
                todos: [
                    "To clean that",
                    "Play with the cat",
                    "Learn with him",
                    "Do this list",
                    "Clean the room",
                    "Learn to english",
                    "Wash the room",
                    "Take the dog outside",
                ]
            }
        },
        {
            style: { backgroundColor: "#fff" },
            id: 23239,
            type: "list",
            info: {
                label: "How was it:",
                todos: [
                    "To clean that",
                    "Play with the cat",
                    "Learn with him",
                    "Do this list",
                    "Clean the room",
                    "Learn to english",
                    "Wash the room",
                    "Take the dog outside",
                ]
            }
        },
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
    } else if (type === "youtube") {
        return {
            style: { backgroundColor: "#fff" },
            id: _makeId(),
            type: "youtube",
            info: { txt }
        }
    } else if (type === "audio") {
        return {
            style: { backgroundColor: "#fff" },
            id: _makeId(),
            type: "audio",
            info: { txt }
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
    const idx = toFindIndex(noteId);
    if (idx === -1) return Promise.reject('DID NOT REMOVE NOTE')
    notesDB.splice(idx, 1);
    storageService.store(NOTE_KEY, notesDB);
    return Promise.resolve(noteId);
}

function pinningNote(noteId) {
    const idx = toFindIndex(noteId);
    if (idx === -1) return Promise.reject('DID NOT PIN NOTE')
    let currNote = notesDB.splice(idx, 1);
    notesDB.unshift(currNote[0]);

    storageService.store(NOTE_KEY, notesDB);
    return Promise.resolve('NOTE PINNING')
}

function changeColor(color, noteId) {
    const idx = toFindIndex(noteId);
    notesDB[idx].style.backgroundColor = color;
    storageService.store(NOTE_KEY, notesDB);
}

function toFindIndex(noteId) {
    return notesDB.findIndex(note => note.id === noteId)
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