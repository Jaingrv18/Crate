import React from 'react'
import { Cart, PersonFill, Search } from 'react-bootstrap-icons'
import { useContext } from 'react'
import userContext from '../../Context/UserContext'
import searchContext from '../../Context/SearchContext'



const SearchBar = () => {

    const [category, setCategory] = useContext(userContext)
    const handleSelect = (e) => {
        e.preventDefault();
        setCategory(document.getElementById('category-select').value);
        // console.log(document.getElementById('category-select').value);
    }

    const [search, setSearch] = useContext(searchContext)
    const handleSearchChange = (e) => {
        e.preventDefault();
        setSearch(e.target.value);
    }

    const handleButton = (e) => {
        e.preventDefault();
        setSearch(document.getElementById('default-search').value)
    }

    let options = [
        { value: "categories", label: "All Categories" },
        { value: "men's clothing", label: "Men's Clothing" },
        { value: "women's clothing", label: "Women's Clothing" },
        { value: "jewelery", label: "Jewelery" },
        { value: "electronics", label: "Electronics" }
    ]


    return (
        <div className='flex flex-col z-3 absolute items-center top-[15%]'>

            <div className=" my-8 text-white">
                <h1 className='text-5xl font-bold'>Crate</h1>
            </div>

            <div className="flex lg:flex-row justify-center items-center space-x-2 md:flex-col sm:flex-col xsm:flex-col md:space-y-5 sm:space-y-5 xsm:space-y-5">
                <div>
                    <select value={category} onChange={handleSelect} className='bg-gray-700 text-white px-2 py-2 rounded-md outline-none border-none lg:mt-5' name="categories" id="category-select">
                        {options.map((option, index) => (
                            <option value={option.value} key={option.value + index}>{option.label}</option>
                        ))};
                    </select>
                </div>
                <div>
                    <form>
                        <div className="relative">
                            <input onSubmit={(e) => e.preventDefault()} onChange={handleSearchChange} value={search} type="search" id="default-search" className="xsm:w-[250px] block w-96 px-10 py-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 outline-none" placeholder="Search any product" />

                            <button onClick={handleButton} type="submit" className="text-white absolute right-2 bottom-1 bg-yellow-500 hover:bg-yellow-600 font-medium rounded-md text-sm px-4 py-2"><Search /></button>
                        </div>
                    </form>
                </div>
                <div>

                    <select className='bg-white text-black px-5 py-2 rounded-md outline-none border-none' name="language" id="language">
                        <option value="English">English</option>
                        <option value="Spanish">Spanish</option>
                        <option value="French">French</option>
                    </select>
                </div>
                <div className='flex justify-center items-center text-white font-semibold text-xl cursor-pointer'>
                    <Cart />
                    <p className='mx-2'>Cart</p>
                </div>
                <div className='flex justify-center items-center  text-white font-semibold text-xl cursor-pointer'>
                    <PersonFill />
                    <p className='mx-2'> Account</p>
                </div>
            </div>
            <div className='my-12 text-center'>
                <p className="lg:text-5xl text-white font-extrabold xsm:text-lg sm:text-lg md:text-xl xsm:mt-0 sm:mt-0">Get Started with <br /> your favourite Shopping Now !</p>
            </div>
        </div>
    )
}

export default SearchBar
