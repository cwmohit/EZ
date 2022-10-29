import React, { useContext } from "react";
import { ClientContext } from "../../App";
import { companies } from "../../util/constants";

function ClientsWrapper() {
  const { client, setClient } = useContext(ClientContext);

  return (
    <div className="client-list-wrapper">
      <div className="header">
        <div className="header-top">
          <div className="header-top-left">
            <h4>Clients</h4>
          </div>
          <div className="header-top-right">
            <span>+</span>
          </div>
        </div>
        <div className="search-wrapper header-bottom">
          <input type="text" placeholder="Search" className="search-input" />
        </div>
      </div>
      <div className="main">
        <div className="client-list-header">
          <div className="client-list-header-left">
            <h5>April 2021</h5>
          </div>
          <div className="client-list-header-right">
            <span>&#x2193;</span>
          </div>
        </div>
        <div className="client-list">
          {companies.map((item, index) => (
            <div
              className={
                "client-list-item" + (client === index ? " active" : "")
              }
              key={index}
              onClick={() => setClient(index)}
            >
              <div className="client-list-item-left">
                <h5 className="client-name">{item.name}</h5>
                <h5 className="entries-count">8 Entries</h5>
              </div>
              <div className="client-list-item-right">
                <h5>Code</h5>
                <h5>64 Users</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ClientsWrapper;
