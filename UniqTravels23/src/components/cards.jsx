import { Button, Card, CardContent, Stack } from "@mui/material";

//Kort komponent som genbruges
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

                            width:80,
                            height:90,
                            fontWeight: 600,
                            lineHeight: 1.15,
                            borderRadius:"10%"
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

export function ScrollCards(props){
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

                            width:110,
                            height:100,
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