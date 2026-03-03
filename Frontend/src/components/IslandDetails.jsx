import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import Divider from '@mui/joy/Divider';
import {useState} from "react"

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
                <button onClick={() => setActiveTab("accommodation")}>
                    Konaklama
                </button>
                <button onClick={() => setActiveTab("food")}>
                    Yeme & İçme
                </button>
                <button onClick={() => setActiveTab("activities")}>
                    Aktiviteler
                </button>
            </div>


            {activeTab === "transportation" && (
            <ul>
                {transportation.map((item) => (
                    <li key={item.type}>
                        <strong>{item.type}:</strong> 
                        <span>{item.description}</span>
                    </li>
                    )
                )}
            </ul>)}

            {activeTab === "accommodation" && (
            <ul>
                {accommodation.map((item) => (
                    <li key={item.name}>
                        <strong>{item.name}</strong>
                        <span>{item.type}</span>
                        <p>{item.description}</p>
                    </li>
                )   
            )}
            </ul>
            )}

            
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