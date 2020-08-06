import React, { forwardRef, useState, useRef, useImperativeHandle } from 'react';
import Square from './square.component';
import DnDIcons from './dndIcons.component';

const renderSquare = (i, [itemX, itemY]) => {
    const x = i % 8;
    const y = Math.floor(i / 8);
    const isItemHere = x === itemX && y === itemY;
    const piece = isItemHere ? <DnDIcons /> : null

    return (
        <div key = {i} style = {{width: '12.5%', height: '12.5%'}}>
            <Square>{piece}</Square>
        </div>
    )
}

const Room = (props, { itemPosition }) => {

    const [roomProp, setRoomProp] = useState(props);

    const squares = [];
    for (let i = 0; i <64; i++) {
        squares.push(renderSquare(i, roomProp.itemPosition));
    }

    return (
        <div
            style={{
                width: '100%',
                height: '100%'
            }}>
            {roomProp.squares}
        </div>
    )
}

export default Room;