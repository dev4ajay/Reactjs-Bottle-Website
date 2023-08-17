import React from 'react'

function YOURECENTLY() {
  return (
 <>
          <div className='shope d-flex justify-content-center mt-4'>
       
       <h2 style={{fontWeight:'bold'}}><img src={require("../Assets/populor-bottle-icon (1).jpg")} style={{fontSize:'30px',marginRight:'15px'}}/>YOU RECENTLY VISITED
</h2>
</div> 

    
 <div className='d-flex justify-content-center mt-2 arrow_bottom'>
 <img src={require("../Assets/org-brd-btm.gif")} />
  </div>
<div className='container'>
    <div className='row main_recently'>
    <div className='col-md-3 popular_row mt-5 '>
        <img src={require("../Assets/OInahi4MilDBhQgijXTAI6YoIpCSqilhnPzS2YZb by1.jpg")} className='main_popular shadow'/>
        <div class="product-name"><a href="https://www.ajantabottle.com/products/500ml-generic-bottle" class="txt-org mt-3 ">500ml Generic Bottle with Cap</a><br/> <span class="txt-black">₹ 40.00</span></div>
        </div>
        <div className='col-md-3 popular_row mt-5 '>
            <img src={require("../Assets/j1YYHlnZbboC1wSO8vlceiod2zbPV85FOkH6CYYl by2.jpg")} className='main_popular shadow'/>
            <div class="product-name"><a href="https://www.ajantabottle.com/products/15-ml-amber-dropper-bottle-18-mm-special-neck" class="txt-org mt-3 ">15 ml Amber Dropper Bottle 18 mm Special Neck</a><br/> <span class="txt-black">₹ 2.70</span></div>
        </div>
    </div>
</div>
 </>
  )
}

export default YOURECENTLY