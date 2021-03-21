import React from 'react';
import TabButton from './TabButton';
import { gql, useMutation } from '@apollo/client';

const Tabs = ({ children }) => {
  const [selectedTab, setSelectedTab] = React.useState(0);

  let child = React.Children.toArray(children);

  return (
    <>
      <div id='criteria-bar'>
        <ul id='criteria-buttons'>
          {child.map((item, index) => (
            <TabButton
              key={index}
              title={item.props.title}
              index={index}
              setSelectedTab={setSelectedTab}
            />
          ))}
        </ul>
      </div>
      <div id='tab-content'>{children[selectedTab]}</div>
    </>
  );
};

export default Tabs;
