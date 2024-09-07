function Button({title, extraStyle}) {
    return (
        <button className={`header-contact-btn ${extraStyle}`}>{title}</button>
    )
}

export default Button