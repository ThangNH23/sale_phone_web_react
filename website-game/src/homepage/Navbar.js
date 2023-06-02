import Logo from '../assets/logo.png'


const Navbar = () =>{
    return(
        <div>
            <div className="navbar">
                <div className="logo">
                    <img src={Logo} alt="" />
                </div>
                <div className="navigation">
                    <a href="">Home</a>
                    <a href="">Product</a>
                    <a href="">Admin</a>
                </div>
            </div>
        </div>
    )
}

export default Navbar