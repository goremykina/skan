import './checkbox.sass'
import { forwardRef, useState } from "react";
import PropTypes from "prop-types";

CheckboxInternal.propTypes = {
    label: PropTypes.string
}
function CheckboxInternal({ label, ...props }, ref) {
    const [isChecked, setIsChecked] = useState(false);

    return (
        <div className="checkbox-wrapper">
            <label className='checkbox-content'>
                <input
                    {...props}
                    ref={ref}
                    type="checkbox"
                    checked={isChecked}
                    className={isChecked ? "checked" : ""}
                    onChange={() => setIsChecked(!isChecked)}
                />
                <span className={isChecked ? "selected" : "unchecked"}>{label}</span>
            </label>
        </div>
    );
}

export const Checkbox = forwardRef(CheckboxInternal);