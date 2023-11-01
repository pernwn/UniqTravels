import { Box, Stack, Typography } from "@mui/material";


export default function UserHead() {

    return (
        <Stack direction="row" spacing={2}
        sx={{
            display: "flex",
            justifyContent: "center",
            marginTop:"2em"
        }}
        >
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-evenly",
                    alignItems: "left",
                }}
            >
                <Typography variant="h6" lineHeight={.5}>Sara Marie</Typography>
                <Typography variant="subtitle2">Member since 2013</Typography>
            </Box>

            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-evenly",
                    alignItems: "left"
                }}
            >
                <Typography variant="h6" lineHeight={.5}>544 XP</Typography>
                <Typography variant="subtitle2">Points collected</Typography>
            </Box>

            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-evenly",
                    alignItems: "left"
                }}
            >
                <Typography variant="h6" lineHeight={.5}>No. 43</Typography>
                <Typography variant="subtitle2">Leaderboard</Typography>
            </Box>

        </Stack>
    )
}