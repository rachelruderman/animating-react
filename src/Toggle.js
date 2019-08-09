import React, {useState} from 'react';
import {useTransition, animated} from 'react-spring';

// const AnimatedComponent = animated(componentName);

export const Toggle = () => {
    const [items, setItems] = useState([
        {letter: 'S', key: 1},
        {letter: 'D', key: 3},
        {letter: 'E', key: 4},
        {letter: 'F', key: 5},
        {letter: 'H', key: 6},
        {letter: 'I', key: 7},
    ]);

    const transition = useTransition(items, (item) => item.key, {
        from:   {opacity: 0},
        enter:  {opacity: 1}, // final state when it has entered
        leave:  {opacity: 0},
     });

    // Use transition for things you don't want to always be on the DOM
    
    return (
        <div style={{position: 'relative'}}>
            {transition.map( ({item, key, props}) => (
                <animated.h1 style={props} key={key}>
                    {item.letter}
                </animated.h1> 
            ))}
            <button onClick={() => setItems([{letter: 'S, key: 1'}])}>Toggle</button>  
        </div>
    )
}