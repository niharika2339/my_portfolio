import React, { useState } from 'react'
import ProjectModel from './ProjectModel';
import { Link } from 'react-router-dom';

function ProjectPage() {
    const [show, setShow] = useState(false);
    const [admindashboard, setAdmindashboard] = useState(false);
    const [tableBooking, setTableBooking] = useState(false);


    const handleShow = () => {
        setShow(true);
    }

    const handleAdmindashboard = () => {
        setAdmindashboard(true);
    }

    const handleTableBokking = () => {
        setTableBooking(true);
    }

    // Handle CLosing Section
    const handleClose = () => {
        setShow(false);
    }

    const handleCloseAdmin = () => {
        setAdmindashboard(false);
    }

    const handleCloseTable = () => {
        setTableBooking(false);
    }


    return (
        <>
            <div id="project" className='container  mb-3'>
                <div className="projectHeading">My Projects </div>
                <div className="row">
                    <div className="col-sm-4 mb-2 col-lg-4 col-md-4 ">
                        <div className="card projectbox1" style={{ width: "100%" }}>
                            <img src="/img/home.png" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title text-center">E-Commerce Website</h5>
                                <p className="card-text">I developed a full-featured e-commerce website using React.js for the frontend, Node.js for the backend, and Mongoose for managing the database. The platform provides a shopping experience with features like product listings, a dynamic cart, and secure checkout.</p>
                                <div className='text-center'>
                                    <Link onClick={handleShow} className="btn btn-danger">More Details</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-4 mb-2 col-lg-4 col-md-4 ">
                        <div className="card projectbox1" style={{ width: "100%" }}>
                            <img src="/img/admindashboard.png" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title text-center">Admin Dashboard For E-Commerce </h5>
                                <p className="card-text">I designed an e-commerce platform that includes a comprehensive admin dashboard. The dashboard allows administrators to manage products, view and update order lists, and access user details. This setup ensures streamlined management of inventory and orders, enhancing the overall efficiency of the platform.</p>
                                <div className='text-center'>
                                    <Link onClick={handleAdmindashboard} className="btn btn-danger">More Details</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-4 mb-2 col-lg-4 col-md-4 ">
                        <div className="card projectbox1" style={{ width: "100%" }}>
                            <img src="/img/project3.png" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title text-center">Table Booking Website </h5>
                                <p className="card-text">The Table Booking Website is built using React.js, Node.js, and Mongoose. It allows users to browse and book tables at restaurants with real-time availability. Upon successful booking, users receive an automated email notification confirming their reservation details.</p>
                                <div className='text-center'>
                                    <Link onClick={handleTableBokking} className="btn btn-danger">More Details</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >

            <ProjectModel
                show={show} handleClose={handleClose}
                ShowAmindashboard={admindashboard}
                handleCloseAdmin={handleCloseAdmin}
                ShowTableBooking={tableBooking}
                handleCloseTable={handleCloseTable} />
        </>
    )
}

export default ProjectPage