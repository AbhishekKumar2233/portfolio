import React from "react";
import "./contact.css";

export default function Contact() {
  return (
    <div className="contact">
      <h1 className="heading">Contact</h1>
      <p>Want to get in touch? Contact me on any of the platform</p>
      <div className="contactlist">
        <a className="list-item"  href="mailto:abhikumar26122001@gmail.com" target="_blank">
          <h2>Email</h2>
          <p>abhikumar26122001@gmail.com</p>
        </a>
        <a className="list-item"  href="tel:9192669915" target="_blank">
          <h2>Contact No</h2>
          <p>+91 9129669915</p>
        </a>
        <a  className="list-item" href="https://github.com/AbhishekKumar2233" target="_blank">
          <h2>GitHub</h2>
          <p>https://.com/AbhishekKumar2233</p>
        </a>
        <a  className="list-item"  href="https://in.linkedin.com/in/abhishek-kumar-b873981b0" target="_blank">
          <h2>Linkdin</h2>
          <p>Abhishek Kumar</p>
        </a>
        <a  className="list-item" >
          <h2>Location</h2>
          <p>DLF City IV, Sector 28, Gurugram, Haryana</p>
        </a>
      </div>
    </div>
  );
}
