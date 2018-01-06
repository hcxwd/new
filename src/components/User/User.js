import React from 'react';
import PropTypes from 'prop-types';

class User extends React.Component {

  static propTypes = {

  }

  static defaultProps = {

  }

  constructor(props) {
    super(props);
    console.log(props);
  }

  componentWillMount() {
    dispatch({ type: 'async/tests' });
  }

  componentWillReceiveProps(nextProps) {

  }

  shouldComponentUpdate(nextProps, nextState) {

  }
  render() {
    return (
      <div>
        User
      </div>
    );
  }
}

export default User;
