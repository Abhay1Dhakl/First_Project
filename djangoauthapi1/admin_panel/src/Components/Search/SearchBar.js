import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import "./SearchBar.css";
import data from './places.json';
const SearchBar = () => {
    const [Search, setSearch] = useState("");
    const[searchData, setsearchData]=useState([]);
 
    const handleChange = e => {
        setSearch(e.target.value)
    }

    const handleClose = () =>{
        setSearch("")
        setsearchData([])
    }
    useEffect(() => {
        if(Search !== ""){
           const newfilterdata = data.filter(place => {
            return place.visitingPlace.toLocaleLowerCase().includes(Search.toLocaleLowerCase())
           })
           setsearchData(newfilterdata)
        }
    },[Search])
    return(
        <>
            <div className="searchBox position-relative d-flex align-items-center">
                <input type="text"  placeholder="Search here..." autoComplete="off"
                onChange={handleChange}
                value={Search}
                />
                <div className="mr-2">
                    {
                        Search === "" ? <SearchIcon/> : <CloseIcon onClick={handleClose}/>
                    }  
                </div>
            </div>
            <div className="search_result">
                {
                    searchData.map((data,index)=> {
                        return <a href={data.link} key={index} arget="_blank" className="search_suggestion_line">
                   
                   {data.visitingPlace}
                   <hr className="hr_decoration"/>
                    </a>
                    
                    })
                }
               
            </div>
       
        </>
    )
}

export default SearchBar;