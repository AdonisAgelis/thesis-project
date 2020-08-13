import React, { useState } from 'react';
import { DnDItemTypes } from '../dndItemTypes';
import { useDrag } from 'react-dnd';

import '../styles/profile.css';
import { MDBIcon } from 'mdbreact';

const DnDIcons = (props) => {

    const [roleProp, setRoleProp] = useState(props);
    let dndProp = roleProp.role.toUpperCase();

    const [{ isDragging }, drag] = useDrag({
        item: { type: DnDItemTypes.ENTRANCE },
        collect: monitor => ({
            isDragging: !!monitor.isDragging(),
        })
    });

    const [{ isDraggingExit }, dragExit] = useDrag({
        item: { type: DnDItemTypes.EXIT },
        collect: monitor => ({
            isDraggingExit: !!monitor.isDragging(),
        })
    });

    if (roleProp.role === 'entrance') {
        return <div
            ref={drag} className='draggableIcons'>
            <MDBIcon icon="door-closed" />
        </div>
    } else if (roleProp.role === 'exit') {
        return <div
            ref={dragExit} className='draggableIcons'>
            <MDBIcon icon="door-open" />
        </div>
    } else if (roleProp.role === 'wall') {
        return <div
            className='draggableIcons'>
            <MDBIcon icon="door-open" />
        </div>
    } else if (roleProp.role === 'accessPoint') {
        return <div
            className='draggableIcons'>
            <MDBIcon icon="wifi" />
        </div>
    } else if (roleProp.role === 'exhibit') {
        return <div
            className='draggableIcons'>
            <MDBIcon icon="university" />
        </div>
    }
}

export default DnDIcons;