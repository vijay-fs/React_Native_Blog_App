import {takeEvery, put, call} from 'redux-saga/effects';
import {
  GET_USERS_FETCH,
  GET_USERS_SUCCESS,
  POST_COMMENTS_DATA,
  POST_COMMENTS_DATA_SUCCESS,
  FETCH_USERS_AFTER_POST,
  POST_COMMENTS_DATA_FAILURE,
  POST_COMMENTS_SUCCESS,
  POST_COMMENTS_FAILURE,
  DELETE_COMMENTS_DATA,
  EDIT_COMMENTS_DATA,
  EDIT_COMMENTS_DATA_SUCCESS,
  EDIT_COMMENTS_DATA_FAILURE,
} from './actions';
import axios from 'axios';

async function usersFetch() {
  const timestamp = Date.now();
  const url = `http://192.168.1.3:9000/comments?timestamp=${timestamp}`;
  const response = await axios.get(url);
  return response.data;
}

function* fetchUsers() {
  const users = yield call(usersFetch);
  yield put({type: GET_USERS_SUCCESS, users});
}

async function postCommentsDataApi(data) {
  const timestamp = Date.now();
  const url = `http://192.168.1.3:9000/comments?timestamp=${timestamp}`;
  const response = await axios.post(url, {
    name: 'Gurgoun Alexandru',
    comment: data,
  });
  return response.data;
}

function* fetchCommentsData(action) {
  const {data} = action.payload;
  try {
    const response = yield call(postCommentsDataApi, data);
    yield put({type: POST_COMMENTS_DATA_SUCCESS, payload: response});
    yield put({type: FETCH_USERS_AFTER_POST});
  } catch (error) {
    yield put({type: POST_COMMENTS_DATA_FAILURE, error});
  }
}

function* fetchUsersAfterPost() {
  yield put({type: GET_USERS_FETCH});
}

async function deleteCommentsDataApi(id) {
  const timestamp = Date.now();
  const url = `http://192.168.1.3:9000/comments/${id}?timestamp=${timestamp}`;
  const response = await axios.delete(url);
  return response.data;
}

function* deleteCommentsData(action) {
  const {id} = action.payload;
  try {
    const response = yield call(deleteCommentsDataApi, id);
    yield put({type: POST_COMMENTS_SUCCESS, payload: response});
    yield put({type: FETCH_USERS_AFTER_POST});
  } catch (error) {
    yield put({type: POST_COMMENTS_FAILURE, error});
  }
}
function* editCommentsData(action) {
  const {commentsid, data} = action.payload;
  console.log('commentsid & data', commentsid, data);
  try {
    const response = yield call(
      axios.put,
      `http://192.168.1.3:9000/comments/${commentsid}`,
      {
        name: 'Gurgoun',
        comment: data,
      },
    );

    yield put({type: EDIT_COMMENTS_DATA_SUCCESS, payload: response.data});
    yield put({type: FETCH_USERS_AFTER_POST});
  } catch (error) {
    yield put({type: EDIT_COMMENTS_DATA_FAILURE, error});
  }
}

function* mySaga() {
  yield takeEvery(GET_USERS_FETCH, fetchUsers);
  yield takeEvery(POST_COMMENTS_DATA, fetchCommentsData);
  yield takeEvery(FETCH_USERS_AFTER_POST, fetchUsersAfterPost);
  yield takeEvery(DELETE_COMMENTS_DATA, deleteCommentsData);
  yield takeEvery(EDIT_COMMENTS_DATA, editCommentsData);
}

export default mySaga;
