export default function IslandDetails ({selectedIsland}) {
    console.log(selectedIsland);

    const {id, name, country, description, transportation, accommodation, foodAndDrink, activities} = selectedIsland;
    
    return(
        <div className="island-details">
            <h2>{name}</h2>
            <span>{country}</span>
            <p>{description}</p>

            <h3>Ulaşım</h3>
            <ul>
                {transportation.map((item) => {
                    return(
                    <li key={item.type}>
                        <strong>{item.type}:</strong> 
                        <span>{item.description}</span>
                    </li>
                    )
                })}
            </ul>

            <h3>Konaklama</h3>
            <ul>
                {accommodation.map((item) => {
                    return(
                    <li key={item.name}>
                        <strong>{item.name}</strong>
                        <span>{item.type}</span>
                        <p>{item.description}</p>
                    </li>
                )   
                }
                )}
            </ul>
            
            <h3>Yeme&İçme</h3>
            <ul>
                {foodAndDrink.map((item) => {
                    return(
                    <li key={item.name}>
                        <strong>{item.name}</strong>
                        <span>{item.type}</span>
                        <p>{item.description}</p>
                    </li>
                )   
                }
                )}
            </ul>

            <h3>Aktiviteler</h3>
            <ul>
                {activities.map((item) => {
                    return(
                    <li key={item.name}>
                        <strong>{item.name}</strong>
                        <p>{item.description}</p>
                    </li>
                )   
                }
                )}
            </ul>

        </div>
    )
}