import React from 'react';

const Product = (props) => {
   
    const capitalize = (str) =>{
        return str.charAt(0).toUpperCase() + str.substring(1,str.length);
    }

    return (
        <div className='flex mx-auto my-10 flex-col justify-center items-center w-[22rem] h-[22rem] shadow-xl bg-white rounded-lg'>
            <p className='text-lg lg:leading-10'>{capitalize(props.category)}</p>
            <p className='leading-10'><span className='text-orange-600 leading-10'>Price:</span> <span> $ {props.price}</span></p>

            <div className="flex justify-center items-center relative overflow-hidden bg-no-repeat bg-cover max-w-xs mt-10">
                <img src={props.image} className="w-fit h-52 px-13" alt="Eflyer" />
                <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden opacity-0 transition duration-300 ease-in-out bg-white hover:opacity-70 hover:cursor-pointer" onClick={() => props.productDescription(props.id)}>
                    <p className='absolute text-2xl transition-all duration-500 top-[10%] text-center'>{props.title}</p>                    
                </div>
            </div>
        </div>
    )
}


export default Product
