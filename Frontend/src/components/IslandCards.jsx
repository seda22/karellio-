export default function IslandCards ({destinations, onSelect}){

    return(
        <div className="card-grid">
            {destinations.map(({id, name, country, description}) =>
                <div key={id} className="island-card" onClick={ () => {onSelect({id, name, country, description})}}>
                    <h3>{name}</h3>
                    <span>{country}</span>
                    <p>{description}</p>
                </div>)}
        </div>
    )
}