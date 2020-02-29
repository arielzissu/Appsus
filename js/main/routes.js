import homePage from './pages/home.js'
import emailApp from '../apps/email/home-email.js'
import keepApp from '../apps/keep/pages/home-keep.js'
import emailDetails from '../apps/email/cmps/email-details.cmp.js'
import emailEdit from '../apps/email/cmps/email-edit.cmps.js'
import emailList from '../apps/email/cmps/email-list.cmp.js'
import booksApp from '../apps/book/js/pages/book-app.cmp.js';
import BookDetails from '../apps/book/js/pages/book-details.cmp.js';

const routes = [
    { path: '/', component: homePage },
    {
        path: '/email',
        component: emailApp,
        children: [
            { path: '', component: emailList },
            { path: 'create/:id?', component: emailEdit },
            { path: ':id', component: emailDetails }
        ]
    },
    // { path: '/email/create/:id?', component: emailEdit },
    // { path: '/email/:id', component: emailDetails },
    { path: '/home-keep', component: keepApp },
    { path: '/book', component: booksApp },
    { path: '/book/:bookId', component: BookDetails },
];
const router = new VueRouter({ routes })

export default router;