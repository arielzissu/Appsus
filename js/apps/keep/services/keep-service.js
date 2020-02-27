import {storageService} from '../../../main/services/storage.service.js'

const NOTE_KEY = 'note';
var notesDB = [];

function query() {
    // console.log('query')
      var notes = storageService.load(NOTE_KEY);
      if (!notes) {   //////this if is only for test
        notes = createNotes();
        storageService.store(NOTE_KEY, notes)
    }
      if (notes) {        
        notesDB = notes;
        return Promise.resolve(notesDB) ; ///שים לב שזה מחזיר promise
      }    
  }


  function createNotes() {
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
]; 
    return notes;
}

// var notes = [{
//         type: "noteText",
//         isPinned: true,
//         info: { txt: "Fullstack Me Baby!" }
//     },

//     {
//         type: "noteImage",
//         info: {
//             url: "http://some-img/me",
//             title: "Me playing Mi"
//         },
//         style: { backgroundColor: "#00d" }
//     },

//     {
//         type: "noteTodos",
//         info: {
//             label: "How was it:",
//             todos: [
//                 { txt: "Do that", doneAt: null },
//                 { txt: "Do this", doneAt: 187111111 }
//             ]
//         }
//     }
// ]


function getnotes() {
    var notesDB = storageService.load(NOTE_KEY)
    if (!notesDB) notesDB = notes;
    storageService.store(NOTE_KEY, notesDB)
    return Promise.resolve(notesDB);
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
    addNote,
    query
}