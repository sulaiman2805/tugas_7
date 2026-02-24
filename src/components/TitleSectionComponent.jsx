function TitleSectionComponent({title,description}) {
    return(
        <div style={{display:'flex', flexDirection:'row', gap:'60px', margin:'70px 0px 100px 100px', alignItems:'center'}}>
            <h1 style={{backgroundColor: '#B9FF66', padding:'5px', borderRadius:'10px'}}>{title}</h1>
            <p style={{width:'420px'}}>{description}</p>
        </div>
    );
};

export default TitleSectionComponent;