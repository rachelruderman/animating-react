import React from 'react'
import {useSpring, animated, config} from 'react-spring';

const Checkout = ({isOpen}) => {

    const {x}   = useSpring({
        x: isOpen ? 0 : 100,
        config: config.wobbly
    });

    const styleLeft     = {transform: x.interpolate(x => `translate3d(${x * -1}%, 0, 0)`)};
    const styleRight    = {transform: x.interpolate(x => `translate3d(${x}%, 0, 0)`)};

    //awesome solution to pointer events on wrappers
    const styleWrapper  = {pointerEvents: isOpen ? 'all' : 'none'};

    return (
        <div className='checkout' style={styleWrapper}>
            <animated.div className='checkout-left'  style={styleLeft}/>
            <animated.div className='checkout-right' style={styleRight}/>
        </div>
    )
}

export default Checkout
