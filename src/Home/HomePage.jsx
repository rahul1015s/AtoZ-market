import React from 'react'
import Hero from '../components/Hero'
import jewelery from '../assets/categoryImg/jewelry.png'
import fragrances from '../assets/categoryImg/fragrances.png'
import laptops from '../assets/categoryImg/lapttops.png'
import menShirts from '../assets/categoryImg/men-shirts.png'
import menShoes from '../assets/categoryImg/men-shoes.png'
import menWatches from '../assets/categoryImg/men-watches.png'
import mobiles from '../assets/categoryImg/mobiles.png'
import skincare from '../assets/categoryImg/skincare.png'
import sunglasses from '../assets/categoryImg/sunglasses.png'
import womenBags from '../assets/categoryImg/women-bags.png'
import womenDress from '../assets/categoryImg/women-dress.png'
import womenShoes from '../assets/categoryImg/womenshoes.png'


const productCategoryImg = [
    // Girls Products
    { id: 1, name: "women-dress", img: womenDress, url: "" },
    { id: 2, name: "women-shoes", img: womenShoes, url: "" },
    { id: 3, name: "women-bags", img: womenBags, url: "" },
    { id: 4, name: "jewelery", img: jewelery, url: "" },
    { id: 5, name: "skincare", img: skincare, url: "" },
  
    // Mens Products
    { id: 6, name: "men-shirts", img: menShirts, url: "" },
    { id: 7, name: "men-shoes", img: menShoes, url: "" },
    { id: 8, name: "men-watches", img: menWatches, url: "" },
  
    // Unisex/Accessories
    { id: 9, name: "fragrances", img: fragrances, url: "" },
    { id: 10, name: "sunglasses", img: sunglasses, url: "" },
  
    // Gadgets
    { id: 11, name: "mobiles", img: mobiles, url: "" },
    { id: 12, name: "laptops", img: laptops, url: "" },
  ];
  
  

function HomePage() {
  return (
    <>
      <Hero />

        <div>
          
        </div>
    </>
  )
}

export default HomePage
