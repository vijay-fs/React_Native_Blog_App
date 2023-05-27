export const GET_USERS_FETCH = 'GET_USERS_FETCH';
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';
export const GET_USERS_FAILED = 'GET_USERS_FAILED';
export const POST_COMMENTS_DATA = 'POST_COMMENTS_DATA';
export const POST_COMMENTS_DATA_SUCCESS = 'POST_COMMENTS_DATA_SUCCESS';
export const POST_COMMENTS_DATA_FAILURE = 'POST_COMMENTS_DATA_FAILURE';
export const POST_COMMENTS_FAILURE = 'POST_COMMENTS_FAILURE';
export const FETCH_USERS_AFTER_POST = 'FETCH_USERS_AFTER_POST';
export const POST_COMMENTS_SUCCESS = 'POST_COMMENTS_SUCCESS';
export const DELETE_COMMENTS_DATA = 'DELETE_COMMENTS_DATA';
export const DELETE_COMMENTS_DATA_SUCCESS = 'DELETE_COMMENTS_DATA_SUCCESS';
export const DELETE_COMMENTS_DATA_FAILURE = 'DELETE_COMMENTS_DATA_FAILURE';
export const EDIT_COMMENTS_DATA = 'EDIT_COMMENTS_DATA';
export const EDIT_COMMENTS_DATA_SUCCESS = 'EDIT_COMMENTS_DATA_SUCCESS';
export const EDIT_COMMENTS_DATA_FAILURE = 'EDIT_COMMENTS_DATA_FAILURE';

export const getUsersFetch = () => ({
  type: GET_USERS_FETCH,
});

export const postCommentsData = data => ({
  type: POST_COMMENTS_DATA,
  payload: {data},
});

export const deleteCommentsData = id => ({
  type: DELETE_COMMENTS_DATA,
  payload: {id},
});

export const editCommentsData = (commentsid, data) => ({
  type: EDIT_COMMENTS_DATA,
  payload: {commentsid, data},
});
