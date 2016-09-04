import {connect} from 'react-redux';
import LoginView from './LoginView';

function mapStateToProps(state,ownProps) {
    return {
        login: state.getIn(['login', 'value']),//return login prop to view which is mapped to state.login's value
        loading: state.getIn(['login', 'loading']),
        userName: state.getIn(['auth', 'currentUser', 'name']),
        userProfilePhoto: state.getIn(['auth', 'currentUser', 'picture'])
    };
}


export default connect(
    mapStateToProps
)(LoginView);
