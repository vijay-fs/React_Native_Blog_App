import {combineReducers} from 'redux';
import {
  GET_USERS_SUCCESS,
  POST_COMMENTS_DATA,
  DELETE_COMMENTS_DATA,
  EDIT_COMMENTS_DATA,
  EDIT_COMMENTS_DATA_SUCCESS,
} from './actions';

const MyFirstReducer = (state = {users: []}, action) => {
  switch (action.type) {
    case GET_USERS_SUCCESS:
      return {
        ...state,
        users: action.users,
      };
    default:
      return state;
  }
};

const postReducer = (state = {comments: []}, action) => {
  switch (action.type) {
    case POST_COMMENTS_DATA:
      return {
        ...state,
        comments: action.payload,
      };
    default:
      return state;
  }
};
const deletecomments = (state = {id: []}, action) => {
  switch (action.type) {
    case DELETE_COMMENTS_DATA:
      return {
        ...state,
        id: action.payload,
      };
    default:
      return state;
  }
};

const editcomments = (state = {id: []}, action) => {
  switch (action.type) {
    case EDIT_COMMENTS_DATA_SUCCESS:
      return {
        ...state,
        id: action.payload,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  getusers: MyFirstReducer,
  postcomments: postReducer,
  deleteComments: deletecomments,
  editComments: editcomments,
});

export default rootReducer;
