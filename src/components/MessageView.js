import React, {Component, PropTypes} from 'react';

export default class MessageView extends Component {
    render() {
        return (
            <p>{ this.props.message } { this.props.is_duplicated? "(중복)" : "" }</p>
        );
    };
}
