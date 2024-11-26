import React from 'react'
import { Modal } from 'react-bootstrap'

function ProjectModel({ handleClose, show, ShowAmindashboard, handleCloseAdmin, ShowTableBooking, handleCloseTable }) {
    return (
        <>

            {/* Admin DashBoard */}
            <Modal dialogClassName="fullscreen"  show={ShowTableBooking} onHide={handleCloseTable}>
                <Modal.Header closeButton>
                    <Modal.Title>Table Booking Website</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row">
                        <div className="col-sm-12 mb-3 col-md-4 col-lg-4 " >
                            <label htmlFor="" style={{ fontWeight: "500", marginBottom: "4px" }}>Login</label>
                            <img src="/img/tablelogin.png" className='w-100 modalBox' alt="" />
                        </div>

                        <div className="col-sm-12 mb-3 col-md-4 col-lg-4" >
                            <label htmlFor="" style={{ fontWeight: "500", marginBottom: "4px" }}>Sign Up</label>
                            <img src="/img/tablesign.png" className='w-100 modalBox' alt="" />
                        </div>

                        <div className="col-sm-12 mb-3 col-md-4 col-lg-4 " >
                            <label htmlFor="" style={{ fontWeight: "500", marginBottom: "4px" }}>Home</label>
                            <img src="/img/project3.png" className='w-100 modalBox' alt="" />
                        </div>

                        <div className="col-sm-12 col-md-4 col-lg-4 mt-3" >
                            <label htmlFor="" style={{ fontWeight: "500", marginBottom: "4px" }}>Category</label>
                            <img src="/img/category.png" className='w-100 modalBox' alt="" />
                        </div>

                        <div className="col-sm-12 col-md-4 col-lg-4 mt-3" >
                            <label htmlFor="" style={{ fontWeight: "500", marginBottom: "4px" }}>Best Item</label>
                            <img src="/img/important.png" className='w-100 modalBox' alt="" />
                        </div>
                        <div className="col-sm-12 col-md-4 col-lg-4 mt-3" >
                            <label htmlFor="" style={{ fontWeight: "500", marginBottom: "4px" }}>Book Table Details</label>
                            <img src="/img/book.png" style={{ height: "auto" }} className='w-100 modalBox ' alt="" />
                        </div>

                    </div>
                </Modal.Body>
            </Modal>



            {/* Ecommerce Website */}
            <Modal dialogClassName="fullscreen" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>E-commerce Website</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row">
                        <div className="col-sm-12 mb-3 col-md-4 col-lg-4 " >
                            <label htmlFor="" style={{ fontWeight: "500", marginBottom: "4px" }}>Login</label>
                            <img src="/img/signin.png" className='w-100 modalBox' alt="" />
                        </div>

                        <div className="col-sm-12 mb-3 col-md-4 col-lg-4" >
                            <label htmlFor="" style={{ fontWeight: "500", marginBottom: "4px" }}>Sign Up</label>
                            <img src="/img/signup.png" className='w-100 modalBox' alt="" />
                        </div>

                        <div className="col-sm-12 mb-3 col-md-4 col-lg-4 " >
                            <label htmlFor="" style={{ fontWeight: "500", marginBottom: "4px" }}>Home Page</label>
                            <img src="/img/home.png" className='w-100 modalBox' alt="" />
                        </div>

                        <div className="col-sm-12 col-md-4 col-lg-4 mt-3" >
                            <label htmlFor="" style={{ fontWeight: "500", marginBottom: "4px" }}>Products List</label>
                            <img src="/img/product.png" className='w-100 modalBox' alt="" />
                        </div>

                        <div className="col-sm-12 col-md-4 col-lg-4 mt-3" >
                            <label htmlFor="" style={{ fontWeight: "500", marginBottom: "4px" }}>Add To Cart</label>
                            <img src="/img/contact.png" style={{ height: "9em" }} className='w-100 modalBox' alt="" />
                        </div>

                        <div className="col-sm-12 col-md-4 col-lg-4 mt-3" >
                            <label htmlFor="" style={{ fontWeight: "500", marginBottom: "4px" }}>Footer</label>
                            <img src="/img/footer.png" style={{ height: "9em" }} className='w-100 modalBox' alt="" />
                        </div>
                    </div>


                </Modal.Body>
            </Modal>

            {/* Admin DashBoard */}
            <Modal dialogClassName="fullscreen" show={ShowAmindashboard} onHide={handleCloseAdmin}>
                <Modal.Header closeButton>
                    <Modal.Title>Admin Dashboard For E-commerce Website</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row">
                        <div className="col-sm-12 mb-3 col-md-4 col-lg-4 " >
                            <label htmlFor="" style={{ fontWeight: "500", marginBottom: "4px" }}>Admin Dashboard</label>
                            <img src="/img/admindashboard.png" className='w-100 modalBox' alt="" />
                        </div>

                        <div className="col-sm-12 mb-3 col-md-4 col-lg-4" >
                            <label htmlFor="" style={{ fontWeight: "500", marginBottom: "4px" }}>Add Product</label>
                            <img src="/img/addproduct.png" className='w-100 modalBox' alt="" />
                        </div>

                        <div className="col-sm-12 mb-3 col-md-4 col-lg-4 " >
                            <label htmlFor="" style={{ fontWeight: "500", marginBottom: "4px" }}>Products</label>
                            <img src="/img/adminproduct.png" className='w-100 modalBox' alt="" />
                        </div>

                        <div className="col-sm-12 col-md-4 col-lg-4 mt-3" >
                            <label htmlFor="" style={{ fontWeight: "500", marginBottom: "4px" }}>Orders List</label>
                            <img src="/img/Orderlist.png" className='w-100 modalBox' alt="" />
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default ProjectModel