import React from 'react'
import AboutMe from './AboutMe'
import ProjectPage from './ProjectPage'
import HeadingPage from './HeadingPage'
import Service from './Service'

function HomePage() {
    return (
        <>
            <div id="homepage">
                <div id="box">
                    <div className="heading text-white">
                        <div className="mainHeading">
                            I'm Niharika kanda

                        </div>
                        <div className='text text-center'>
                            Web Developer  || UI Desginer
                        </div>
                    </div>
                </div>
            </div>

            <AboutMe />
            {/* <ProjectPage /> */}
            <HeadingPage />
            <Service />

        </>
    )
}

export default HomePage