import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Product from '../Product/Product'
import { useContext } from 'react';
import { UserContext, SearchContext } from '../../Context/index';


const ShoppingItems = () => {

    const [category] = useContext(UserContext);
    const [search] = useContext(SearchContext);
    const [data, setData] = useState([]);

    const fetchData = async () => {
        const url = 'https://fakestoreapi.com/products';
        let data = await fetch(url);
        let parsedData = await data.json();
        setData(parsedData)

        if (category === 'categories') {

        }
        else {
            let result = parsedData.filter((item) => {
                return item.category === category
            })
            setData(result)
        }


        if (search === "" || search === " ") {

        }
        else {
            let Searched = parsedData.filter((value) => {
                return (value.title.toLowerCase().includes(search) || value.category.toLowerCase().includes(search) || value.description.toLowerCase().includes(search))
            })
            setData(Searched);
        }


    }



    const navigate = useNavigate()
    const productDescription = (id) => {
        navigate('product-description', { state: { id: id } })
    }

    useEffect(() => {
        fetchData();
    });

    return (
        <>
        <div className='text-3xl text-center text-bold tracking-wide p-8'>Explore Our Trendiest Collection</div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 transition-all">
            {data.map((items) => {
                return <Product key={items.id} id={items.id} category={items.category} price={items.price} image={items.image} title={items.title} productDescription={productDescription} />
            })}
        </div>
        </>
    )
}

export default ShoppingItems
