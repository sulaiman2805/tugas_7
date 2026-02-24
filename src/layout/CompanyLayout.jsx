import CompanyImagesComponent from "../components/CompanyImagesComponent";

function CompanyLayout() {
    const company = [
        'amazon',
        'dribbble',
        'hubspot',
        'netflix',
        'notion',
        'zoom',
    ];
        
    return (
        <div style={{display: 'flex', flexDirection:'row', justifyContent: 'space-between', alignItems:'center', gap: '50px', margin:'80px 0px 100px 100px'}}>
        {company.map((item, index) => (
            <CompanyImagesComponent
                key = {index}
                path={`./images/${item}.png`}
                name={item}
            />
        ))}
        </div>
        
    );
}

export default CompanyLayout;