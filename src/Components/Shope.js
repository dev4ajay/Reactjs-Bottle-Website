import React from 'react'

function Shope() {
  return (
    <>
    <div className='shope d-flex justify-content-center mt-4'>
       
        <h2 style={{fontWeight:'bold'}}><img src={require("../Assets/shop-by-industry-icon.png")} style={{fontSize:'30px',marginRight:'15px'}}/>Shop by Industry</h2>
 </div>

 <div className='d-flex justify-content-center mt-2 arrow_bottom'>
<img src={require("../Assets/org-brd-btm.gif")} />
 </div>

 <div className='container mt-5' >
    <div className='row  bottle'>
        <div className='col-md-6 '>
        <h3 class="head-org-bold">Food Processing</h3>
<div className='row' >
    <div className='col-md-6 botle_img'>
<img src={require("../Assets/7sBQCy2s3583xjYbc4xHiKwNcDC91y3A0LPtCUaJ.jpeg")} className='bottle_img'/>
<h4 className='bottle_text'><a href="https://www.ajantabottle.com/categories/milk-shake-glass-bottle-juice/products">Milk Shake/Juices Glass Bottle</a></h4>
    </div>
    <div className='col-md-6  bottle botle_img'>
    <img src={require("../Assets/BQKMqZ2WeIx3gTE4gBDRaq6eHbVC5pB3V9ZN76gw.jpeg")}  className='bottle_img'/>
      <h4 className='bottle_text'><a href="https://www.ajantabottle.com/categories/ketchup-sauce-glass-bottle/products">Ketchup/Sauce Glass Bottle</a></h4>
        </div>


</div>
<div className='row mt-3' >
    <div className='col-md-6 botle_img'>
<img src={require("../Assets/arS1KnwG1glvRbKkeqYJ0Qlz1JHEfhr9CW4AwYG5 5.jpeg")} className='bottle_img'/>
    </div>
    <div className='col-md-6  bottle botle_img'>
    <img src={require("../Assets/SckgxaNBCQYzg32a1JO99n09beC8EzIJXZfCt5UG 6.jpeg")}  className='bottle_img'/>

        </div>
        

</div>
{/* <div className='d-flex justify-content-center mt-5  product'>
<button  type="button"  href="https://www.ajantabottle.com/categories/glass-bottle-jar-food-processing/products" class="btn " > View All Products</button>
</div> */}
<div class="col-md-12 text-center"><a href="https://www.ajantabottle.com/categories/glass-bottle-jar-food-processing/products" class=" btn-org">View All Products</a></div>
        </div>
        <div className='col-md-6  bottle botle_img'>
        <h3 class="head-org-bold">Pharmaceutical</h3>
        <div className='row'>
    <div className='col-md-6 botle_img'>
<img src={require("../Assets/T7Wf5diExP7eemwBHMq2255CEgQo6sMAieYMXGNK.jpeg")}  className='bottle_img'/>
  <h4 className='bottle_text'><a href="https://www.ajantabottle.com/categories/dry-syrup-glass-bottle/products">Pharma - Dry Syrup Glass Bottles</a></h4>
    </div>
    <div className='col-md-6'>
    <img src={require("../Assets/hkLjrWvul9n3HzBqFd5hHDlkwNkKJeOoNXIhjEbp.jpeg")}  className='bottle_img'/>
      <h4 className='bottle_text'><a href="https://www.ajantabottle.com/categories/syrup-glass-bottle/products">Liquid Syrup</a></h4>
        </div>
</div>    
<div className='row mt-3'>
    <div className='col-md-6 botle_img'>
<img src={require("../Assets/w2OxHA4gs0t4WJWBgdeXel1KL8bS2hquhbAAd6L0 7.jpg")}  className='bottle_img'/>

    </div>
    <div className='col-md-6 botle_img'>
    <img src={require("../Assets/DTIigMdKBRnXf2ewwX4xT2ag6Ku9OsUVlQH0mDqO 8.png")}  className='bottle_img'/>

        </div>
</div>  

<div class="col-md-12 text-center mb-5"><a href="https://www.ajantabottle.com/categories/glass-bottle-pharmaceutical/products" class=" btn-org">View All Products</a></div>



        </div>
    </div>
 </div>
 </>
  )
}

export default Shope