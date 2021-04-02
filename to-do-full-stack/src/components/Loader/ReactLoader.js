import React from 'react'
import { Dimmer, Loader, Segment, } from 'semantic-ui-react'

const ReactLoader = () => (
    <Segment>

    <Dimmer active>
      <Loader />
    </Dimmer>
    </Segment>
)

export default ReactLoader