import logo from '..//assets/img/logo.png';

export const Logo = ({text}) => {
    return(
        <div className="auth-form-logo-container">
            <img src={logo} alt="Logo Pagina"/>
            <span>{text}</span>
        </div>
    )
}