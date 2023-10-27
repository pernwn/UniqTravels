import { Button, Card, CardActionArea, CardContent, CardMedia, Stack, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";



//Kort komponent som genbruges på flere sider vha props
export function QuickTools(props) {
    return (
        <Stack direction="row">
            <Card elevation={4}>
                <Button variant='filled'

                >
                    <CardContent
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "space-evenly",

                            width: 80,
                            height: 90,
                            fontWeight: 600,
                            lineHeight: 1.15,
                        }}
                    >
                        {props.icon}
                        {props.name}

                    </CardContent>

                </Button>
            </Card>
        </Stack>

    )

}

export function ScrollCards(props) {
    return (

        <Stack direction="row">
            <Card elevation={4} sx={{ maxWidth: 150 }}>

                <CardActionArea>
                    <CardMedia className="dealsPic"
                        component="img"
                        image={props.image} 
                        sx={{
                            height: 50,
                        }}
                    >
                    </CardMedia>

                    <CardContent
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "space-evenly",
                            textAlign:"center",

                            width: 150,
                            height: 100,
                            
                        }}
                    >

                        <Typography gutterBottom variant="body1" component="div" color="background.default">
                            {props.name}
                        </Typography>
                    </CardContent>

                </CardActionArea>
            </Card>
        </Stack>

    )
}

export function MainBtn(props){
    return(
            <Button variant="filled"
                component={NavLink}
                to={props.page}
           
                
                sx={{
                    color: customTheme => customTheme.palette.background.paper,
                    backgroundColor: customTheme => customTheme.palette.secondary.main,
                    width:"80%"
                }}
            >
                <Typography variant="button">{props.name}</Typography>
            </Button>
  

    )
}