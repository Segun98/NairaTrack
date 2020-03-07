import React from 'react';
import { Link } from "react-router-dom";

export default function Footer() {

   const LinkStyle={
        textDecoration:'none',
        color:'whitesmoke'
    }
    return (
        <div className="footer">
            <div className="footer-wrap">
                <Link style={LinkStyle} to="/">
                <div className="footer-item">
                <i className="fas fa-home"></i>
                <h6>Home</h6>
                </div>
                </Link>
                <Link style={LinkStyle} to="/account-one">
                <div className="footer-item">
                <i className="fas fa-list"></i>
                <h6>Personal</h6>
                </div>
                </Link>
                <Link style={LinkStyle} to="/account-two">
                <div className="footer-item">
                <i className="fas fa-list"></i>
                <h6>Business</h6>
                </div>
                </Link>
                <Link style={LinkStyle} to="/about">
                <div className="footer-item">
                <i className="fas fa-user-alt"></i>
                <h6>About</h6>
                </div>
                </Link>
            </div>
        </div>
    )
}
