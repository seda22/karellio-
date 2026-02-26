//import { Card, CardContent, Typography } from "@mui/material";

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

