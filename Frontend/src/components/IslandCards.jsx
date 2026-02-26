export default function IslandCards (props){

    return(
        <div key={id} className="island-card">
            <h3>{name}</h3>
            <span>{country}</span>
            <p>{description}</p>
        </div>

    )
}