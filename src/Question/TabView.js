import React, { useState } from 'react';
import { Tabs, Tab, OverlayTrigger, Tooltip } from 'react-bootstrap';
import '../tab.css'
const tabsView = (props) => {
  const tabArr = [
    {
      title: 'Technology',
      category: 'Technology Section',
      disabled: false,
      isSelected: true
    },
    {
      title: 'Process',
      category: 'Process Section',
      disabled: true,
      isSelected: false
    },
    {
      title: 'People',
      category: 'People Section',
      disabled: true,
      isSelected: false
    },
    {
      title: 'Culture',
      category: 'Culture Section',
      disabled: true,
      isSelected: false
    }
  ];

  const sectionArr = [];
  tabArr.forEach((tab, i) => {
    props.visitedCategories.indexOf(tab.category) === -1 ? tab.disabled = true : tab.disabled = false;
    tab.category === props.selCategory ? tab.isSelected = true : tab.isSelected = false;
    tab.class = tab.isSelected ? 'tabSelected' : 'tabDisabled';
    sectionArr.push(
      <Tab eventKey={tab.category} className = 'tooltip' title={tab.title} disabled={tab.disabled} key={tab.title} style={{ border: !tab.isSelected ? 0 : null, borderBottom: tab.isSelected ? 0 : 1, pointerEvents: tab.disabled && 'none' }}>
        <span className="tooltiptext">Tooltip text</span>
      </Tab>
    )
  });
  let [key, setKey] = useState('home');
  return (
    <Tabs id="uncontrolled-tab-example" activeKey={props.selCategory} className='nav nav-tabs nav-justified' onSelect={k => {
      props.changeSection(k);
      return setKey(k);
    }
    }>
      {sectionArr}
    </Tabs>
  )
};

export default tabsView;
