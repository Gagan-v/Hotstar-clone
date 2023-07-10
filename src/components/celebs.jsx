import { useState } from "react";
import'../styles/celebs.css'
const Celebs = () => {
    //database
    let stars=[
        {
        img:"Images/chishemsworth.jpg",
        name:"chishemsworth",
        id:1
        },
        {
        img:"Images/evans.jpg",
        name:"evans",
        id:2
        },
        {
        img:"Images/jonnydepp.jpg",
         name:"jonnydepp",
         id:3
         },
        {
        img:"Images/michaelscott.jpg",
        name:"michaelscott",
        id:4
          },
        {
        img:"Images/tomcruise.jpg",
        name:"tomcruise",
        id:5
        }
    ]
    let [starData,setData]=useState(stars)
    let handleRemove = (id,name)=>{
        setData(starData.filter(x=>x.id !=id))
        alert(`${name} had been removed`)
    }
    return ( 
        <div className="celebs">
            {starData.map(data=>(
                <div className="celebs_list">
                    <div className="image">
                    <img src={data.img} alt="" />
                    </div>
                    <div className="info">
                    <h1>{data.name}</h1>
                    <button onClick={()=>handleRemove(data.id,data.name)}>Remove</button>
                </div>
                </div>
            ))}
        </div>
     );
}
 
export default Celebs;