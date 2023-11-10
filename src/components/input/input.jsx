import PropTypes from "prop-types";
import './style.sass'


Input.propTypes = {
    className: PropTypes.string,
    placeholder: PropTypes.string,
    errors: PropTypes.object,
    type: PropTypes.string,
    name: PropTypes.string,
    labelInfo: PropTypes.string,
    register: PropTypes.func,
    labelClassName: PropTypes.string,
    validationSchema: PropTypes.object,
    min: PropTypes.number,
}

export default function Input ({ className,  labelClassName, min, placeholder, type, errors, name, labelInfo, register, validationSchema}) {
    return (
        <div className='search_field'>
            <label htmlFor={name} className={labelClassName}>
                {labelInfo}
            </label>
            <input
                name={name}
                type={type}
                {...register(name, validationSchema)}
                className={className}
                placeholder={placeholder}
                min={min}
            />
            {errors && (
                <p className="error_field">{errors.message}</p>
            )}
        </div>
    )
}

