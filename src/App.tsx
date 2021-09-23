import React, { useContext, useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Headers from './header/header';
import SideNav from './sidenav/sidenav';
import Mining from './mining/mining';
import Woodcutting from './woodcutting/woodcutting';

export const ThemeContext = React.createContext(false);
function App() {
  const [woodCuttingLevel] = useState(0);
  const [miningLevel] = useState(0);
  useEffect(() => {

  })

  // const toggleDarkMode = () => {
  //   setswitchButtonValues(switchButtonValues + 1);
  //   theme = !theme;
  //   window.console.log('did i click');
  // }
  return (
    <ThemeContext.Provider value={true}>
    <Router>
      <Headers name="ThomasIdle"/>
      <Switch>
        <div className="flex">
          <SideNav />
          <div className="w-9/12">
          <Route path="/mining">     
           <Mining />
          </Route>
          <Route path="/woodcutting">     
           <Woodcutting />
          </Route>
          </div>
        </div>
      </Switch>
    </Router>
    </ThemeContext.Provider>
  );
}

export default App;
