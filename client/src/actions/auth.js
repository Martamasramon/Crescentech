import axios from "axios";
import { setAlert } from "./alert";
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL
} from './types';

// Register User
export const register = ({ name, email, password }) => async dispatch => {
  console.log("Inside auth.js - register");
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  }

  const body = JSON.stringify({ name, email, password });

  try {
    const res = axios.post("http://localhost:5000/api/user", body, config);

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    });
  } catch (e) {
    const errors = e.response.data.errors;

    if(errors){
      errors.forEach(error => dispatch(setAlert((error.msg, "danger"))));
    }

    dispatch({
      type: REGISTER_FAIL
    });
  }

};
