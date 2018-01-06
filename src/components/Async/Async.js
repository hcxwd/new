import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'


class Async extends React.Component {

  static propTypes = {

  }

  static defaultProps = {

  }

  constructor(props) {
    super(props);
    this.state = {
      img: ''
    }
  }

  componentWillMount() {
    console.log('props1111');
    console.log(this.props);
    const { props: { dispatch } } = this;
    dispatch({ type: 'async/tests' });
  }

  componentWillReceiveProps(nextProps) {
    console.log('nextProps', nextProps);
    const { props } = this;
    const { async } = nextProps;
    if (async !== props.async) {
      console.log('img');
      this.setState({ img: nextProps.async[0].ImageUrl })
    }
  }

  render() {
    return (
      <div>
        Async请求
       <img src={this.state.img} alt="" width="100%" />
      </div>
    );
  }
}

export default Async;
// export default connect(({ async }) => ({ ...async }))(Async);
