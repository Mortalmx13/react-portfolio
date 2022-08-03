import React from "react";

function Resume() {
  return (
    <section class="container">
      <h2 className="top-title">Resume</h2>
      <hr></hr>

      <div>
        <div class="mt-5">
          <h2 className="top-title">Front-End</h2>
          <ul>
            <li>HTML</li>
            <li>JavaScript</li>
            <li>CSS</li>
            <li>JQuery</li>
            <li>React</li>
            <li>Bootstrap</li>
          </ul>

          
        </div>
      </div>

      <div class="justify-content-center mt-5">
        <div>
          <h2 className="top-title">Back-End</h2>
          <ul>
            <li>APIs</li>
            <li>MySQL</li>
            <li>MongoDB</li>

          </ul>
        </div>
      </div>
    </section>
  );
}

export default Resume;