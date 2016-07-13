import {CHANGE_LANGUAGE} from '../actions/greeting';

const global_greeting = ['안녕하세요', 'Hello', 'Bonjour', 'Hola', 'こんにちは。', '你好'];

function greetingApp(state = {message: '안녕하세요', is_duplicated: false}, action) {
    switch (action.type) {
    case CHANGE_LANGUAGE:
        let randomMessage =global_greeting[Math.floor(Math.random() * global_greeting.length)];
        return {
            message: randomMessage,
            is_duplicated: state.message == randomMessage
        };
    default:
        return state;
    }
}

export default greetingApp;