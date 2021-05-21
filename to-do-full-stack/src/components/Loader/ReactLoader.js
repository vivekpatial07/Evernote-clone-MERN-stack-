import React from 'react'
import { Dimmer, Loader, Segment, } from 'semantic-ui-react'
import './ReactLoader.css'

const ReactLoader = () => (
  <Segment>
  <Dimmer active inverted>
    <Loader />
  </Dimmer>
  </Segment>
)

export default ReactLoader