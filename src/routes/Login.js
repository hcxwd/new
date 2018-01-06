import { connect } from 'dva';
import Login from '../components/Login';


const mapStateToProps = (state) => {
  return {
    ...state,
  };
}

export default connect(mapStateToProps)(Login);
