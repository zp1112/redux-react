import React, { PropTypes, Component } from 'react'
import { render } from 'react-dom'
import classnames from 'classnames'
import './index.css'

const Counter = (props) => {
        let count = props.counter;
        return(
            <div className="counter">
                {count}
            </div>
        )
}

// Light.propTypes = {
//     light: PropTypes.object.isRequired
// }

export default Counter
