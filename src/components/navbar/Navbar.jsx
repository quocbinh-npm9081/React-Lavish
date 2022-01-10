import React, { useState, useEffect} from 'react';
import { Link} from 'react-router-dom';

import './navbar.css';

import Button from '../button/Button';



function Navbar() {

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const navBarListItem = [
        {
            display: 'Home',
            path: '/'
        },
        {
            display: 'Services',
            path: '/services'
        },
        {
            display: 'Products',
            path: '/products'
        },
    ]
    const handleCLick = ()=>setClick(!click)

    // const CloseMenuMoblie = ()=>setClick(false);

    const showButton =()=>{
        if(window.innerWidth <= 960){

            setButton(false)
        }else{

            setButton(true)
        }
    }

    useEffect(() => {

        window.addEventListener('resize',showButton )

        return () => {

         window.removeEventListener('resize',showButton )           
        }
    }, [])

    return (

         <>
            <div className="navbar">
                <div className="navbar__container container">
                    <Link to='/' className="navbar__logo">
                    <i className='bx bxs-analyse'></i>
                        <h1>LAVISH</h1>
                    </Link>
                    <div className="navbar__menu-icon" onClick={handleCLick}>
                        {click ?(<i className='bx bx-x'></i>): (<i className='bx bx-menu'></i>)}
                    </div>
                    <div className='flex'>
                        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                            {
                                navBarListItem.map((li, index)=>(
                                    <li className="nav-item" key={index}>
                                        <Link to={li.path} className="nav-links">
                                            {li.display}
                                        </Link>
                                    </li>
                                ))
                            }
                            <li className="nav-item">
                                {
                                    button ? (
                                        <Link to='/sign-up' className="btn-links">
                                            <Button buttonStyle='btn--primary'
                                                    buttonSize='btn--medium'
                                                    
                                            >Sign Up</Button>
                                        </Link>
                                    ):(
                                        <Link to='/sign-up' className="btn-links">
                                            <Button buttonStyle='btn--outline'
                                                    buttonSize='btn--moblie'
                                            >Sign Up
                                            </Button>
                                        </Link>
                                    )
                                }
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar