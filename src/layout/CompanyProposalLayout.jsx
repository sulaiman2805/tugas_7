function CompanyProposalLayout() {
    return (
        <div style={{margin:'70px 0px 100px 100px',display:'flex', justifyContent:'space-between', alignItems:'center', backgroundColor:'#F3F3F3', padding:'30px',width:'1100px', borderRadius:'45px'}}>
            <div style={{width:'500px'}}>
                <h2 style={{fontSize:'25px'}}>Let’s make things happen</h2>
                <p style={{fontSize:'20px'}}>Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.</p>
                <button style={{backgroundColor:'black', color:'white', padding:'20px', borderRadius:'20px', fontSize:'20px', marginTop:'20px', width:'250px'}}>Get your free proposal</button>
            </div>
            <div>
                <img style={{width:'300px'}} src="./images/proposal.png" alt="proposal"/>
            </div>
        </div>

    )
};

export default CompanyProposalLayout;