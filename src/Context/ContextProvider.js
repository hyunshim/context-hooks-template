import React, { useState } from 'react';
import Context from './Context';
const ContextProvider = ({ children }) => {
  const [example, setExample] = useState('Hello')
  const context = {
    example,
    setExample,
    testValue: "testValue",
  };
  console.log("!!!!!!!!!!!!", example)
  return (
    <Context.Provider value={ context }> 
      {children}
    </Context.Provider>
  );
}
export default ContextProvider;