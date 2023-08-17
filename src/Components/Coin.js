import React from 'react'

function Coin() {
  return (
  <>
<div className='container coin_container'>
    <div className='row coin_row'>
        <div className='col  mt-4'>
            <img src={require("../Assets/stats-satisfied-customer-icon coin1.png")}/>
            <h2 className='coin_h'>7379 +</h2>
            <p>Satisfied Customers</p>
        </div>
        <div className='col  mt-4'>
            <img src={require("../Assets/stats-bottle-choose-icon coin2.png")}/>
            <h2 className='coin_h'>157+ Bottle</h2>
            <p>To Choose from</p>
        </div>
        <div className='col  mt-4'>
            <img src={require("../Assets/stats-bottle-sold-icon coin3.png")}/>
            <h2 className='coin_h'>3Billion +</h2>
            <p>Bottles Sold
</p>
        </div>
        <div className='col  mt-4'>
            <img src={require("../Assets/stats-experience-icon coin4.png")}/>
            <h2 className='coin_h'>40+</h2>
            <p>Year Experience
</p>
        </div>

        <div className='col  mt-4'>
            <img src={require("../Assets/stats-revenue-icon coin5.png")}/>
            <h2 className='coin_h'>96% REVENUE</h2>
            <p>From Repeat Customers
</p>
        </div>

    </div>
</div>

  </>
  )
}

export default Coin