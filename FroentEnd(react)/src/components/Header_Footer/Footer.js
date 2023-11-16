import React from 'react'
import './Footer.css'
export default function Footer() {
  return (
    <div>
      <footer className="global">
        <div >
          <div className="curve"></div>
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-md-3">
                <h6>The Logo</h6>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>

              <div className="col-sm-6 col-md-2">
                <h6>Services</h6>
                <ul>
                  <li><a href="/">Email Marketing</a> </li>
                  <li><a href="/">Campaigns</a> </li>
                  <li><a href="/">Branding</a> </li>
                  <li><a href="/">Offline</a> </li>
                </ul>
              </div>

              <div className="col-sm-6 col-md-2">
                <h6>About</h6>
                <ul>
                  <li><a href="/">Our Story</a> </li>
                  <li><a href="/">Benefits</a> </li>
                  <li><a href="/">Team</a> </li>
                  <li><a href="/">Careers</a> </li>
                </ul>
              </div>

              <div className="col-sm-6 col-md-2">
                <h6>Legal</h6>
                <ul>
                  <li><a href="/">Terms & Conditions</a> </li>
                  <li><a href="/">Privacy Policy</a> </li>
                  <li><a href="/">Terms of use</a> </li>
                </ul>
              </div>

              <div className="social">
                <h6>Follow us</h6>
                <a href="/"><i className="fa fa-facebook"></i> </a>
                <a href="/"><i className="fa fa-twitter"></i> </a>
                <a href="/"><i className="fa fa-snapchat-ghost"></i> </a>
                <a href="/"><i className="fa fa-instagram"></i> </a>
                <a href="/"><i className="fa fa-google-plus"></i> </a>
              </div>

            </div>
            <p className="copyright"> &copy; Copyright All rights reserved. </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
