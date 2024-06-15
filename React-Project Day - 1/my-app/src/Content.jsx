// // This code is a basic React application that displays a
//  simple web page featuring BMW content. The application is 
//  divided into three main components: Header, Content, and Footer.

const Content = () => {
    return (
        <section>
           <img  src="https://images.prismic.io/bmw-eurokarscoid/2a194b4e-21a1-46d9-a10d-75407eb3b721_BMW-M4_GT4-2023-1600-0b.jpg?auto=compress,format&rect=0,200,1600,800&w=1600&h=800" alt="" style={{width:'100%',height:'671px',position:'absolute'}} />
           <div style={{position:'absolute', width:'100%', marginTop:'5%'}}>
           <h1 style={{color:'white',fontSize:'40px',fontWeight:'bold',marginLeft:'15%' }}>How much is the BMW M
           now?</h1>
           <h2 style={{color:'white', margin:'0%',marginLeft:'15%'}}>rear-wheel-drive model now starts at $77,175 </h2>
           <p style={{color:'white', margin:'0%',marginLeft:'15%',width:'39%',fontSize:'19px',marginTop:'1%'  }}>while the Competition will cost $81,375, both up by $180. Opting for the all-wheel-drive Competition xDrive sees the price rise to $86,475—an $1180 increase from 2024.</p>
        
           <button style={{textDecoration:'none',backgroundColor:'white',borderRadius:'5%',padding:'20px',marginLeft:'15%',marginTop:'2%',border:'none',fontWeight:'bold'}}>Click me now</button>
        
           </div>
        </section>
    );
}
export default Content;