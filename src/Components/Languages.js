import React from 'react';
import htmlIcon from '../assets/Html-icon.png';
import cssIcon from '../assets/Css-icon.png';
import javascriptIcon from '../assets/JavaScript-icon.png';
import reactIcon from '../assets/react-logo.png';
import jestIcon from '../assets/Jest-icon.png';
import rtlIcon from '../assets/reactTestingLibrary-logo.png';
import mysqlIcon from '../assets/mySQL.png';
import sequelizeIcon from '../assets/sequelize.svg';
import mongoIcon from '../assets/mongoDB.png';
import nodeIcon from '../assets/nodejs_logo.png';
import dockerIcon from '../assets/docker.png';

function Languages() {

  const languagesDiv = {
    marginTop: '50px',
    textAlign: 'center'
  }

  return (
    <div style={languagesDiv}>
      <h2>Languages</h2>
      <div>
        <img src={htmlIcon} alt="html" width="40" height="50" />
        <img src={cssIcon} alt="css" width="40" height="50" />
        <img src={javascriptIcon} alt="javascript" width="60" height="50" />
        <img src={reactIcon} alt="react" width="50" height="50" />
        <img src={jestIcon} alt="jest" width="50" height="50" />
        <img src={rtlIcon} alt="rtl" width="50" height="50" />
      </div>
      <div>
        <img src={mysqlIcon} alt="mysql" width="60" height="55" />
        <img src={sequelizeIcon} alt="sequelize" width="60" height="50" />
        <img src={mongoIcon} alt="mongo" width="55" height="55" />
        <img src={nodeIcon} alt="node" width="50" height="50" />
        <img src={dockerIcon} alt="docker" width="70" height="55" />
      </div>
    </div>
  );
}

export default Languages;