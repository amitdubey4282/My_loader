import React, { useState, useEffect } from 'react';
import Loader from './Loader';
import './App.css';
import Tree from "./logo.svg";

const App: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    // Simulate an API call or data loading
    setTimeout(() => {
      setLoading(false); // Set loading to false when the data is ready
    }, 5000); // Simulate a 5-second loading time
  }, []);

  const WithCircleVariant = () => {
    return (
      <div className='example-1'>
        <Loader isLoading={loading} animation="wave" variant='circle'>
          <img src={Tree} alt="tree" />
        </Loader>
      </div>
    )
  }

  const WithAnimationVariant = () => {
    return (
      <div className='example-2'>
        <Loader isLoading={loading} animation="wave">
          <div className='banner'>
            <h1>Demo For Skeleton </h1>
          </div>
          {/* <img src={Tree} height={500} alt="tree"/> */}
        </Loader>
      </div>
    )

  }

  const WithNoAnimation = () => {
    return (
      <div className='example-3'>
        <Loader isLoading={loading} variant="rectangle" animation="none">
          <p>This is some content loaded after the animation.</p>
        </Loader>
      </div>
    )
  }

  const WithNoHeight = () => {
    return (
      <div>
        <Loader isLoading={loading}>
          <div>Welcome to Skeleton Demo</div>
        </Loader>

      </div>
    )
  }
  return (
    <div className='container'>
      {/* Below Loader will be called with  variant as circle  */}

      <WithCircleVariant />

      {/* Below Loader will be Called with animation type as wave  */}


      <WithAnimationVariant />
      {/* Below Loader will be Called with no animation type */}

      <WithNoAnimation />

      {/* Below Animation will take the default heights and widths as we are not passing them */}
      <WithNoHeight />
    </div>
  );
};

export default App;
