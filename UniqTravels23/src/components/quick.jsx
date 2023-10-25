import { Button, Card, CardContent, Stack } from "@mui/material";


export default function QuickTools(props) {
    return (

        <Stack>
            <Card>
                <Button variant='filled'>
                    <CardContent
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
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