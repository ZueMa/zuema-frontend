import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class BackButton extends Component {
    constructor(props) {
        super(props);
        this.url = props.url;
    }
    render() {
        return (
            <div className="back_button">
                <Link to={'profile'}><i class="fa fa-angle-left" aria-hidden="true">BACK</i></Link>
            </div>
        )
    }
}

export default BackButton;