const MoviesLogic = (props) => {
    let header=props.title
    let favouritesData=props.data
    let handleRemove=props.removeFunction
    return ( 
        <div className="favs">
             <h1>{header}</h1>
            <div className="favs">
                {favouritesData.map((data)=>(
                    <div className="favs_list">
                        <h2>{data.title}</h2>
                        <p>{data.Genre}/{data.Rating}⭐</p>
                        <button onClick={()=>handleRemove(data.id,data.title)}>Remove</button> 
     {/* we use ()=>, ie: anonimus function because with out clicking all data will be deleted before clicking so we use it to perform function after clicking,
     data.id will call id mentioned in the above  function parameter and will check if its calling same value and display with alert */}
                    </div>
                ))}
            </div>
        </div>
     );
}
 
export default MoviesLogic;
