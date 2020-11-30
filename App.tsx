import StackNavigation from './src/navigation/StackNavigation';
import Provider from "./src/context/Provider"
import React from 'react';

const App: React.FC = () => {
  return (
    <Provider>
      <StackNavigation />
    </Provider>
  )
}
export default App