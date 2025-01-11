import { useLoaderData } from "react-router-dom";
import Services from "./Services";
import useTitle from "../AuthProvider/useTitle";
import { useEffect, useState } from "react";
import axios from "axios";



const AllServices = () => {
    useTitle('Books');
    const {result} = useLoaderData();

    const [loaderData, setLoaderData] = useState(result);
    const [search, setSearch] = useState('');

    const handleSearch = e => {
        const value = e.target.value;
        setSearch(value);
    }
    
    useEffect(() => {
        axios.get(`https://server-side-taupe-beta.vercel.app/allServices?searchService=${search}`)
            .then(res => {
                setLoaderData(res.data.newResult);
            })
    }, [search])

    
    return (
        <div className="mx-auto">
            <div className="text-center">
                <h3 className="text-3xl font-bold">All Services</h3>
                <p>find your best deal here...</p>
            </div>

            <label className="input input-bordered flex items-center gap-2 my-7 w-3/4 mx-auto">
                <input onChange={handleSearch} type="text" className="grow" placeholder="Search" />
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70">
                    <path
                        fillRule="evenodd"
                        d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                        clipRule="evenodd" />
                </svg>
            </label>

            <div className="my-16 grid grid-cols md:grid-cols-2 lg:grid-cols-3 gap-3">
                {
                    loaderData.map(service => <Services key={service._id} service={service}></Services>)
                }
            </div>
        </div>
    );
};

export default AllServices;