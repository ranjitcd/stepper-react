
import React from 'react';
import Stepper from './components/Stepper.tsx';


const App = () => {
  const steps = [
    {
      content: <div>This is Step 1 content</div>,
    },
    {
      content: <div>This is Step 2 content</div>,
    },
    {
      content: <div>This is Step 3 content</div>,
    },
  ];

  return (
    <div className="App">
      <Stepper steps={steps} />
    </div>
  );
};

export default App;
