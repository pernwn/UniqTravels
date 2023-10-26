import { Avatar, Card, CardContent, CardHeader, CardMedia, IconButton, Typography } from "@mui/material";
import { MoreVert } from "@mui/icons-material"; //Note; tror det er bedst at importere ikoner hver for sig, læste noget om at det godt kan ende med at blive kompliceret hvis man importere i 1 branch

export default function ComplexCard(props) {
return(
    <Card>
        <CardHeader
        avatar={ 
            <Avatar sx={{bgcolor: "info"}} aria-label="London">
                L
            </Avatar>
        }
        action={
            <IconButton aria-label="settings">
                <MoreVert />

            </IconButton>
        }
        title="British Airways to London"
        subheader="September 16, 2024"
        />
        <CardMedia 
        component="img"
        height="200"
        image="/src/assets/pictures/logoplaceholder.png"
        alt="London trip"
        />
        <CardContent>
            <Typography variant="body2" color="text.secondary">
                London is nice, London is cool, everyone wants to go to London. You want to be cool like us dont you? Come to London today!
            </Typography>
        </CardContent>





    </Card>


)
}