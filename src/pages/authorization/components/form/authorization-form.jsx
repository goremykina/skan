import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.scss';
import './style.sass'
import google from '../../../../icons/google.png'
import facebook from '../../../../icons/facebook.png'
import lock from "../../../../icons/lock.png";
import { useForm } from "react-hook-form";
import { authorize } from "../../../../services/authorization-service.js";
// import { isAuthorizedContext } from "../../../../components/context/context.jsx";

export default function AuthorizationForm() {
    // const [authorization, setAuthorization] = useState(false)
    // const isUserAuthorized = useContext(isAuthorizedContext)
    const {
        register,
        formState: { errors, isValid},
        handleSubmit,
        reset,
    } = useForm({
        mode: "onChange"
    });


    const handleFormSubmit = async ({ login, password }) => {
        await authorize(login, password)
        reset();
    }

    return (
        <div className='form_wrapper'>
            <img className='lock' src={lock} alt='lock'/>
            <Tabs>
                <TabList>
                    <Tab>Войти</Tab>
                    <Tab>Зарегистрироваться</Tab>
                </TabList>

                <TabPanel>
                    <form className='autoization_form' onSubmit={handleSubmit(handleFormSubmit)}>
                            <label className='enter_label'>Логин или номер телефона:
                                <input className={`enter_input ${!errors?.login ? '' : 'input_error' }`}
                                       type='text'
                                       {...register('login', { required: true })}></input>
                            </label>
                            <div>{errors?.login && <p className='error'>Введите корректные данные</p>}</div>

                            <label className='enter_label'>Пароль:
                                <input className={`enter_input ${!errors?.password ? '' : 'input_error' }`}
                                       type='password'
                                       {...register('password', { required: true })}></input>
                            </label>
                            <div>{errors?.password && <p className='error'>Неправильный пароль</p>}</div>

                        <div className='button_wrapper'>
                            <button className={`autoization_button ${isValid ? '' : 'disabled'}`}>Войти</button>
                        </div>
                    </form>
                    <a className='forget_password' href='https://developer.mozilla.org'>Восстановить пароль</a>
                    <p className='enter_label mt-30'>Войти через:</p>
                    <div className='enter_options'>
                        <a href='https://www.google.com'>{<img src={google} alt={google} />}</a>
                        <a href='https://www.facebook.com'>{<img src={facebook} alt={facebook} />}</a>
                    </div>
                </TabPanel>
                <TabPanel></TabPanel>
            </Tabs>
        </div>
    )
}