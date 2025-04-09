import {useNavigate} from 'react-router-dom';
import logo from '../../assets/img/logo.png';
import { useUserDetails} from '../../shared/hooks';

const NavLogo = () => {
    return(
        <div className='nav-logo-container'>
            <img
                className='nav-logo'
                width='100%'
                height='100%'
                src={logo}
                alt='Logo Empresa'
            />
        </div>
    )
}

const NavButton = ({ text, onClickHandler}) => {
    return(
        <span className='nav-button' onClick={onClickHandler}>
            {text}
        </span>
    )
}

export const Navbar = () =>{
    const {isLogged,logout} = useUserDetails()

    const navigate = useNavigate()

    const handlenavigateToAuthPage = () =>{
        navigate('auth')
    }

    const handleNavigateToSeetingPage = () => {
        navigate('/settings')
    }

    const handleNavigateChannelsPage = () =>{
        navigate('channels')
    }

    const handleLogout = () => {
        logout()
    }  

    return(
        <div className='nav-container'>
            <NavLogo />
            <div className='nav-buttons-container'>
                <NavButton text='Browse' onClickHandler={handleNavigateChannelsPage}/>
                {!isLogged ? (
                    <NavButton text='Login' onClickHandler={handlenavigateToAuthPage} />
                ) : (
                    <div>
                        <NavButton text='My account' onClickHandler={handleNavigateToSeetingPage} />
                        <NavButton text='Logout' onClickHandler={handleLogout} />
                    </div>
                )}
            </div>   
        </div>
    )
}