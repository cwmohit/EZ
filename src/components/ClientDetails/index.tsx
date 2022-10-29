import React, { useContext, useState } from "react";
import { ClientContext } from "../../App";
import { ClientTabs, companies } from "../../util/constants";
import Topbar from "../layout/Topbar";
import EntriesTable from "./EntriesTable";

function ClientDetails() {
  // active tab
  const { client } = useContext(ClientContext);
  const [activeTab, setActiveTab] = useState(0);
  const [activeEntry, setActiveEntry] = useState<number | null>(null);
  const ClientDetails = companies[client];

  if (!ClientDetails) return null;

  return (
    <div className="main-body">
      <Topbar />
      <div className="client-details-main">
        <div className="client-details">
          <div className="client-details-header">
            <div className="client-details-header-left">
              <img
                src="https://toppng.com/uploads/preview/pdf-icon-11549528510ilxx4eex38.png"
                alt="pdf"
              />
              <h4>{ClientDetails.name}</h4>
            </div>
            <div className="client-details-header-right">
              <button className="btn">Edit</button>
            </div>
          </div>
          <div className="client-details-body">
            <div className="client-details-body-left">
              <div className="client-details-body-left-top">
                <h5>Company Code</h5>
                <p>LUCF</p>
              </div>
              <div className="client-details-body-left-bottom">
                <h5>Company Logo</h5>
                <p>Unavailable</p>
              </div>
            </div>
            <div className="client-details-body-right">
              <h5>Domains</h5>
              <p>www.lucf.com</p>
              <p>www.lucf.in</p>
              <p>www.lucf.co.in</p>
              <p>+5 others</p>
            </div>
          </div>
          <div className="client-details-footer">
            <div className="client-details-tabs">
              {
                // Tabs
                ClientTabs.map((item, index) => (
                  <div
                    className={`client-details-tab ${
                      activeTab === index ? "active" : ""
                    }`}
                    key={index}
                    onClick={() => setActiveTab(index)}
                  >
                    {item}
                  </div>
                ))
              }
            </div>
            <div className="client-details-tab-content">
              {
                // Tab Content
                ClientTabs[activeTab] === "ENTRIES" ? (
                  <div className="tab-content-body">
                    <div className="tab-content-body-header">
                      <div className="tab-content-body-header-left">
                        <h5>4 Entries</h5>
                      </div>
                      <div className="tab-content-body-header-right">
                        <button className="header-top-right">+</button>
                      </div>
                    </div>
                    <div className="tab-content-body-main">
                      <EntriesTable
                        ClientDetails={ClientDetails}
                        activeEntry={activeEntry}
                        setActiveEntry={setActiveEntry}
                      />
                    </div>
                  </div>
                ) : ClientTabs[activeTab] === "INVOICE CODES" ? (
                  <div className="tab-content-body">INVOICE CODES</div>
                ) : ClientTabs[activeTab] === "USERS" ? (
                  <div className="tab-content-body">USERS</div>
                ) : null
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClientDetails;
