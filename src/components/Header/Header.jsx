function Header({img, title ,slogan}) {
    return (
            <header className="header">
                <div className="container d-flex flex-column align-items-center">
                    <img className="header__avatar" src={img} alt="avatar" />
                    <h1 className="header__title">{title}</h1>
                    <hr className="divider--light" />
                    <p className="header__slogan">{slogan}</p>
                </div>
            </header>
    );
}

export default Header;