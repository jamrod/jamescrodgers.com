import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import '../App.css'

//Hoist setActive function to App, sync local active state to App 
class Nav extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pages: { "Projects": "/Projects", "About": "/About" },
            active: this.props.active
        }
    }

    componentDidUpdate() {
        if (this.props.active !== this.state.active) {
            this.setState({ active: this.props.active })
        }

    }

    render() {
        let pagesArr = Object.keys(this.state.pages)
        return (
            <div className="flex-container-row nav">
                {pagesArr.map((page) => {
                    if (this.state.active === page) {
                        return <span className="nav-link active" key={page} onClick={(e) => { this.props.setActive(page, e) }}><Link to={this.state.pages[page]}>{page}</Link></span>
                    } else {
                        return <span className="nav-link" key={page} onClick={(e) => { this.props.setActive(page, e) }}><Link to={this.state.pages[page]}>{page}</Link></span>
                    }
                })}
            </div>
        )
    }

}

export default Nav