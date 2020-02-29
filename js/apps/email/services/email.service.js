import { storageService } from '../../../main/services/storage.service.js'
import { utilService } from '../../../main/services/util.service.js'
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
    if (!emails) { //////only for test
        emails = createEmails();
        storageService.store(EMAILS_KEY, emails)
    }
    if (emails) {
        // isMails=true;
        emailsDB = emails;
        return Promise.resolve(emailsDB);
    }
}

function getById(emailId) {
    const email = emailsDB.find(email => email.id === emailId)
    return Promise.resolve(email)
}

function createEmails() { //create starter data
    const emails = [{
            id: "OXeMG8wNskc",
            subject: 'Open me',
            body: 'Pick up!',
            isRead: false,
            sentAt: 1551133930694,
            content: 'gfdggfgdggfdggfdgdfggfdgf',
            sentTo: 'me',
            replayNum: 1,
            sender: 'Roi'
        },
        {
            id: "OXeMG8wNfzz",
            subject: 'Wassap?',
            body: 'Pick up!',
            isRead: false,
            sentAt: 1551133930598,
            content: 'Lorem ipsum bla bla gassaf',
            sentTo: 'me',
            replayNum: 1,
            sender: 'Ariel'

        },
        {
            id: "OXecs8wN6zz",
            subject: 'Purim coming!',
            body: 'Pick up!',
            isRead: false,
            sentAt: 1551133930589,
            content: 'gfdg dsd sd fhgd hdhf',
            sentTo: 'me',
            replayNum: 1,
            sender: 'Rita'

        },
        {
            id: "OXeba34Nzzz",
            subject: 'Until when??',
            body: 'Pick up2!',
            isRead: false,
            sentAt: 1551133940099,
            content: 'gfdg fhgdh dhf',
            sentTo: 'me',
            replayNum: 1,
            sender: 'Moshe'

        },
        {
            id: "OXeba45Nzzz",
            subject: 'Wassap?',
            body: 'Pick up!',
            isRead: false,
            sentAt: 1551133930599,
            content: 'gf dgfh gdhdhf',
            sentTo: 'me',
            replayNum: 1,
            sender: 'Shuki'

        },
        {
            id: "OXegg3wNzzz",
            subject: 'Wassap32?',
            body: 'Pick up2!',
            isRead: false,
            sentAt: 1551133930599,
            content: 'gfdgfa sdsadhgdh dhf',
            sentTo: 'me',
            replayNum: 1,
            sender: 'Puki'

        },
        {
            id: "Ortba3wNzzz",
            subject: 'Wassap2?',
            body: 'Pick up2!',
            isRead: false,
            sentAt: 1551193830599,
            content: 'lorizxc borizxc dori',
            sentTo: 'me',
            replayNum: 1,
            sender: 'Moshe'

        },
        {
            id: "Ottba3wNzzz",
            subject: 'Great project',
            body: 'Pick up222!',
            isRead: false,
            sentAt: 1531133730599,
            content: 'maasd koreadasd? aniadr',
            sentTo: 'me',
            replayNum: 1,
            sender: 'Roi'

        },
        {
            id: "Obeba3wNzzz",
            subject: 'Wassap?',
            body: 'Pick up22!',
            isRead: false,
            sentAt: 1541233960599,
            content: 'gfdgfhgdhdhf',
            sentTo: 'me',
            replayNum: 1,
            sender: 'David'

        },
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
    email.sentAt = new Date().getTime();
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
    const emptyEmail = {
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

function markAsRead(emailId) {
    getById(emailId)
        .then(email => {
            email.isRead = true
            _updateEmail(email)
        });
}