import Draggable from 'react-draggable'; // The default
import {DraggableCore} from 'react-draggable'; // <DraggableCore>
import Draggable, {DraggableCore} from 'react-draggable'; // Both at the same time


export default function Sample() {

    return (
        <Draggable>
        <div>
          <div>This readme is really dragging on...</div>
        </div>
      </Draggable>
    )
  }
