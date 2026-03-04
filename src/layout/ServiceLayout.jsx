import BlackCardComponents from "../components/BlackCardComponent";
import GreenCardComponents from "../components/GreenCardComponent";
import GreyCardComponents from "../components/GreyCardComponent";

function ServiceLayout() {
    const services = [
        {
            title: 'Search Engine Optimization',
            direct: './images/learn_more_1.png',
            image: './images/card_1.png'
        },
        {
            title: 'Pay-per-click advertising',
            direct: './images/learn_more_1.png',
            image: './images/card_2.png'
        },
        {
            title: 'Social Media Marketing',
            direct: './images/learn_more_2.png',
            image: './images/card_3.png'
        },
        {
            title: 'Email Marketing',
            direct: './images/learn_more_1.png',
            image: './images/card_4.png'
        },
        {
            title: 'Content Creation',
            direct: './images/learn_more_1.png',
            image: './images/card_5.png'
        },
        {
            title: 'Analytics and Tracking',
            direct: './images/learn_more_2.png',
            image: './images/card_6.png'
        },
        
    ];
    return(
    <div style={{display:"grid", gridTemplateColumns: "1fr 1fr", gap:"20px", margin:'0px 100px'}}>
        {services.map((service, index) => {
            if (index === 0 || (index + 1) % 3 === 1) {
             return <GreyCardComponents key={index} title={service.title} direct={service.direct} image={service.image}/>   
            } else if (index === 1 || (index + 1) % 3 === 2) {
            return <GreenCardComponents key={index} title={service.title} direct={service.direct} image={service.image}/>
            } else if (index === 2 || (index + 1) % 3 === 0){
            return <BlackCardComponents key={index} title={service.title} direct={service.direct} image={service.image}/>
            }
            })}
    </div>
    );
}

export default ServiceLayout;