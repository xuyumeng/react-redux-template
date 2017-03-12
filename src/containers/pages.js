import {connect} from 'react-redux';

// Pages
import * as pages from '../pages';

// Actions
import * as modalAction from '../actions/modal'
import * as dropDownAction from '../actions/dropDown'

// Constants
import * as FilterType from '../constants/FilterType'

// connect
export const MainPage = connect(
    function mapStateToProps(state) {
        return {}
    },
    function mapDispatchToProps(dispatch) {
        return {}
    }
)(pages.Main);