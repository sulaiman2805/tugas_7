function GreyCardComponents({ title, direct, image }) {
    return (
        <div style={{ backgroundColor: '#f3f3f3', width: '400px', height: '200px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '50px',borderRadius:'50px' }}>
            <div>
                <h3 style={{ backgroundColor: '#B9FF66', padding: '5px', borderRadius: '10px'}}>{title}</h3>
                <img src={direct} alt={direct} />
            </div>
            <div>
                <img style={{width:'200px'}} src={image} alt={image} />
            </div>
        </div>
    );
};

export default GreyCardComponents;