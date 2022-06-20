import { NavLink, Outlet } from "react-router-dom";
import { getChains } from "../Components/data";
import './Chains.css'

export default function Chains() {
    let chains = getChains();
    return (
      <div style={{ display: "flex" }}>
        <nav
          style={{
            borderRight: "solid 1px",
            padding: "1rem",
          }}
        >
          {chains.map((chain) => (
            <NavLink
            style={({ isActive }) => {
                return {
                  display: "block",
                  margin: "1rem 0",
                  color: isActive ? "red" : "blue",
                };
              }}
              to={`/Chains/${chain.number}`}
              key={chain.number}
            >
              {chain.name}
            </NavLink>
          ))}
        </nav>
        <Outlet />
      </div>
    );
}