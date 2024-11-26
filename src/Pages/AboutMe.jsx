import React from 'react'

function AboutMe() {
    return (
        <>
            <div className="container">
                <div className="" id="aboutme">
                    <div className="row">
                        <div className="col-6 col-md-6 col-lg-6">
                            <div className="image d-flex">
                                {/* <img src='/img/profile.jpg' alt="" /> */}
                                <div className="userDetails">
                                    <p className='details' ><span>Name :- </span>Niharika Kanda
                                    </p>
                                    <p className='details'><span>Profile :-</span> Full Stack Developer</p>
                                    <p className='details'><span>Email :-</span> kandaniharika55@gmail.com</p>
                                </div>
                            </div>

                            <div className="skill ">
                                <div className="skills">
                                    Skills
                                </div>
                                <label htmlFor="" className='mb-1'>HTML</label>
                                <div class="progress mb-2" role="progressbar" aria-label="Basic example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                                    <div class="progress-bar" style={{ width: "90%" }}>90%</div>
                                </div>

                                <label htmlFor="" className='mb-1'>CSS</label>
                                <div class="progress mb-2" role="progressbar" aria-label="Basic example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                                    <div class="progress-bar" style={{ width: "90%" }}>90%</div>
                                </div>

                                <label htmlFor="" className='mb-1'>JavaScript</label>
                                <div class="progress mb-2" role="progressbar" aria-label="Basic example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                                    <div class="progress-bar" style={{ width: "80%" }}>80%</div>
                                </div>

                                <label htmlFor="" className='mb-1'>Bootstrap</label>
                                <div class="progress mb-2" role="progressbar" aria-label="Basic example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                                    <div class="progress-bar" style={{ width: "88%" }}>88%</div>
                                </div>

                                <label htmlFor="" className='mb-1'>React JS</label>
                                <div class="progress mb-2" role="progressbar" aria-label="Basic example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                                    <div class="progress-bar" style={{ width: "78%" }}>78%</div>
                                </div>
                                <label htmlFor="" className='mb-1'>Node JS</label>
                                <div class="progress mb-2" role="progressbar" aria-label="Basic example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                                    <div class="progress-bar" style={{ width: "70%" }}>70%</div>
                                </div>

                                <label htmlFor="" className='mb-1'>Mongoose DB</label>
                                <div class="progress mb-2" role="progressbar" aria-label="Basic example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                                    <div class="progress-bar" style={{ width: "68%" }}>68%</div>
                                </div>
                                <label htmlFor="" className='mb-1'>MySQL DB</label>
                                <div class="progress mb-2" role="progressbar" aria-label="Basic example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                                    <div class="progress-bar" style={{ width: "60%" }}>60%</div>
                                </div>
                            </div>
                        </div>

                        <div className="col-6 col-md-6 col-lg-6">
                            <div className="aboutmeheading">
                                About Me
                            </div>
                            <p className='paragraph'>Hi, my name is Niharika Kanda                            . I have a solid foundation in HTML, CSS, JavaScript, and Bootstrap, along with experience working with the React.js framework to build dynamic and user-friendly front-end applications. <br /> <br /> Recently, I completed a comprehensive training program in the MERN stack (MongoDB, Express.js, React.js, and Node.js), which enhanced my skills in full-stack development.

                                During this training, I gained hands-on experience in building responsive front-end interfaces, developing scalable back-end APIs, and managing databases effectively. I also learned to integrate these technologies to deliver complete and efficient web applications.</p>
                        </div>

                    </div>
                </div>
            </div >
        </>
    )
}

export default AboutMe