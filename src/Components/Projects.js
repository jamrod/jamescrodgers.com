import React from 'react'
import '../App.css'
import { checkPath } from '../helpers'
import ProjectCard from './ProjectCard.js'
import projects from '../assets/projects.json'

function Projects(props) {

    const showDescription = (id) => {
        id = '#' + id
        const elem = document.querySelector(id)
        elem.classList.add("show")
    }
    const hideDescription = (id) => {
        id = '#' + id
        const elem = document.querySelector(id)
        elem.classList.remove("show")
    }


    return (
        <div className="flex-container-column centered full-size">
            {checkPath(props)}
            <div id="project-container" className="full-size">
                <div className="flex-container-row space" > {/*start row 1 */}

                    {projects.row1.map(project => (
                        <ProjectCard items={project} show={showDescription} hide={hideDescription}></ProjectCard>
                    ))}

                </div>{/*end row 1 */}

                <div className="flex-container-row space" >{/*start row 2 */}
                {projects.row2.map(project => (
                        <ProjectCard items={project} show={showDescription} hide={hideDescription}></ProjectCard>
                    ))}
                </div> {/*end row 2 */}
            </div>
        </div >

    )
}

export default Projects

