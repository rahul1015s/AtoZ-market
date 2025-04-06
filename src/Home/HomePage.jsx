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
import { Link } from 'react-router-dom'


const productCategoryImg = [
    // Girls Products
    { id: 1, name: "women-dress", img: womenDress, url: "women-dress" },
    { id: 2, name: "women-shoes", img: womenShoes, url: "women-shoes" },
    { id: 3, name: "women-bags", img: womenBags, url: "women-bags" },
    { id: 4, name: "jewelery", img: jewelery, url: "womens-jewellery" },
    { id: 5, name: "skincare", img: skincare, url: "" },
  
    // Mens Products
    { id: 6, name: "men-shirts", img: menShirts, url: "mens-shirts" },
    { id: 7, name: "men-shoes", img: menShoes, url: "mens-shoes" },
    { id: 8, name: "men-watches", img: menWatches, url: "mens-watches" },
  
    // Unisex/Accessories
    { id: 9, name: "fragrances", img: fragrances, url: "fragrances" },
    { id: 10, name: "sunglasses", img: sunglasses, url: "sunglasses" },
  
    // Gadgets
    { id: 11, name: "mobiles", img: mobiles, url: "smartphones" },
    { id: 12, name: "laptops", img: laptops, url: "laptops" },
  ];
  
  

function HomePage() {
  return (
    <>
      <Hero />

        <div className='p-4'>
          <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
            {productCategoryImg.map((item) => (<li key={item.id}
            className='bg-white  overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-500'
            >
              <Link to={item.url}>
              <img src={item.img} 
              className='flex flex-col'
              />
              </Link>
              
            </li>))}
          </ul>
        </div>
    </>
  )
}

export default HomePage
