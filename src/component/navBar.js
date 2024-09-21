import React from 'react'
import darkModeIcon from "../images/darkMode.png"

export default function Navbar(props) {
    return (   
            <nav className={`${props.dark==='dark'?"dark-nav":"light-nav"}`}>
                <div className="logo">
                    <a  href="/general" style={{textDecoration:"None", color:"white"}}>My CalC</a>
                </div>
                <ul className="item2">
                    <li> <a href="/general"> General </a> </li>
                    <li> <a href="/scientific"> Scientific </a></li>
                    <li> <a href="/about"> About </a></li>
                </ul>
                {/* <div className="menu-icon">
                    <i className='fa-solid fa-bars'></i>
                </div> */}
                <div >
                    <button className={`${props.dark ==="dark" ?"dark-btn":"light-btn"}`} type="submit" onClick={props.toggle}>
                    <strong>{`${props.dark==="dark"?"dark":"light"}`}</strong>
                    </button>
                </div>
            </nav>

    )
}