import React, {useState, useRef} from 'react'
import {useGesture} from 'react-with-gesture';
import {animated, useTrail, useSpring, useChain} from 'react-spring';

const items = [0.5, 0.3, 0.2, 0.7, 1];
const Boxes = () => {

    const [on, toggle] = useState(false);

    const springRef = useRef();

    const {size} = useSpring({
        ref:    springRef,
        from:   {size:  '20%'},
        to:     {size:   on ? '100%' : '20%'},
    })
    const transitionRef = useRef();

    const trail = useTrail(items.length,
        {
            ref: transitionRef,
            from: {
                opacity:    0,
                transform:  'scale(0)'
            },
            to: {
                opacity:    on ? 1 : 0,
                transform:  on ? 'scale(1)' : 'scale(0)'
            }

        }
    )

    useChain(on ? [springRef, transitionRef] : [transitionRef, springRef])

    return (
        <div className='full-height'>
            <animated.div
                style={{width: size, height: size}} 
                className='boxes-grid-two' 
                onClick={() => toggle(!on)}>
                {trail.map(animation => (
                    <animated.div className='box-two' style={animation}/>
            ))}
            
            </animated.div>
        </div>

    )
}

export default Boxes
