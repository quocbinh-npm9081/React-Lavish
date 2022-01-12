import React from 'react'
import {Link} from 'react-router-dom'

import Button from '../../../components/button/Button'
import './pricing.css'


const Pricing = () => {
    return (
        <div className='pricing__section'>
        <div className='pricing__wrapper'>
          <h1 className='pricing__heading'>Pricing</h1>
          <div className='pricing__container'>
            <Link to='/sign-up' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                    <i class='bx bxs-hot'></i>                
                </div>
                <h3>Starter</h3>
                <h4>$8.99</h4>
                <p>per month</p>
                <ul className='pricing__container-features'>
                  <li>100 Transactions</li>
                  <li>2% Cash Back</li>
                  <li>$10,000 Limit</li>
                </ul>
                <Button buttonSize='btn--wide' buttonColor='primary'>
                  Choose Plan
                </Button>
              </div>
            </Link>
            <Link to='/sign-up' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                    <i class='bx bxs-diamond'></i>   
                </div>
                <h3>Gold</h3>
                <h4>$29.99</h4>
                <p>per month</p>
                <ul className='pricing__container-features'>
                  <li>1000 Transactions</li>
                  <li>3.5% Cash Back</li>
                  <li>$100,000 Limit</li>
                </ul>
                <Button buttonSize='btn--wide' buttonColor='blue'>
                  Choose Plan
                </Button>
              </div>
            </Link>
            <Link to='/sign-up' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                    <i class='bx bx-leaf'></i>                
                </div>
                <h3>Diamond</h3>
                <h4>$99.99</h4>
                <p>per month</p>
                <ul className='pricing__container-features'>
                  <li>Unlimited Transactions</li>
                  <li>5% Cash Back</li>
                  <li>Unlimited Spending</li>
                </ul>
                <Button buttonSize='btn--wide' buttonColor='primary'>
                  Choose Plan
                </Button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    )
}

export default Pricing
