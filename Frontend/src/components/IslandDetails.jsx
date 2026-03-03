import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import Divider from '@mui/joy/Divider';

export default function IslandDetails ({selectedIsland}) {
    console.log(selectedIsland);

    const {id, name, country, description, transportation, accommodation, foodAndDrink, activities} = selectedIsland;

    const [activeTab, setActiveTab] = useState("transportation");
    
    return(
        <Card
            variant="outlined"
            size="lg"
            sx={{
                maxWidth: 1000,
                mx: "auto",
                mt: 4,
                p: 3
            }}
        >
            <CardContent>
            <Typography level="h3">{name}</Typography>
            <Typography level="body-sm">{country}</Typography>
            <Typography level="body-md">{description}</Typography>

            <div>
                <button onClick={() => setActiveTab("transportation")}>
                    Ulaşım
                </button>
            </div>


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
            </CardContent>
        </Card>
    )
}