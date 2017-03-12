import {SET_FILE_LIST,ADD_FILE,DEL_FILE,SET_FILE_FILTER} from '../constants/ActionType';
import Immutable from 'immutable';

const initialState = Immutable.fromJS({
    data:[],
    filter: {
        type: 'ALL',
        id: null
    }
});

function seat(state = initialState, action) {
    switch (action.type) {
        case SET_FILE_LIST:
            return state.set('data',Immutable.fromJS(action.data));
        case ADD_FILE:
            return state.update('data',list => list.push(Immutable.fromJS(action.data)));
        case DEL_FILE:
            return state.update('data',list =>  list.filter(t => {return t.get('id') !== action.id}));
        case SET_FILE_FILTER:
            return state.setIn(['filter','type'], action.filter).setIn(['filter','id'], action.id);
        default:
            return state
    }
}

export default seat;