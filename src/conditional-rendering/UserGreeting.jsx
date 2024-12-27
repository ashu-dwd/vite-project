import PropTypes from 'prop-types';

function UserGreeting(props) {
    
    if (props.isLoggedIn) {
        return <h2 className="msg">Welcome {props.username}</h2>
    }else{
        return <h2 className="prompt">Please login</h2>
    }
}

UserGreeting.proptypes={
    isLoggedIn:PropTypes.bool.isRequired,
    username:PropTypes.string.isRequired
}
UserGreeting.defaultProps = {
    isLoggedIn: true,
    username: 'Guest'
}
export default UserGreeting;