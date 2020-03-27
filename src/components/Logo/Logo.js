import React from 'react'
import { Link} from 'react-router-dom';
import classes from './Logo.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const Logo = props => (

  <div className={classes.Logo} >
    {/* <img src={burgerLogo} alt="MyBurger" /> */}
    <Link to={process.env.PUBLIC_URL + '/'} className={classes.Logo}>
       <FontAwesomeIcon icon={faStar} />
      </Link>
  </div>
);

export default  Logo;
