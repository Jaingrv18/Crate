import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const ProductDescription = (props) => {

    const value = useLocation()

    useEffect(() => {
        const fetchData = async() => {
            const url = `https://fakestoreapi.com/products/${value.state.id}`;
            let data = await fetch(url);
            let parsedData = await data.json()
            setData(parsedData)
        }
        fetchData()
    })    
   
    const [data, setData] = useState([])
    
  return (
    <>
      <div className="container px-10 py-10 lg:my-12 lg:mx-auto sm:mx-auto sm:px-4 xsm:mx-auto xsm:px-2 flex justify-center items-center md:flex-col lg:flex-row sm:flex-col xsm:flex-col">
        <div className="image w-[23rem]">
            <img src={data.image} alt="" />
        </div>
        <div className="description-content mx-32 flex flex-col xsm:w-[300px]">
            <div className="category my-5 text-lg">{data.category}</div>
            <hr />
            <div className="title text-2xl font-semibold">{data.title}</div>
            {/* <div className="rating my-5">Rating: {data.rating.rate}/5</div> */}
            <div className="description my-12">
                Description: {data.description}
            </div>
            <hr />
            <div className="price font-bold text-2xl">$ {data.price}</div>
            <div><span className='hover:underline hover:cursor-pointer'>EMI options Available</span></div>
            <div className="buttons my-11">
                <button className="px-8 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-700">Buy Now</button>
                <button className="px-8 py-2 mx-3 bg-[#cecbcb] hover:bg-[#b1aeae] rounded-lg">Add to Cart</button>
            </div>
        </div>    
      </div>
    </>
  )
}

export default ProductDescription
