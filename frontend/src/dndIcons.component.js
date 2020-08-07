import React, { useState } from 'react';

import './profile.css';
import {MDBIcon} from 'mdbreact';

const DnDIcons = (props) => {

    const [roleProp, setRoleProp] = useState(props);
    
    if (roleProp.role === 'entrance') {
        return <MDBIcon icon="door-open" />
    } else if (roleProp.role === 'exit') {
        return <MDBIcon icon="door-closed" />
    } else if (roleProp.role === 'verticalWall') {
        return <MDBIcon icon="door-open" />
    } else if (roleProp.role === 'horizontalWall') {
        return <MDBIcon icon="door-open" />
    } else if (roleProp.role === 'accessPoint') {
        return <MDBIcon icon="door-open" />
    } else if (roleProp.role === 'exhibit') {
        return <MDBIcon icon="door-open" />
    }
}

export default DnDIcons;