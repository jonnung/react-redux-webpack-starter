import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {changeLanguage} from '../actions/greeting';
import MessageView from '../components/MessageView';


class App extends Component {
    render () {
        const {dispatch, message, is_duplicated} = this.props;

        return (
            <div>
                <MessageView message={message} is_duplicated={is_duplicated}/>
                <button onClick={ () => {dispatch(changeLanguage())} }>언어 변경
                </button>
            </div>
        );
    }
}

App.propTypes = {
    message: PropTypes.string.isRequired
};

function select(state) {
    return state;
}

export default connect(select)(App);