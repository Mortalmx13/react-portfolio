import React from 'react';
import pic from '../../img/mypic.jpg';
function About() {

    return(
        <section className="container">
            <h2 class="top-title">Charles Young</h2>
            <hr></hr>
            <div>
                <img src={pic} class="mb-5" id="avatar"  alt="Charles Young" />

                <p>
                I am a newly educated programmer. I started programing 2 years ago first starting in C+ and moved to differnt languages such as HTML, CSS and JS
                </p>
     
                
            </div>
        </section>
    )
}

export default About;