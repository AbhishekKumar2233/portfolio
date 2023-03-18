import React from "react"
import "./Project.css"
import ProjectSlider from "./ProjectSlider"

export default function Project(){
    return(
        <div className="project-div">
            <h1 className="heading">Projects</h1>
            <ProjectSlider />
            <div className="git-div">
            <p>
            You can find my other projects on my GitHub
            </p>
            <br />
            <a className="github-btn" href="https://github.com/AbhishekKumar2233/" target="_blank">GitHub</a>
            </div>
        </div>
    )
}