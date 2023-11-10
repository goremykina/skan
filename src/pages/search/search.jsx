import paper from '../../icons/paper.png'
import folder from '../../icons/folders.png'
import information from '../../icons/information.png'
import './style.sass'
import { Checkbox } from "../../components/checkbox/checkbox.jsx";
import ButtonLink from "../../components/button/button-link.jsx";
import Select from "react-select";
import { useForm } from "react-hook-form";
import Input from "../../components/input/input.jsx";
import { useState } from "react";
import { getHistograms } from "../../services/documents-service.js";


const options = [
    { value: 'chocolate', label: 'Позитивная' },
    { value: 'strawberry', label: 'Негативная' },
    { value: 'vanilla', label: 'Любая' }
]

export default function Search() {
    const [selected, setSelected] = useState('')

    const {
        register,
        formState: { errors},
        handleSubmit,
    } = useForm({
        mode: "onChange"
    });

    const handleFormSubmit = async (data) => {
        const { companyNumber, limit, startDate, endDate, onlyMainRole,
            tonality, onlyWithRiskFactors, maxFullness } = data;
        //
        // await getHistograms(companyNumber, limit, startDate, endDate, onlyMainRole,
        // tonality, onlyWithRiskFactors, maxFullness)

        console.log(JSON.stringify(data))

    }

    return (
        <div className='container'>
            <div className='search_header_container'>
                <div className='header_content'>
                    <h1 className='search_header'>НАЙДИТЕ НЕОБХОДИМЫЕ ДАННЫЕ В ПАРУ КЛИКОВ.</h1>
                    <p className='search_header_text'>Задайте параменты поиска.</p>
                    <p className='search_header_text'>Чем больше заполните, тем точнее поиск</p>
                </div>
                <div className='image_container'>
                    <img src={paper} alt='paper'/>
                    <img src={folder} alt='folder'/>
                </div>
            </div>

            <div className='search_wrapper'>
                <form className='search_form' onSubmit={handleSubmit(handleFormSubmit)}>
                    <div className='top_form'>
                        <div className='search_description'>
                            <Input labelClassName={'search_label width'}
                                   labelInfo={'ИНН компании *'}
                                   className={`search_input ${!errors?.companyNumber ? '' : 'input_error' }`}
                                   placeholder={'10 цифр'}
                                   name='companyNumber'
                                   errors={errors['companyNumber']}
                                   register={register}
                                   validationSchema={{
                                       required: 'Введите корректные данные',
                                       minLength: {
                                           value: 10,
                                           message: 'min 10 numbers'
                                       }
                                   }}
                            />

                            <div className='search_field'>
                                <label className='search_label'>Тональность</label>
                                <Select
                                    placeholder=''
                                    className='w-60'
                                    value={selected}
                                    options={options}
                                    getOptionLabel={option => option.label}
                                    getOptionValue={option => option.value}
                                    onChange={(option) => setSelected(option)}
                                />
                            </div>

                            <Input
                                labelInfo={'Количество документов в выдаче *'}
                                labelClassName={'search_label'}
                                className={`search_input ${!errors?.limit ? '' : 'input_error'}`}
                                placeholder={'от 1 до 1000'}
                                name='limit'
                                errors={errors['limit']}
                                register={register}
                                validationSchema={{
                                    required: 'Обязательное поле'
                                }}
                            />

                        </div>
                        <div className='checkbox-container'>
                            <div className='checkbox-list'>
                                <Checkbox
                                    label="Признак максимальной полноты"
                                    {...register('maxFullness')}
                                />

                                <Checkbox
                                    label="Упоминания в бизнес-контексте"
                                    {...register('inBusinessNews')}
                                />

                                <Checkbox
                                    label="Главная роль в публикации"
                                    {...register('onlyMainRole')}
                                />

                                <Checkbox
                                    label="Публикации только с риск-факторами"
                                    {...register('onlyWithRiskFactors')}
                                />

                                <Checkbox
                                    label="Включать технические новости рынков"
                                    {...register('excludeTechNews')}
                                />

                                <Checkbox
                                    label="Включать анонсы и календари"
                                    {...register('excludeAnnouncements')}
                                />

                                <Checkbox
                                    label="Включать сводки новостей"
                                    {...register('excludeDigests')}
                                />

                            </div>
                        </div>
                    </div>
                    <div className='down_form'>
                        <div className='search_field'>
                            <label className='search_label m-t'>Диапазон поиска *</label>
                            <div className='field_inputs'>
                                <Input
                                    className={`search_input m_r ${!errors?.startDate ? '' : 'input_error' }`}
                                    type={'date'}
                                    placeholder={'Дата начала'}
                                    name='startDate'
                                    min={1}
                                    errors={errors['startDate']}
                                    register={register}
                                    validationSchema={{
                                        required: true
                                    }}
                                />

                                <Input
                                    className={`search_input m_r ${!errors?.endDate ? '' : 'input_error' }`}
                                    type={'date'}
                                    placeholder={'Дата конца'}
                                    name='endDate'
                                    min={1}
                                    errors={errors['endDate']}
                                    register={register}
                                    validationSchema={{
                                        required: true
                                    }}
                                />
                            </div>
                            <div>
                                {(errors.startDate || errors.endDate) &&
                                    <p className="error_field">Введите корректные данные</p>}
                            </div>

                        </div>
                        <div className='search_button_container'>
                            <ButtonLink text='Поиск' link='/search_result'></ButtonLink>
                            <button type="submit">Поиск</button>
                            <p className='fields'>* Обязательные к заполнению поля</p>
                        </div>
                    </div>
                </form>
                <img className='mt-150' src={information} alt='information'/>
            </div>
        </div>
    );
}