import { Avatar, Card, CardContent, CardHeader, CardMedia, IconButton, MoreVertIcon, Typography } from "@mui/material";


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
                <MoreVertIcon />

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