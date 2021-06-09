import React from 'react';
import { NavLink, Image } from 'react-bootstrap';

function Contact() {
    return (
      <div>
        <NavLink target="_blank" href="https://linkedin.com/in/tiago-berwanger">
          <Image src="" alt="linkedin" />
        </NavLink>
        <p>LinkedIn</p>
        <NavLink target="_blank" href="https://github.com/tiagoberwanger">
          <Image  src="" alt="git" />
        </NavLink>
        <p>GitHub</p>
        <NavLink href="mailto:berwangertiago@gmail.com">
          <Image src="" alt="mail" />
      </NavLink>
        <p>Contato</p>
      </div>
    );
}

export default Contact;

