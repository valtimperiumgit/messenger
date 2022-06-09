import React from 'react';
import '../../components/login/login.css';
import { useState } from 'react';
import ru from 'react-phone-number-input/locale/ru.json'
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const [phone, setPhone] = useState()
    const navigate = useNavigate();

    async function logIn(e) {
        e.preventDefault();

        var correctPhone = phone.replace('+', '');
        const response = await fetch("https://localhost:7208/auth/login", {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(correctPhone),
        });
        
        let token = await response.json();
        if(token === "User not found")
          console.log("user not found")
        else{
      
          localStorage.setItem("jwt", token);
          navigate("/chats");
        }
    }
    
    return (
        <div className='body'>
        <img src='login-img/icons8-чат-100.png' className='logo' alt="ytyt" width='60px' height='60px' />
        <div className="login_form">
            <form className='login_form_content'>
            <PhoneInput
                country="US"
                placeholder={'Введите номер телефона'}
                value={phone}
                onChange={setPhone}
                className={'login_form_input'}
                defaultCountry="UA"
                labels={ru}             
                maxLength={12}/>
                
            <button className='login_form_btn' onClick={logIn}> Войти </button>
               {phone}
            </form>
        </div>
        
        </div>
    );
};

export default Login;