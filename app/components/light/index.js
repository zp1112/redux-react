import React, { PropTypes, Component } from 'react'
import { render } from 'react-dom'
import classnames from 'classnames'
import './index.css'

const Light = (props) => {
        let color = props.light.color;
        return(
            <div className="traffic-light">
                <span className={`light ${color}`} />
            </div>
        )
}

// Light.propTypes = {
//     light: PropTypes.object.isRequired
// }

export default Light
