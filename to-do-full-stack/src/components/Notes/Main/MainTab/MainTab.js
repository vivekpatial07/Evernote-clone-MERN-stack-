import React from 'react'
import {Tab} from 'semantic-ui-react'
import './MainTab.css'

const MainTab = ({
  firstChild,
  secondChild,
  firstTabName,
  secondTabName
}) => {
  const panes = [
    {
      menuItem: firstTabName,
      render: () => <Tab.Pane attached={false}>{firstChild}</Tab.Pane>
    },
    {
      menuItem: secondTabName,
      render: () => <Tab.Pane attached={false}>{secondChild}</Tab.Pane>
    }
  ]

  return (
    <div className="tab">
      <Tab panes={panes}/>
    </div>
  )
}

export default MainTab
