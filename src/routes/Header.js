import { connect } from 'dva';
import Header from '../components/Header';


const mapStateToProps = (state) => {
  return {
    ...state,
  };
}

export default connect(mapStateToProps)(Header);
