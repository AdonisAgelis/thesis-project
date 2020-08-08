import React, { useState } from 'react';
import { DnDItemTypes } from './dndItemTypes';
import { useDrag } from 'react-dnd';

import './profile.css';
import { MDBIcon } from 'mdbreact';

const DnDIcons = (props) => {

    const [roleProp, setRoleProp] = useState(props);
    let dndProp = roleProp.role.toUpperCase();

    const [{ isDragging }, drag] = useDrag({
        item: { type: DnDItemTypes.ENTRANCE, type: DnDItemTypes.EXIT, type: DnDItemTypes.WALL, type: DnDItemTypes.ACCESSPOINT, type: DnDItemTypes.EXHIBIT },
        collect: monitor => ({
            isDragging: !!monitor.isDragging(),
        })
    });

    if (roleProp.role === 'entrance') {
        return <div
            ref={drag} className='draggableIcons'>
            <MDBIcon icon="door-closed" />
        </div>
    } else if (roleProp.role === 'exit') {
        return <div
            ref={drag} className='draggableIcons'>
            <MDBIcon icon="door-open" />
        </div>
    } else if (roleProp.role === 'wall') {
        return <div
            ref={drag} className='draggableIcons'>
            <MDBIcon icon="door-open" />
        </div>
    } else if (roleProp.role === 'accessPoint') {
        return <div
            ref={drag} className='draggableIcons'>
            <MDBIcon icon="wifi" />
        </div>
    } else if (roleProp.role === 'exhibit') {
        return <div
            ref={drag} className='draggableIcons'>
            <MDBIcon icon="university" />
        </div>
    }
}

export default DnDIcons;