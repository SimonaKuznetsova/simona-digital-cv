import { useState } from 'react';

import NavBar from './NavBar/NavBar';
import Content from './Content/Content';
import Background from './Background/Background';

import '../styles/App.scss';
import '../styles/Marquee.scss';

const ChildComponent = ({theme, setTheme}) => {

  const [active, setActive] = useState("about");

  const handleClick = (section) => {
    setActive(section);
  };
  return (
    <>
      <NavBar handleClick={handleClick} active={active} />
      <Content active={active} theme={theme} setTheme={setTheme}/>
    </>
  )
}

function App({theme, setTheme}) {
  // const [theme, setTheme] = useState("light");

  return (
    <div className="App" data-theme={theme}>
      {/* <Background theme={theme}/> */}
      <div className='gradients-bg'></div>
      <div className='grid-bg'></div>
      <div className='noise-bg'></div>

      <ChildComponent theme={theme} setTheme={setTheme}/>
    </div>
  );
}

export default App;
