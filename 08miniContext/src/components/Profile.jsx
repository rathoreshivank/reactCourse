import React, {useContext} from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const { user } = useContext(UserContext);

    if (!user) {
        return (
            <div className="login-message">
                Please Login
            </div>
        );
    }

    return (
        <div className="profile-welcome">
            Welcome {user.username}
        </div>
    );
}

export default Profile