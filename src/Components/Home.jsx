import React from "react";
import pubg from "../Assests/1.jpeg";
import ninja from "../Assests/2.jpeg";
import fortnite from "../Assests/3.jpeg";
import cod from "../Assests/4.jpeg";
import bgmi from "../Assests/5.jpeg";
import freefire from "../Assests/6.jpeg";
import god from "../Assests/7.jpeg";
import gta from "../Assests/8.jpeg";
import cod2 from "../Assests/9.jpeg";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

function Home() {
  return (
    <>
    <section className="bg-secondary" >
      <div>
        <h1 className="font-serif text-center font-bold">CHOOSE YOUR ONE</h1>
      </div>
<div className="">

      <div className="flex space-x-1 md:flex-row ">
        <img src={pubg} className="w-1/3 hover:display-text" />
        
        <img src={ninja} className="w-1/3" />
        <img src={fortnite} className="w-1/3" />
      </div>
      <div className="flex space-x-1 space-y-1 md:flex-row">
        <img src={cod} className="w-1/3 pt-1" />
        <img src={bgmi} className="w-1/3" />
        <img src={freefire} className="w-1/3" />
      </div>

      <div className="flex space-x-1 space-y-1 md:flex-row">
        <img src={god} className="w-1/3 pt-1" />
        <img src={gta} className="w-1/3" />
        <img src={cod2} className="w-1/3" />
      </div>
      <div className="flex space-x-1 md:flex-row ">
        <img src={pubg} className="w-1/3" />
        <img src={ninja} className="w-1/3" />
        <img src={fortnite} className="w-1/3" />
      </div>
      <div className="flex space-x-1 space-y-1 md:flex-row">
        <img src={cod} className="w-1/3 pt-1" />
        <img src={bgmi} className="w-1/3" />
        <img src={freefire} className="w-1/3" />
      </div>

      <div className="flex space-x-1 space-y-1 md:flex-row">
        <img src={god} className="w-1/3 pt-1" />
        <img src={gta} className="w-1/3" />
        <img src={cod2} className="w-1/3" />
      </div>
      <div className="flex space-x-1 md:flex-row ">
        <img src={pubg} className="w-1/3" />
        <img src={ninja} className="w-1/3" />
        <img src={fortnite} className="w-1/3" />
      </div>
      <div className="flex space-x-1 space-y-1 md:flex-row">
        <img src={cod} className="w-1/3 pt-1" />
        <img src={bgmi} className="w-1/3" />
        <img src={freefire} className="w-1/3" />
      </div>

      <div className="flex space-x-1 space-y-1 md:flex-row">
        <img src={god} className="w-1/3 pt-1" />
        <img src={gta} className="w-1/3" />
        <img src={cod2} className="w-1/3" />
      </div>
      <div className="flex space-x-1 md:flex-row ">
        <img src={pubg} className="w-1/3" />
        <img src={ninja} className="w-1/3" />
        <img src={fortnite} className="w-1/3" />
      </div>
      <div className="flex space-x-1 space-y-1 md:flex-row">
        <img src={cod} className="w-1/3 pt-1" />
        <img src={bgmi} className="w-1/3" />
        <img src={freefire} className="w-1/3" />
      </div>

      <div className="flex space-x-1 space-y-1 md:flex-row">
        <img src={god} className="w-1/3 pt-1" />
        <img src={gta} className="w-1/3" />
        <img src={cod2} className="w-1/3" />
      </div>




      

      </div>
    </section>
    </>
  );
}

export default Home;
