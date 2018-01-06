import { connect } from 'dva';
import User from '../components/User';


const mapStateToProps = (state) => {
  return {
    ...state,
  };
}

export default connect(mapStateToProps)(User);
