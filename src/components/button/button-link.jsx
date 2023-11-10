import PropTypes from "prop-types";
import './style.sass'
import { NavLink } from "react-router-dom";

ButtonLink.propTypes = {
    text: PropTypes.string,
    link: PropTypes.string,
    onClick: PropTypes.func
};

export default function ButtonLink(props) {
    const text = props.text;
    const link = props.link;
    const onClick = props.onClick;

    return (
        <NavLink className='button' onClick={onClick} to={link}>{text}</NavLink>
    )
}