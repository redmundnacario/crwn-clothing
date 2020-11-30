import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { auth } from '../../firebase/firebase.utils';

import './header.component.scss';

import { ReactComponent as Logo} from '../../assets/crown.svg';


const Header = ({ currentUser }) => (
    <div className='header'>
        <Link to='/' className='logo-container'>
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link to='/shop' className='option'>SHOP</Link>
            {
                currentUser ? (
                    <div 
                        className='option' 
                        onClick={() => auth.signOut()}>
                        SIGN OUT
                    </div>
                ) :
                <Link to='/signin' className='option'>SIGN IN</Link>
            }
            
        </div>
    </div>
);

const mapStatetoProps = state => ({
    currentUser : state.user.currentUser
})
// export default Header;
export default connect(mapStatetoProps)(Header);