import './style.sass'
import user from '../../../icons/user.png'
export default function AuthorizedUser( ) {
    return (
        <div className='wrapper'>
            <div className='user_content'>
                <p className='user_info_limits'>Использовано компаний</p>
                <p className='user_info_limits'>Лимит по компаниям 100</p>
            </div>
            <div className='user_container'>
                <div className='user_info'>
                    <p className='user_name'>Алексей А.</p>
                    <button className='quit'>Выйти</button>
                </div>
                <img className='radius' src={user} alt='user'></img>
            </div>
        </div>
    )
}