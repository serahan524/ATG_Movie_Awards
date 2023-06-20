/* 
Footer component display the brief information regarding the application
*/

import React from 'react';

function Footer() {
  return (
    <div>
      <div className="row">
        <div className="col-md-12">
          <div className="footer p-3 mt-4 text-center bg-dark text-light">
            Developed By:
            <span className="text-warning font-weight-normal">
              Sera Han
            </span>
            , Using React, Redux &amp; Django Freamework integrated with &nbsp;
            <a
              href="http://www.omdbapi.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              OMDB
            </a>
            &nbsp; &nbsp; &nbsp;
            <li className="nav-item d-inline-block mr-4">
              <i className="fab fa-imdb fa-2x fa-fw" id="imdb-logo" aria-hidden="true"/>
            </li>
            <li className="nav-item d-inline-block mr-4">
              <i className="fab fa-react fa-2x fa-fw" id="react-logo" />
            </li>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;