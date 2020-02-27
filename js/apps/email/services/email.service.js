import {storageService} from '../../../main/services/storage.service.js'
import {utilService} from '../../../main/services/util.service.js'
const EMAILS_KEY = 'emails';
var emailsDB = [];
let isMails = false;


export const emailService = {
    query,
    getById, 
    saveEmail,
    getEmptyEmail,
    removeEmail  
}

function query() {
  // console.log('h')
    var emails = storageService.load(EMAILS_KEY);
    if (!emails) {   //////only for test
      emails = createEmails();
      storageService.store(EMAILS_KEY, emails)
  }
    if (emails) {
      isMails=true;
      emailsDB = emails;
      return Promise.resolve(emailsDB) ;
    }    
}

function getById(emailId){
  const email = emailsDB.find(email => email.id === emailId)
  return Promise.resolve(email)
}

function createEmails() {
    var emails = [
      { id: "OXeMG8wNskc",
        subject: 'Wassap?',
        body: 'Pick up!',
        isRead: false,
        sentAt : 1551133930594,
        content: 'gfdggfgdggfdggfdgdfggfdgf',
        sender: 'Aviv'
      },
      { id: "OXeMG8wNzzz",
      subject: '222Wassap2222?',
      body: '2222Pick up22222!',
      isRead: false,
      sentAt : 1551133930599,
      content: '22222gfdgfhgdhdhf',
      sender: 'Aviv2'
    }
    ];
 
    return emails;
}

function saveEmail(email) {
  if (email.id) return _updateEmail(email);
  else return _addEmail(email);
  // _addEmail(email);
  // return _addEmail(email);
}

function _updateEmail(email) {
  email.sentAt= new Date().getTime();
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
  var emptyEmail =  {
    // id: utilService.makeId(),
    subject: '',
    body: '',
    isRead: false,    
    content: '',
    sender: ''
  }
  return emptyEmail;
}

// new Date().getTime()