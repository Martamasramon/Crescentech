import axios from 'axios';
import { setAlert } from './alert';
import {
  GET_TESTS,
  GET_TEST,
  TEST_ERROR,
  DELETE_TEST,
  ADD_TEST
} from './types';

// Get tests
export const getTests = () => async dispatch => {
  try {
    const res = await axios.get('/tests');

    dispatch({
      type: GET_TESTS,
      payload: res.data
    });

  } catch (err) {
    dispatch({
      type: TEST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// // Delete test
// export const deleteTest = id => async dispatch => {
//   try {
//     await axios.delete(`/tests/${id}`);
//
//     dispatch({
//       type: DELETE_TEST,
//       payload: id
//     });
//
//     dispatch(setAlert('Test Removed', 'success'));
//   } catch (err) {
//     dispatch({
//       type: TEST_ERROR,
//       payload: { msg: err.response.statusText, status: err.response.status }
//     });
//   }
// };
//
// // Add test
// export const addTest = formData => async dispatch => {
//   try {
//     const res = await axios.test('/tests', formData);
//
//     dispatch({
//       type: ADD_TEST,
//       payload: res.data
//     });
//
//     dispatch(setAlert('Test Created', 'success'));
//   } catch (err) {
//     dispatch({
//       type: TEST_ERROR,
//       payload: { msg: err.response.statusText, status: err.response.status }
//     });
//   }
// };
//
// // Get test
// export const getTest = id => async dispatch => {
//   try {
//     const res = await axios.get(`/tests/${id}`);
//
//     dispatch({
//       type: GET_TEST,
//       payload: res.data
//     });
//   } catch (err) {
//     dispatch({
//       type: TEST_ERROR,
//       payload: { msg: err.response.statusText, status: err.response.status }
//     });
//   }
// };
