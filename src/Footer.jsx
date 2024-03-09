import React from "react";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
    const footerStyle = {
        backgroundColor: '#333',
        color: '#fff',
        padding: '10px',
        textAlign: 'center',
        position: 'fixed',
        bottom: 0,
        width: '100%',
    };

    return (
        <footer style={footerStyle}>
            <p><span><a href="https://github.com/yusufkula/ghost_typer" className="githubLink"><FaGithub size={20} /></a> - </span>Simple cyberpunk theme typing game made with React JS</p>
        </footer>
    );
}

export default Footer;