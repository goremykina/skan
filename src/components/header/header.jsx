import logo from '../../icons/logo.png';
import './style.sass'
import Line from '../../icons/line.svg'
import { Link } from "react-router-dom";
import AuthorizedUser from "./components/authorized-user.jsx";

export default function Header( ) {

    return (
        <div className='header'>
            <img src={logo} alt='logo' />
            <div className='menu'>
                <h3 className='menu_h'>Главная</h3>
                <h3 className='menu_h'>Тарифы</h3>
                <h3 className='menu_h'>FAQ</h3>
            </div>
            <div className='autoization'>
                <AuthorizedUser/>
                <>
                <h3 className='autoization_h'>Зарегистрироваться</h3>
                <Line />
                <Link className='header_button' to='/authorization'>Войти</Link>
                </>
            </div>
        </div>
    )
}