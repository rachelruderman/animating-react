import React from 'react'
import {useGesture} from 'react-with-gesture';
import {animated, useSpring} from 'react-spring';

const Gesture = () => {
    const [{x}, set] = useSpring( () => ({x: 0}) )

    const bind = useGesture( ({down, delta}) => {
        set({x: down ? delta[0] : 0})
    })

    return (
        <animated.div 
            style={{
                transform: x.interpolate( (x) => `translate3d(${x}px,0,0)`)
            }}
            {...bind()} 
            className='box'/>

    )
}

export default Gesture;
