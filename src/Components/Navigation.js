import { NavLink } from 'react-router-dom';

const Navigation = () => (
    <nav>
      <ul>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/Chains'>Chains</NavLink></li>
        <li><NavLink to='/Validators'>Validators</NavLink></li>
      </ul>
    </nav>
  );

  export default Navigation;