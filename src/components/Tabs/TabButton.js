import React, { useCallback } from 'react';

const TabButton = ({ title, setSelectedTab, index }) => {
  const onClick = useCallback(() => {
    setSelectedTab(index);
  }, [setSelectedTab, index]);

  return (
    <li>
      <button onClick={onClick}>{title}</button>
    </li>
  );
};

export default TabButton;
