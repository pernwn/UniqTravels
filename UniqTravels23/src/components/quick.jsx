import { Button, Card, CardActions, CardContent, Stack } from "@mui/material";


export default function QuickTools(props){
    return(
        
                        <Stack
                    sx={{
                        display:"flex",
                        flexDirection:"row",
                        alignItems:"center",
                        gap:2,
                        marginLeft:2,
                        marginRight:2,
                 


                    }}

                >
                    <Card
                    sx={{
                        width:"10em",
                        height:"8em",


                    }}
                    
                    >
                        <CardContent>
                        {/*<IconComponent /> {/* Replace with your icon component}*/}
            
                        </CardContent>
                        <CardActions>
                            <Button variant='outlined'>{props.name}</Button>
                        </CardActions>
                    </Card>




                </Stack>
        
    )

}