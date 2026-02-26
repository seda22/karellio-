import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import Grid from '@mui/joy/Grid';

export default function IslandCards({ destinations, onSelect, selectedIsland }) {

    return (
        <Grid container spacing={2} sx={{ 
            maxWidth: 1200,
            mx: "auto",
            px: 2,
            py: 4  
            }} >
            {destinations.map((destination) => {
                const isSelected = selectedIsland?.id === destination.id;
                return (   
                    <Grid xs={12} sm={6} md={4} key={destination.id}>
                    <Card
                    key={destination.id}
                    color={isSelected ? "primary" : "neutral"}
                    invertedColors={false}
                    orientation="vertical"
                    size="lg"
                    variant={isSelected ? "solid" : "outlined"}
                    onClick={() => onSelect(destination)} sx={{ cursor: "pointer", transition: "0.3s",height:"100%", "&:hover": { boxShadow: "lg"}}}>
                    
                    <CardContent>
                        <Typography level="h4">{destination.name}</Typography >
                        <Typography level="body-sm">{destination.country}</Typography>
                        <Typography level="body-md">{destination.description}</Typography>
                    </CardContent>
                    </Card>
                    </Grid>
                )
            })}
        </Grid>
    )
}

