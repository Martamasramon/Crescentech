import {
  GET_TESTS,
  GET_TEST,
  TEST_ERROR
} from '../actions/types';

const initialState = {
  tests: [],
  test: null,
  loading: true,
  error: {}
}

export default function fn(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_TESTS:
    case GET_TEST:
      return {
        ...state,
        tests: payload,
        loading: false
      };
    case TEST_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    default:
      return state;
  }
}
