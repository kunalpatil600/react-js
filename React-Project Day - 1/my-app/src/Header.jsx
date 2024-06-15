
const Header = () => {
    return (

        <header style={{backgroundColor:'black', padding:'10px',display:'flex' , justifyContent: 'center' }}>
              <img src="https://1000logos.net/wp-content/uploads/2018/02/BMW-symbol.jpg" alt="" style={{width:'6%'}} />
        <nav style={{display:'flex', justifyContent:'space-between',width:'40%',marginTop:'10px'}}>
            <a href="#" style={{color:'white',textDecoration: 'none',fontWeight:'bold'}}>Home</a>
            <a href="#" style={{color:'white',textDecoration: 'none',fontWeight:'bold'}}>About</a>
            <a href="#" style={{color:'white',textDecoration: 'none',fontWeight:'bold'}}>Services</a>
            <a href="#" style={{color:'white',textDecoration: 'none',fontWeight:'bold'}}>Contact</a>
        </nav>
    </header>
    );
}
export default Header;