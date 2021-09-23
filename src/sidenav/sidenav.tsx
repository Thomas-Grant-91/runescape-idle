import React from 'react';
import { Link } from 'react-router-dom';

 function SideNav() {
  return (
      <>
      <div className="w-2/12">
        <nav>
          <ul>
            <li>
              <Link to="/mining"> Mining </Link>
            </li>
            <li>
              <Link to="/woodcutting"> Woodcutting </Link>
            </li>
          </ul>
        </nav>
      </div>
      </>
  );
}

export default SideNav;