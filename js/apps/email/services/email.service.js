import { storageService } from '../../../main/services/storage.service.js'
import { utilService } from '../../../main/services/util.service.js'
const EMAILS_KEY = 'emails';
var emailsDB = [];


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
    if (!emails) {
        emails = createEmails();
        storageService.store(EMAILS_KEY, emails)
    }
    if (emails) {
        emailsDB = emails;
        return Promise.resolve(emailsDB);
    }
}

function getById(emailId) {
    const email = emailsDB.find(email => email.id === emailId)
    return Promise.resolve(email)
}

function createEmails() {
    const emails = [{
            id: "OXeMG8wNskc",
            subject: 'Open me',
            body: 'Pick up!',
            isRead: false,
            sentAt: 1551133930694,
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
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
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
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
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
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
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
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
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
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
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
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
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
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
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
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
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
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