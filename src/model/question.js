import m from 'mithril';
const endPoint = 'http://localhost:3001/questions';

export default {
    all() {
        return m.request({ method: "GET", url: endPoint });
    },

    get(id) {
        return m.request({ method: "GET", url: `${endPoint}/${id}` });
    }
}
