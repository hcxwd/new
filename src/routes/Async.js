import { connect } from 'dva';
import Async from '../components/Async';


const mapStateToProps = (state) => {
  console.log(111111111111);
  console.log(state);
  return {
    ...state,
  };
}

export default connect(mapStateToProps)(Async);
