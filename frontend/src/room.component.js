import React, { forwardRef, useState, useRef, useImperativeHandle } from 'react';
import Square from './square.component';
import DnDIcons from './dndIcons.component';

const Room = (props) => {

    const [roomProp, setRoomProp] = useState(props);

    return (
        <div 
        style={{
            width: '100%',
            height: '100%'
          }}>
            {Square.renderSquare(0, 0, roomProp.itemPosition)}
            {Square.renderSquare(1, 0, roomProp.itemPosition)}
            {Square.renderSquare(2, 0, roomProp.itemPosition)}
        </div>
    )
}

export default Room;