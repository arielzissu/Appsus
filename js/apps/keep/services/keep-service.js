import { storageService } from './storage.service.js'

var notes = [{
        type: "noteText",
        isPinned: true,
        info: { txt: "Fullstack Me Baby!" }
    },

    {
        type: "noteImage",
        info: {
            url: "http://some-img/me",
            title: "Me playing Mi"
        },
        style: { backgroundColor: "#00d" }
    },

    {
        type: "noteTodos",
        info: {
            label: "How was it:",
            todos: [
                { txt: "Do that", doneAt: null },
                { txt: "Do this", doneAt: 187111111 }
            ]
        }
    }
]


function getnotes() {
    var notesDB = storageService.load()
    if (!notesDB) notesDB = notes;

    return Promise.resolve(notes);
}


function addNote(txt, num) {
    _putIntoFormat(txt, num);
    notesDB.push(notes)

}

function _putIntoFormat(txt, num) {
    if (num === 0) {
        notes[0].info.txt = txt;
    } else if (num === 1) {
        note[1].info.url = txt;
    } else if (num === 2) {
        note[2].info.todos.push(txt);
    }
}


export const keepService = {
    getnotes,
    addNote
}