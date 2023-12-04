import ResCard from "./ResCard";

const  Body = () => {
    return(
        <div className="body">
            <div className="search-container">
                <div className="searchbar">
                    <input type="text"/>
                </div>
                <button className="searchbutton">Search</button>
            </div>
            <div className="res-container">
                {/* /Restuarnt Card */}
                <ResCard resname="Saffron" cuisine="North Indian, South Indian" star="4" timing="34"/>
                <ResCard  resname="Punjabi Tadka" cuisine="Punjabi, North Indian, South Indian" star="5" timing="34"/>
                <ResCard  resname="Chole Vala" cuisine="North Indian" star="4.5" timing="34"/>
                

                
            </div>

        </div>
    )
}

export default Body;