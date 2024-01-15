export default function Project(props){
    return (
 <ul>
    <h2>{props.title}</h2>
    <p>{props.description}</p>
    <a  class="button" href={props.link} target="blank">Click Here</a>
    </ul>
    )
}