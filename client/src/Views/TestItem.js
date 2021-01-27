import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { connect } from 'react-redux';
//import { deleteTest } from '../actions/test';

// Make returned html pretty!
const TestItem = ({
  auth,
  test: { _id, text, name, user, comments, date },
}) => (
  <div>
    <h4>{name}</h4>
    <p>{text}</p>
    <p>Tested on {date}</p>
    {comments.length > 0 && (<p>{comments}</p>)}
  </div>
);

TestItem.defaultProps = {
  showActions: true
};

TestItem.propTypes = {
  test: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps, {})(TestItem);
