import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/addFav.css"

const AddFav = () => {
    let [title,setTitle]=useState("")
    let [Genre,setGenre]=useState("")
    let [language,setLanguage]=useState("")
    let [Rating,setRating]=useState("")
    let navigate=useNavigate()

    let handleSubmit=(e)=>{
        e.preventDefault()
        let data={title,Genre,language,Rating}
        fetch('http://localhost:4000/favourites',{
            method:'POST',
            headers:{'Content-type':'application/json'},
            body:JSON.stringify(data)//convert everything into string to access json file      
    })
    alert(`${title} is added`)
    navigate('/movies')
    }
    let reset=()=>{
        setTitle("")
        setGenre("")
        setLanguage("")
        setRating("")
    }
    return ( 
        <div className="addfav">
            <h1 style={{}}>ADD TO FAV</h1>
            <div className="form">
            <div className="form_img">
            <img height="500px" width="400px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW-J66injoFCxZRk3WiDtJfklL2gAKUR0H4A&usqp=CAU" alt="" />
        </div>
        <div className="form_input">
            <form action="" onSubmit={handleSubmit}>
                <div className="title">
                    <input type="text" placeholder="Enter title" value={title} onChange={(e)=>setTitle(e.target.value)}/>
                </div>
                <div className="genre">
                    <input type="text" placeholder="Enter genre" value={Genre} onChange={(e)=>setGenre(e.target.value)}/>
                </div>
                <div className="language">
                    <input type="text" placeholder="Enter language" value={language} onChange={(e)=>setLanguage(e.target.value)}/>
                </div>
                <div className="rating">
                    <input  type="text" placeholder="Enter rating" value={Rating} onChange={(e)=>setRating(e.target.value)}/>
                </div>
                <button type="submit">Add to favourites</button>
                <button type="reset" onClick={reset}>Reset</button>
            </form>
        </div>
        </div>
        </div>
     );
}
 
export default AddFav;