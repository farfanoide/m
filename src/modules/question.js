import m from 'mithril';
import Question from '../model/question';
import layout from '../components/layout';

const question = {
    controller() {
        const that = {
            question: Question.get(m.route.param('id')),
            finish: m.prop(),
            error: m.prop()
        };

        that
            .question
            .then(null, () => {
                m.route('/')
            });

        return that;
    },
    view(ctrl) {
        return layout([
            m('hr')
        ], {
            navbar: ctrl.question() ? {
                title: ctrl.question().text,
                prev: `/question/${ctrl.question().id - 1}`,
                next: `/question/${ctrl.question().id + 1}`,
            } : undefined
        });
    }
};

export default question;
