import React from 'react'

export default function Container(props) {
    return (
        <>
            <div className="container">
                <div className="header flex justify-between">
                    <h1 className="main-heading">{props.mainHeading}</h1>
                    <i class="ri-close-line" id='cross'></i>
                </div>
                <div className="sm-header flex justify-end">
                    <div className='flex align-center sm-header-content'>
                        <div className='img-div'>  <img className='img' src="https://w7.pngwing.com/pngs/460/34/png-transparent-pancake-pancake-breakfast-pancake-breakfast-bacon-breakfast-food-honey-bread-honey-bee-food-breakfast-thumbnail.png" alt="" /></div>
                        <p className='p-font m-4'>CAKE</p>
                    </div>
                    <div className='flex align-center'>
                        <div className="toggle-btn"></div>
                        <p className='p-font m-4'>USD</p>
                    </div>
                </div>
                <div className="input-box flex justify-end">
                    <h1>2.10000 CAKE</h1>
                </div>
                <div className="flex justify-between btn-line1">
                    <div>
                        <button className='br-sm btn-pm text-black light-yellow'>USE BALANCE</button>
                        <button className='br-sm btn-pm text-black'>$1000</button>
                        <button className='br-sm btn-pm text-black'>$100</button>
                    </div>
                    <div>
                        <p className='p-font md-text'>~ $20.82</p>
                    </div>
                </div>
                <h3 className="sec-heading">Timeframe</h3>
                <div className="flex">
                    <button className='btn-pm dark-yellow text-black'>1 Day</button>
                    <button className='btn-pm'>7 Days</button>
                    <button className='btn-pm'>30 Days</button>
                    <button className='btn-pm'>1 Year</button>
                    <button className='btn-pm'>5 Year</button>
                </div>
                <div className="flex justify-between align-center third-heading">
                    <h3 className="sec-heading">Enable Accelerated APY</h3>
                    <div className="toggle-btn lg-toggle-btn"></div>
                </div>
                <h4 className='p-font'>Select Tier</h4>
                <div className="flex btn-line3">
                    <button className='btn-pm'>Tier 1</button>
                    <button className='btn-pm'>Tier 2</button>
                    <button className='btn-pm'>Tier 3</button>
                    <button className='btn-pm dark-yellow text-black'>Tier 4</button>
                    <button className='btn-pm'>Tier 5</button>
                </div>
                <p className="md-text p-font">ROI at Current Rates</p>
                <div className={`input-box flex justify-between align-center my-5 ${props.border}`}>
                    <i dangerouslySetInnerHTML={{ __html: props.icon }}></i>
                    <h1>100.0 USD</h1>
                </div>
                <p className="md-text p-font">~ 3CAKE + 10 DON</p>
                <div className="flex justify-center lg-btn-div">
                    <button className="lg-btn active">Apply</button>
                    <button className="lg-btn">Cancel</button>
                </div>
                <div className="flex justify-center">
                    <h5 className='details'>{props.details}<i class="ri-arrow-down-s-line"></i></h5>
                </div>
                <div className={`${props.showHide}`}>
                    <div className="flex justify-between align-center md-heading-container">
                        <p className="md-heading">APY</p>
                        <p className="md-heading-right">63.34%</p>
                    </div>
                    <div className="list-items">
                        <li>Calculated based on current rates</li>
                        <li>All fugures are estimates provided for your convenience only, and by no means represent guaranted returns.</li>
                    </div>
                </div>
            </div>
        </>
    )
}
