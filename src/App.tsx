import "./App.css";
import { createContext } from "react";
import ClientDetails from "./components/ClientDetails";
import ClientsWrapper from "./components/Clients";
import Sidebar from "./components/layout/Sidebar";
import React from "react";

export const ClientContext = createContext({
  client: 0,
  setClient: (val: number) => {},
});

function App() {
  const [client, setClient] = React.useState(0);
  return (
    <ClientContext.Provider value={{ client: client, setClient }}>
      <div className="main-wrapper">
        <Sidebar />
        <ClientsWrapper />
        <ClientDetails />
      </div>
    </ClientContext.Provider>
  );
}

export default App;
