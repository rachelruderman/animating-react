import React from 'react'
import {useGesture} from 'react-with-gesture';
import {animated, useTrail} from 'react-spring';

const items = [0.5, 0.3, 0.2, 0.7, 1];
const Boxes = () => {
    const trail = useTrail(items.length,
        {
            from:   {opacity: 0},
            to:     {opacity: 1}
        }
    )

    return (
        <div className='boxes-grid'>
            {trail.map(animation => (
                <animated.div className='box' style={animation}/>
         ))}
        
        </div>
    )
}

export default Boxes
