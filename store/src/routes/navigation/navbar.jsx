import { Fragment } from 'react';
import  { Outlet, Link} from 'react-router-dom';
import {ReactComponent as CrwnLogo} from '../../assets/crown.svg'
import './navigation.styles.scss'

//Fragment is just to have a parent component since you can only return 1 element
//in order to get to the specific links you desire, you have to first create the routes in the main component then
//in for example the navbar component you create the links which go to the specific routes
export const Navbar = () => {
    return(
      <Fragment>
        <div className='navigation'>
          <Link className='logo-container' to='/'>
            <CrwnLogo className='logo'/>
          </Link>
          <div className='nav-links-container'>
            <Link className='nav-link' to='/shop'>
              Shop
            </Link>
            <Link className='nav-link' to='/SignIn'>
              Sign In
            </Link>


          </div>
        </div>
        <Outlet />
      </Fragment>
    )
  }