import React from "react";
import TopHeader from "../Components/TopHeader";
import TopNav from "../Components/TopNav";
import Header from "../Components/Header";
import Trusted from "../Components/Trusted";
import NavSlider from "../Components/NavSlider";
import Shope from "../Components/Shope";
import ProductShope from "../Components/ProductShope";
import POPULAR from "../Components/POPULAR"
import Bottle from "../Components/Bottle";
import Coin from "../Components/Coin";
import INTERNATIONAL from '../Components/INTERNATIONAL';
import LATEST from '../Components/LATEST';
import CUSTOMERS from '../Components/CUSTOMERS';
import BRANDS  from '../Components/BRANDS';
import YOURECENTLY from "../Components/YOURECENTLY";

function Home() {
  return (
    <div>
      <TopHeader />
      <TopNav />
      <Header />
      <NavSlider />
      <Trusted/>
      <Shope/>
      <ProductShope/>
      <POPULAR/>
      <Bottle/>
      <Coin/>
      <INTERNATIONAL/>
      <LATEST/>
      <CUSTOMERS/>
      <BRANDS/>
      <YOURECENTLY/>
    </div>
  );
}

export default Home;
