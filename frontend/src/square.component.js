import React, { useState, forwardRef, useRef, useImperativeHandle } from 'react'
import DnDIcons from './dndIcons.component';

const Square = (props) => {

    const [itemProp, setItemProp] = useState(props);
    

    const renderSquare = (x, y, [itemPosX, itemPosY]) => {
        const isItemHere = itemPosX === x && itemPosY === y;
        const piece = isItemHere ? <DnDIcons role = 'entrance' /> : null;

        return <Square>{piece}</Square>
    }

    const fill = 'black';
    return <div style={{ backgroundColor: fill,
                       width: '100%',
                       height: '100%'
                    }}>
                    {itemProp.children}
            </div>
}

export default Square;