import BlackCardComponents from "../components/BlackCardComponent";
import GreenCardComponents from "../components/GreenCardComponent";
import GreyCardComponents from "../components/GreyCardComponent";

function ServiceLayout() {
    const services = [
        'Search Engine Optimization',
        'Pay-per-click advertising',
        'Social Media Marketing',
        'Email Marketing',
        'Content Creation',
        'Analytics and Tracking',
    ];
    return(
    <div style={{display:"grid", gridTemplateColumns: "1fr 1fr", gap:"20px", margin:'0px 100px'}}>
        {services.map((service, index) => {
            if (index === 0 || (index + 1) % 3 === 1) {
             return <GreyCardComponents key={index} title={service}/>   
            } else if (index === 1 || (index + 1) % 3 === 2) {
            return <GreenCardComponents key={index} title={service}/>
            } else if (index === 2 || (index + 1) % 3 === 0){
            return <BlackCardComponents key={index} title={service}/>
            }
            })}
    </div>
    );
}

export default ServiceLayout;