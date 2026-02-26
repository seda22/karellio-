import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';

export default function IslandCards({ destinations, onSelect, selectedIsland }) {

    return (
        <div className="card-grid">
            {destinations.map((destination) => {
                const isSelected = selectedIsland?.id === destination.id;
                return (
                    <Card
                    key={destination.id}
                    color={isSelected ? "primary" : "neutral"}
                    invertedColors={false}
                    orientation="vertical"
                    size="lg"
                    variant={isSelected ? "solid" : "outlined"}
                    onClick={() => onSelect(destination)} sx={{ cursor: "pointer", transition: "0.3s", "&:hover": { boxShadow: "lg"}}}>
                    
                    <CardContent>
                        <Typography level="h4">{destination.name}</Typography >
                        <Typography level="body-sm">{destination.country}</Typography>
                        <Typography level="body-md">{destination.description}</Typography>
                    </CardContent>
                    </Card>
                )
            })}
        </div>
    )
}

