import React from 'react';
import PropTypes from 'prop-types';
//import Moment from 'react-moment';
import { connect } from 'react-redux';
import { deleteTest } from '../actions/test';

// Make returned html pretty!
const TestItem = ({
  auth,
  deleteTest,
  test: { _id, title, result, comments, date, location },
}) => (
  <div>
    <h2>{title}</h2>
    <p>{result}</p>
    <p>Tested on {date}, at {location}</p>
    <p>{comments}</p>
    <a onClick={() => deleteTest(_id)} href="/tests" className="delete">
      Delete test</a>
  </div>
);
// Refresh page after eliminating post!!!

TestItem.defaultProps = {
  showActions: true
};

TestItem.propTypes = {
  test: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  deleteTest: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps, {deleteTest})(TestItem);
