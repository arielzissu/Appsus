import {storageService} from '../../../main/services/storage.service.js'
import {utilService} from '../../../main/services/util.service.js'
const EMAILS_KEY = 'emails';
var emailsDB = [];
let isMails = false;


export const emailService = {
    query,
    getById, 
    saveEmail   
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
  // if (email.id) return _updateemail(email)
  // else return _addEmail(email);
  return _addEmail(email);
}

function _addEmail(email) {
  email.id = utilService.makeId()
  emails.push(email);
  storageService.store(KEY, emails)
  return Promise.resolve(email)
} 
