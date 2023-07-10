import '../styles/home.css'
const Home = () => {
        let images =[
            {
                img:  "Images/fate.png"
            },
            {
                img: "Images/haikyuu.png" 
            },
            {
                img: "Images/nogame.png"   
            },
            {
                img: "Images/one.jpg"  
            },
            {
                img: "Images/weather.png"  
            },
            {
                img: "Images/steins.jpg"  
            }
        ]
    return ( 
        <div className="home">
            <div className="banner">
                <div className="description">
                    <p>All time best worthy movies in just one click</p>
                    <button>Subscribe Now</button>
                </div>
                <div className="banner_img">
                    <img width="900" src="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_2x/sources/r1/cms/prod/4311/674311-h" alt="" />
                </div>
            </div>
            <div className="movie_list">
                <h1>Top Popular Series</h1>
                
                {images.map((data)=>(
                <img src={data.img} alt="" />
               ))}
            </div>
        </div>
     );
}
 
export default Home;