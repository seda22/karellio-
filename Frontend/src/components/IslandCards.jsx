export default function IslandCards ({destinations, onSelect, selectedIsland}){

    return(
        <div className="card-grid">
            {destinations.map(({id, name, country, description}) => {
                const isSelected = selectedIsland?.id === id;
                return(
                <div key={id} className={`island-card ${isSelected ? "selected" : ""}`} onClick={ () => {onSelect({id, name, country, description})}}>
                    <h3>{name}</h3>
                    <span>{country}</span>
                    <p>{description}</p>
                </div>)})}
        </div>
    )
}