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
                           ikon her

                        </CardContent>
                        <CardActions>
                            <Button variant='h3'>{props.name}</Button>
                        </CardActions>
                    </Card>




                </Stack>
        
    )

}