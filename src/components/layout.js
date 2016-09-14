import m from 'mithril';

function _ul(props) {
    return m('ul.nav.navbar-nav.navbar-right', [
        m('li', [
            m(`a[href=${props.prev}]`, {config: m.route}, 'Prev')
        ]),
        m('li', [
            m(`a[href=${props.next}]`, {config: m.route}, 'Next')
        ])
    ]);
}

function _navbar(props = {}) {
    return m('.navbar.navbar-default.navbar-fixed-top', [
        m('.container', [
            m('.navbar-header', [
                m('a.navbar-brand', props.title)
            ]),
            m('#navbar.navbar-collapse.collapse', _ul(props))
        ])
    ]);
}

function _content(content, props = {}) {
    return m('.container', [
        content
    ]);
}

function layout(content, props = {}) {
    /**
     *  si hay un error no renderizo el content
     */
    return [
        _navbar(props.navbar),
        _content(content, props)
    ]
}

export default layout;
