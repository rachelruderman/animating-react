import React, {useState} from 'react';
import {useSpring, animated} from 'react-spring';

// const AnimatedComponent = animated(componentName);

export const Toggle = () => {
    const [isToggled, setToggle] = useState(false);
    const fade                   = useSpring({
        // // opacity:    (isToggled) ? 1 : 0,
        // fontSize:   (isToggled) ? '2rem' : '20em',
        y:          (isToggled) ? 0 : -50,
        color:      (isToggled) ? 'black' : 'green',
     });

    const {y, color} = fade;

    return (
        <div>
            <animated.h1 style={{
                transform: y
                    .interpolate({
                    range:  [0, .25, .75, 1],
                    output: [0, -25, -50, -100, -50]
                    })
                    .interpolate(y => `translate3d(0, ${y}px, 0)`),
                color
            }}>Hello</animated.h1> 
            <button onClick={() => setToggle(!isToggled)}>Toggle</button>  
        </div>
    )
}