// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Instruments
import Styles from './styles.module.scss';

interface ISpinerState {
    ui: any;
}

interface ISpinerProps {
    isFetching: boolean;
}

const mapStateToProps = (state: ISpinerState): ISpinerProps => {
    return {
        isFetching: state.ui.get('isFetching')
    }
};

class Spinner extends Component<ISpinerProps> {
    render () {
        const { isFetching } = this.props;

        if( isFetching ) {
            return (
                <div className = { Styles.spinner } />
            );
        }

        return ('');
    }
}

export default connect(mapStateToProps)(Spinner)