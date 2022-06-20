import React from 'react';
import '../App.css';
import { Outlet } from "react-router-dom";
import Navigation from './Navigation'


export default function App() {
  return (
    <div>
      <Navigation />
      <h1>Transparency in Cosmos</h1>
      <Outlet />
      <p></p>
    </div>
  );
}
