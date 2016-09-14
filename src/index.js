import m from 'mithril';
import question from './modules/question';

m.route(document.body, '/question/1', {
    '/question/:id': m.component(question),
})
