import React from 'react';
import './userProfile.css'

const UserProfile = ({user, setActiveModal,setModalUser}) => {
    
    return (
        <div className='user_profile' onClick={() => {setModalUser(user); setActiveModal(true); }}>
            <div className='user_profile_img'>
                <img src="login-img/icons8-чат-100.png" alt="" />
            </div>
            
            <div className='user_profile_text'>
                <p>{user.name} {user.surname}</p>
                <p className='user_teg'> {user.teg} </p>
            </div>
        </div>
    );
};

export default UserProfile;