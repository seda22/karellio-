import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';

export default function IslandCards ({destinations, onSelect, selectedIsland}){

    return(
        <div className="card-grid">
            {destinations.map((destination) => {
                const isSelected = selectedIsland?.id === destination.id;
                return(
                <div key={destination.id} className={`island-card ${isSelected ? "selected" : ""}`} onClick={ () => {onSelect(destination)}}>
                    <h3>{destination.name}</h3>
                    <span>{destination.country}</span>
                    <p>{destination.description}</p>
                </div>)})}
        </div>
    )
}

