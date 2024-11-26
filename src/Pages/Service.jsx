import React from 'react'

function Service() {
    const serviceDetails = [
        {
            id: '1',
            name: 'HTML',
            description: '',
            img: '/img/html.png'
        },
        {
            id: '2',
            name: 'CSS',
            description: '',
            img: '/img/css.png'

        },
        {
            id: '3',
            name: 'JavaScript',
            description: '',
            img: '/img/js.png'

        },
        {
            id: '4',
            name: 'Bootstrap',
            description: '',
            img: '/img/bootstrap.png'
        },
        {
            id: '4',
            name: 'Node JS',
            description: '',
            img: '/img/node.png'
        },
        {
            id: '5',
            name: 'React JS',
            description: '',
            img: '/img/reactjs.png'

        },
        {
            id: '6',
            name: 'Database',
            description: '',
            img: '/img/database.png'

        },
        {
            id: '6',
            name: 'AWS',
            description: '',
            img: '/img/aws1.png'

        },

    ]
    return (
        <>
            <div id="service" className='container'>
                <div className="row">
                    <div className="col-12 text-center mb-4">
                        <h2 className="serviceHeading">Service</h2>
                    </div>
                    {serviceDetails.map((item) => (
                        <div key={item.id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                            <div className="card projectbox" style={{ width: "100%" }}>
                                <img src={item.img} className="card-img-top serviceImg" alt={item.name} />
                                <div className="card-body projectboxbody">
                                    <h5 className="card-title text-center">{item.name}</h5>
                                    <p className="card-text">{item.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </>
    )
}

export default Service