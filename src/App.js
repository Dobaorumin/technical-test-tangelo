import React, { useState } from "react";
import "./styles/app.css";

const { StatusRequest } = require("./grpc/ops_pb.js");
const { OpsClient } = require("./grpc/ops_grpc_web_pb.js");

var client = new OpsClient("https://gw.a9e.services:443");
var request = new StatusRequest();

const App = () => {
  const [dataFromServer, setDataFromServer] = useState({
    status: "",
    commit: "",
    version: "",
    ts: "",
  });

  const [error, setError] = useState(false);

  const getServiceData = () => {
    client.status(request, {}, (err, response) => {
      if (err) {
        setError(true);
        console.error(err);
        return;
      }
      setDataFromServer({
        ts: response.getTs().array,
        commit: response.getCommit(),
        version: response.getVersion(),
        status: "Ok",
      });
    });
  };

  const { commit, status, version, ts } = dataFromServer;

  return (
    <>
      <section className="main">
        {error && (
          <div>
            <p>Parece que algo ha salido mal... 😞</p>
          </div>
        )}
        <div className="prueba">
          <div className="content">
            <button className="main-button" onClick={getServiceData}>
              Check Status
            </button>
            <p>Status: {status}</p>
            <p>Commit: {commit}</p>
            <p>TS: {ts}</p>
            <p>Version: {version}</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default App;
