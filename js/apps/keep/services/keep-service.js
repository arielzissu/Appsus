 var notes = [{
         type: "noteText",
         isPinned: true,
         info: { txt: "Fullstack Me Baby!" }
     },

     {
         type: "noteImg",
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
     return Promise.resolve(notes);
 }

 export const keepService = {
     getnotes
 }