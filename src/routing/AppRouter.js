import {Routes, Route} from 'react-router-dom'
import Chats from '../components/chats/Chats'
import Login from '../components/login/Login'

const AppRouter = () => {

    return (
            <Routes>
                <Route path='/' element={<Login/>}/>
                <Route path='/chats' element={<Chats/>}/>
            </Routes>
    );
};

export default AppRouter;