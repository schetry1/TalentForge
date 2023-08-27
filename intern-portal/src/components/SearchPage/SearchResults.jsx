import React from "react";
import SearchBar from "./SearchBar";
import searchBackground from "../images/searchBackground.png";

export default function SearchResults() {
    return(
        <div>
            <div style={{width:'100%',paddingX:'10%',display:'flex',flexDirection:'column',alignItems:'center'}}>
                <div style={{marginTop:'20px'}}>
                    <h1>Results</h1>
                </div>
                <div style={{width:'80%',marginTop:'25px'}}>
                    <SearchBar/>
                </div>
            </div>
        </div>
    );
}