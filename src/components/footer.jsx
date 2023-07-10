import '../styles/footer.css'
const Footer = () => {
    return ( 
        <div className="footer">
            <div className="footer_logo">
                <img src="images/navLogo.svg" alt="" />
            </div>
            <div className="nav_links">
                <ul>
                    <li><a href="">Terms and condition</a></li>
                    <li><a href="">Send us feedback</a></li>
                    <li><a href="">Help</a></li>
                </ul>
            </div>
            <div className="desc">
                <p>1992-1990,Hotstar.com,Inc. or Its affilations</p>
            </div>
        </div>
     );
}
 
export default Footer;
