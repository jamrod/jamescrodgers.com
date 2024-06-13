import React from 'react'

import '../App.css'

function ProjectCard(props) {
    const items = props.items
    const showDescription = props.showDescription
    const hideDescription = props.hideDescription

    return (
        <a href={ items.link } className="proj-link"  target="blank" onMouseOver={function (e) { showDescription(e, items.id) }} onMouseOut={function (e) { hideDescription(e, items.id) }}>
            <h2>
                { items.title }
            </h2>
            <div className="description" id={ items.id }>
                <p>{ items.description }.</p>
            </div>
            <img src={ items.image } className="link-pic" alt={items.alt} />
            <div className="flex-container-row centered">
                { items.badges.map(badge => {
                    <img src={ badge.image } className="icons" alt={ badge.alt } />
                })}
            </div>

        </a>
    )
}

export default ProjectCard