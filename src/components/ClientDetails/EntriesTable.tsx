import React from "react";
import { companies } from "../../util/constants";

interface params {
  ClientDetails: typeof companies[0];
  activeEntry: number | null;
  setActiveEntry: (val: number | null) => void;
}

function EntriesTable({ ClientDetails, activeEntry, setActiveEntry }: params) {
  return (
    <table>
      <thead>
        <tr>
          <th>Billing Location</th>
          <th>Entity Name</th>
          <th>Entity Code</th>
          <th>MSLA Valid through</th>
          <th>File Sharing</th>
        </tr>
      </thead>
      <tbody>
        {ClientDetails.entries.map((item, index) => (
          <React.Fragment key={index}>
            <tr
              onClick={() =>
                activeEntry === index
                  ? setActiveEntry(null)
                  : setActiveEntry(index)
              }
            >
              <td>{item.billingLocation}</td>
              <td>{item.entityName}</td>
              <td>{item.entityCode}</td>
              <td>{item.mslaValidThrough}</td>
              <td>{item.fileSharing}</td>
            </tr>
            <tr
              className={`collapsible-row ${
                activeEntry === index ? "active" : ""
              }`}
            >
              <td colSpan={5}>
                <div className="collapsible-row-content">
                  <div className="collapsible-row-content-item">
                    <div className="item">
                      <h5>Address</h5>
                      <p>Line 1</p>
                      <p>Line 2</p>
                      <p>City, country</p>
                      <p>Zipcode</p>
                    </div>
                    <div className="item">
                      <h5>Entity Name</h5>
                      <p>LUCF</p>
                    </div>
                    <div className="item">
                      <h5>Entity Name</h5>
                      <p>LUCF</p>
                    </div>
                  </div>
                  <div className="collapsible-row-content-item">
                    <div className="item">
                      <h5>Company Registeration Number</h5>
                      <p>123456789</p>
                    </div>
                    <div className="item">
                      <h5>Company Registeration Validity</h5>
                      <p>12/12/2021</p>
                    </div>
                    <div className="item">
                      <h5>Tax Registeration Number</h5>
                      <p>123456789</p>
                    </div>
                  </div>
                  <div className="collapsible-row-content-item">
                    <div className="item">
                      <h5>Entity Code</h5>
                      <p>LUCF</p>
                    </div>
                    <div className="item">
                      <h5>Entity Name</h5>
                      <p>LUCF</p>
                    </div>
                    <div className="item">
                      <h5>Entity Name</h5>
                      <p>LUCF</p>
                    </div>
                  </div>
                  <div>
                    <button className="header-top-right">&#x270E;</button>
                  </div>
                </div>
              </td>
            </tr>
          </React.Fragment>
        ))}
      </tbody>
    </table>
  );
}

export default EntriesTable;
