function CompanyImagesComponent({path, name}) {
    return (
        <div className="company-image">
            <img style={{width:'130px', filter:'grayscale(100%)'}} src={path} alt={name}/>
        </div>
    );
}

export default CompanyImagesComponent;