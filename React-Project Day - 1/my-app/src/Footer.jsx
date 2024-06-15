const Footer = () => {
    return (
        <div style={{backgroundColor:'block',color:'white',position:'relative',marginTop:'44%' }}>

       <div style={{backgroundColor:'black',paddingTop:'2%', paddingBottom:'1%'}}>
        <h3 style={{textAlign:'center'}}>BMW</h3>
         <div style={{display:'flex',justifyContent:'center'}}>
         <ul style={{listStyle:'none', width:'20%'}}>
            <li><a href="" style={{color:'white',textDecoration:'none'}} >NOUS (RE)JOINDRE</a></li>
            <li><a href="" style={{color:'white',textDecoration:'none'}}>Où nous trouver ?</a></li>
            <li><a href="" style={{color:'white',textDecoration:'none'}}>Devenir Revendeur</a></li>
            <li><a href="" style={{color:'white',textDecoration:'none'}}>Collab x Panafrica</a></li>
            <li><a href="" style={{color:'white',textDecoration:'none'}}>E-Carte Cadeau</a></li>
            <li><a href="" style={{color:'white',textDecoration:'none'}}>Contact</a></li>
           </ul>
           <ul style={{listStyle:'none'}}>
                    <li><a href="" style={{color:'white',textDecoration:'none'}}>INFOS PRATIQUES</a></li>
                    <li><a href="" style={{color:'white',textDecoration:'none'}} >Livraison</a></li>
                    <li><a href="" style={{color:'white',textDecoration:'none'}}>Echanges & Retours</a></li>
                    <li><a href="" style={{color:'white',textDecoration:'none'}} >CGV</a></li>
                    <li><a href="" style={{color:'white',textDecoration:'none'}}>Mentions Légales</a></li>
                    <li><a href="" style={{color:'white',textDecoration:'none'}}>Demander/Suivre un retour</a></li>
                   </ul>
        
         </div>
         <p style={{textAlign:'center', paddingTop:'5px'}}>Copyright © BMW M, 2024.</p>
         </div>
        </div>
    );
}

export default Footer;