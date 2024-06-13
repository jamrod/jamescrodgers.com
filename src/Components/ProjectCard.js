import React from 'react'

import '../App.css'

function ProjectCard(props) {
    const items = props.items

    return (
        <div className="flex-container-column centered">
        <a href={ items.link } className="proj-link"  target="blank" onMouseOver={ () => { props.show(items.id) }} onMouseOut={() => { props.hide( items.id) }}>
            <h2>
                { items.title }
            </h2>
            <div className="description" id={ items.id }>
                <p>{ items.description }.</p>
            </div>
            <img src={ items.image } className="link-pic" alt={items.alt} />
            <div className="flex-container-row centered">
                { items.badges.map(badge => (
                    <img src={ badge.image } className="icons" alt={ badge.alt } />
                ))}
            </div>
        </a>
        {items.githubRepo ? <a href={items.githubRepo} target="blank">Github Repo</a> : <span className="filler">&hearts;</span>}
        </div>
    )
}

export default ProjectCard