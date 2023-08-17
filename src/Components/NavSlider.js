import React from "react";
import { MdOutlineNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";

const HomeSlider = () => {
  return (
    <>
    <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={require("../Assets/Slider1.jpg")} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={require("../Assets/slider2.jpg")}  class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={require("../Assets/slider3.jpg")}  class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={require("../Assets/slider4.jpg")}  class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
<GrFormPrevious className="arrow_prev"/>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
<MdOutlineNavigateNext className="arrow_next"/>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </>
  );
};

export default HomeSlider;
