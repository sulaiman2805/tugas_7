function BlackCardComponents({ title, direct, image }) {
    return (
        <div style={{ backgroundColor: '#191A23', width: '400px', height: '200px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '50px', borderRadius: '50px' }}>
            <div>
                <h3 style={{ backgroundColor: '#F3F3F3', padding: '5px', borderRadius: '10px' }}>{title}</h3>
                <img src={direct} alt={direct} />
            </div>
            <div>
                <img style={{width:'200px'}} src={image} alt={image} />
            </div>

        </div>
    );
};

export default BlackCardComponents;