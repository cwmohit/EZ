import React from "react";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <img
          src="https://media-exp1.licdn.com/dms/image/C560BAQGM74Ib1l-ubw/company-logo_200_200/0/1626978272204?e=1675296000&v=beta&t=0EsywiqKBiicD8T1jauOaXLlGRnOK6gsvtpRYWTsR3Y"
          alt="logo"
        />
      </div>
      <div className="sidebar-menu">
        <ul>
          <li>
            <span className="icon"></span>
          </li>
          <li>
            <span className="icon"></span>
          </li>
          <li>
            <span className="icon"></span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
