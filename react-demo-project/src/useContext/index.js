import React, { createContext, useContext } from 'react';
const ContextValue = createContext({ bg: 'blue', color: 'red' });
export default function ProviderCompoment({ children }) {
  return (
    <ContextValue.Provider value={{ bg: 'blue', color: 'yellow' }}>
      {children}
    </ContextValue.Provider>
  );
}
export function ConsumerComponent() {
  const { bg, color } = useContext(ContextValue);
  return <div style={{ background: bg, color: color }}>context child</div>;
}
