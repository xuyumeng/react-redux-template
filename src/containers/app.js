import { connect } from 'react-redux';
import App from '../components/app.react';

export const AppWrapper = connect(
    function mapStateToProps(state) {
        return {

        };
    },
    function mapDispatchToProps(dispatch) {
        return {

        }
    }
)(App);