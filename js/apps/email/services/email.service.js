import {storageService} from '../../../main/services/storage.service.js'
import {utilService} from '../../../main/services/util.service.js'
const EMAILS_KEY = 'emails';
var emailsDB = [];
// let isMails = false;


export const emailService = {
    query,
    getById, 
    saveEmail,
    getEmptyEmail,
    removeEmail,
    markAsRead  
}

function query() {
    let emails = storageService.load(EMAILS_KEY);
    if (!emails) {   //////only for test
      emails = createEmails();
      storageService.store(EMAILS_KEY, emails)
  }
    if (emails) {
      // isMails=true;
      emailsDB = emails;
      return Promise.resolve(emailsDB) ;
    }    
}

function getById(emailId){
  const email = emailsDB.find(email => email.id === emailId)
  return Promise.resolve(email)
}

function createEmails() { //create starter data
    const emails = [
      { id: "OXeMG8wNskc",
        subject: 'Wassap?',
        body: 'Pick up!',
        isRead: false,
        sentAt : 1551133930594,
        content: 'gfdggfgdggfdggfdgdfggfdgf',
        sentTo: 'me',
        replayNum: 1,
        sender: 'Roi'
      },
      { id: "OXeMG8wNzzz",
      subject: '222Wassap2222?',
      body: '2222Pick up22222!',
      isRead: false,
      sentAt : 1551133930599,
      content: '22222gfdgfhgdhdhf',
      sentTo: 'me',
      replayNum: 1,
      sender: 'Ariel'

    }
    ];
 
    return emails;
}

function saveEmail(email) {
  if (email.id) return _updateEmail(email);
  else return _addEmail(email);
}

function _updateEmail(email) {
  const idx = emailsDB.findIndex(curremail => curremail.id === email.id);
  emailsDB.splice(idx, 1, email);
  storageService.store(EMAILS_KEY, emailsDB);
  return Promise.resolve(email);
} 

function _addEmail(email) {
  email.id = utilService.makeId();
  email.sentAt= new Date().getTime();
  emailsDB.push(email);
  storageService.store(EMAILS_KEY, emailsDB);
  return Promise.resolve();
} 

function removeEmail(emailId) {
  const idx = emailsDB.findIndex(email => email.id === emailId)
    // if(idx === -1) return Promise.reject('DID NOT REMOVE EMAIL')
  emailsDB.splice(idx, 1);
  storageService.store(EMAILS_KEY, emailsDB)
  return Promise.resolve()
}

function getEmptyEmail() {
  const emptyEmail =  {
    subject: '',
    body: '',
    isRead: false,    
    content: '',
    sentTo: '',
    replayNum: 1,
    sender: 'Me'
  }
  return emptyEmail;
}

function markAsRead(emailId){
  getById(emailId)
  .then(email=>{email.isRead=true
    _updateEmail(email)  
  });
}