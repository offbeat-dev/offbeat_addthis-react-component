import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import AddThis from './components/AddThisWrapper';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <AddThis
        url={
          '//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-641dbfc46f9d866e'
        }
        float={true}
        title={'Share'}
      />
    </div>
  );
}

export default App;
