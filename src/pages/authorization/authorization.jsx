import authorization from '../../icons/authorization.png'
import './style.sass'
import AuthorizationForm from "./components/form/authorization-form.jsx";

export default function Authorization() {
    return(
        <>
            <div className='autoization_container'>
                <div className='autoization_header_info'>
                    <h1 className='autoization_header'>ДЛЯ ОФОРМЛЕНИЯ ПОДПИСКИ НА ТАРИФ, НЕОБХОДИМО АВТОРИЗОВАТЬСЯ</h1>
                    <img className='authorization_img' src={authorization} alt='authorization'/>
                </div>
                <AuthorizationForm />
            </div>
        </>
    )
}