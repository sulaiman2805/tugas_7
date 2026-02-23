function JumbotronLayout() {
    return(
        <div style={{margin:'0px 100px', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
            <div style={{width:'500px'}}>
                <h1 style={{fontSize:'60px'}}>Navigating the digital landscape for success</h1>
                <p style={{fontSize:'20px'}}>Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.</p>
                <button style={{backgroundColor:'black', color:'white', padding:'20px', borderRadius:'20px',fontSize:'20px', marginTop:'20px', width:'250px'}}>Book a consultation</button>
            </div>
            <div><img style={{width: '300px'}} src="./images/jumbo.png" alt="jumbotron"/></div>
        </div>
    );
}

export default JumbotronLayout;