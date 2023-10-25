import { Button, Card, CardActions, CardContent, Stack } from "@mui/material";


export default function QuickTools(props) {
    return (

        <Stack direction="row">
            <Card>
                <Button variant='filled'

                >
                    <CardContent
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "space-evenly",

                            width:80,
                            height:100,
                            fontWeight: 600,
                            lineHeight: 1.3,
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