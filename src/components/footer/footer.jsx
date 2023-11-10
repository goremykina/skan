import light_logo from '../../icons/light_logo.png'
import './style.sass'

export default function Footer() {
    return (
        <div className='footer'>
            <img src={light_logo} alt='logo'/>
            <div className='footer_address'>
                <p className='footer_address_info'>г. Москва, Цветной б-р, 40</p>
                <p className='footer_address_info'>+7 495 771 21 11</p>
                <p className='footer_address_info'>info@skan.ru</p>
                <p className='footer_address_info copy'>Copyright. 2023</p>
            </div>
        </div>
    )
}