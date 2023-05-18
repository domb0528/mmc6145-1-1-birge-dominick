import { Route, Routes } from 'react-router-dom'

const Project = (props) => {
    return(
       
            <li>
                <h2>{props.name}</h2>
                <p>{props.description}</p>
                <a class="button" href="#">Check it out</a>
            </li>
       
    )
};

export default Project;