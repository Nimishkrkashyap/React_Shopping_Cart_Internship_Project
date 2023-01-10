import React, { useEffect, useState } from 'react'
import './Home.css'
import Product from '../Product/Product'

const Home = ({handleAddCart}) => {
    const [products, setProducts] = useState([])

    const getData = async () => {
        try {
            const response = await fetch('https://dummyjson.com/products')
            const data = await response.json()
            console.log(data.products)
            setProducts(data.products)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getData()
    }, [])
    
  return (
    <div className='homeContainer'>
        {products.map((item,index) => (
            <Product  handleAddCart={handleAddCart} item={item} key={index}/>
        ))}
    </div>
  )
}

export default Home;