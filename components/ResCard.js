const ResCard = ({resname,cuisine,star,timing}) => {
    // props.resname=resname;
    // props.cuisine=cuisine;
    return(
       <div className="res-card">
        <img className="res-img" 
        alt="res-img" 
        src="https://b.zmtcdn.com/data/pictures/6/18755646/1b799b5a16707767826fb33b261e2174_o2_featured_v2.jpg?output-format=webp"></img>
        <h3>{resname}</h3>
        <div>{cuisine}</div>
        <div className="star-rating">{star} star</div>
        <div className="timing">{timing} min</div>
       </div>
    )
}

export default ResCard;