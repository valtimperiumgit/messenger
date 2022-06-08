import React from 'react';
import "../modals/modal.css"

const Modal = ({user, active, setActive, modalUser ,children}) => {

    if(modalUser !== undefined){
        if(modalUser.id === user.id){
            return (
                <div className={active ? "modal.active" : "modal"} >
                <div className='modal_content' onClick={e => e.stopPropagation()}>
                ВЫЫЫЫЫЫЫ
                <img className='closeModal' src="chats-img/icons8-macos-закрыть-60.png" alt="" 
                onClick={()=> {setActive(false)}}/>
                
                </div>
            </div>
            );
        }

        else{
            console.log('этоо')
            return (
                <div className={active ? "modal.active" : "modal"} >
                    <div className='modal_content' onClick={e => e.stopPropagation()}>
                    <img className='closeModal' src="chats-img/icons8-macos-закрыть-60.png" alt="" 
                    onClick={()=> {setActive(false)}}/>
                    {children}
                    </div>
                </div>
            );
        }
    }
   
};

export default Modal;