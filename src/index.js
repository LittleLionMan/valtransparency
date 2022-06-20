import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import { 
  BrowserRouter,
  Routes,
  Route,
 } from "react-router-dom";
 import Validators from './Routes/Validators';
 import Chains from './Routes/Chains'
 import Chain from './Routes/Chain'

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <BrowserRouter>
    <Routes>
        <Route path="/" element={<App />}>
          <Route
              index
              element={
                <main>
                  <p>mission briefing</p>
                </main>
              }
          />
          <Route path="chains" element={<Chains />}>
            <Route
              index
              element={
                <main>
                  <p>Select a chain</p>
                </main>
              }
            />
            <Route path=":chainId" element={<Chain />} />
          </Route>
          <Route path="validators" element={<Validators />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
              </main>
            }
          />
        </Route>
    </Routes>
  </BrowserRouter>
);
