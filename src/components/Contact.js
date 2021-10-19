import React, { Fragment } from "react";

function handleSubmit() {
    // <a
    //       id="gmail-button"
    //       class="btn btn-danger"
    //       href="mailto:clind323@gmail.com"
    //     ></a>
  console.log("Sending Email");
}

export default function Contact() {
  return (
    <Fragment>
    <main style={{maxWidth:800, padding:24, margin: "auto", backgroundColor: 'rgb(199, 185, 140)', borderRadius: 8}}>
      <h2>Contact Info</h2>
      <div class="container d-flex justify-content-around">
      <a class="contactLinks" href="https://github.com/clind3" target="blank"><img
                        src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"
                        alt="github link button"/></a>
                <a class="contactLinks" href="https://www.linkedin.com/in/celina-lind-b31895171/"
                    target="blank"><img
                        src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"
                        alt="linkedin link icon"/></a>
                <a href="mailto: clind323@gmail.com"><img
                        src='https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white'
                        alt="gmail icon link button" /> </a>
      </div>
      <h4 className="my-3">Send me an email.</h4>
      <form id="email-form" action="mailto:clind323@gmail.com" method="POST" enctype="text/plain" >
        <div className="form-group mt-3">
          <label htmlFor="name-input">Name</label>
          <input type="text" id="name-input" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="email-input">Email address</label>
          <input type="email" id="email-input" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="message-input">Message</label>
          <textarea
            id="message-input"
            className="form-control"
            rows="5"
          ></textarea>
        </div>
        <button type="submit" className="btn btn-warning">
          Submit
        </button>
      </form>
      </main>
    </Fragment>
  );
}