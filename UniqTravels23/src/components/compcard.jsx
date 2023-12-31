//lavet af Rina

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVert from '@mui/icons-material/MoreVert';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';
import { MainBtn } from './cards';

export default function ComplexCard(props) {
    //Ved at bruge props kan vi overføre data eller egenskaber fra det, der kalder ComplexCard-komponenten, til ComplexCard-komponenten selv. 
    //Dette gør det muligt at tilpasse det generelle udseende og indhold i hvert kort.
    //Dette betyder at vi kan oprette flere kort med forskellige label, title, subheader, og image, uden at skulle skrive en separat komponent til hvert kort.


    const cardContentStyle = {
        maxHeight: '200px', // Sætter en maks højde for vores kort
        overflow: 'hidden', // Gemmer overflow væk
        textOverflow: 'ellipsis', // Tilføjer en ellipse til overflow

    };
    return (
        <Stack direction="row">
            <Card className="compcard"
            sx={{textAlign:"left", p:".4em"}}
            >
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: "info" }} aria-label="Destination">
                            {props.label}
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVert />

                        </IconButton>
                    }
                    title={props.title}
                    subheader={props.subheader}
                />
                <CardMedia
                    component="img"
                    image={props.image}
                    sx={{
                        height: 200,
                        minWidth: 290,
                        borderRadius: "4%",
                        marginBottom: 1.5,
                 

                    }}
                >

                </CardMedia>
                <CardContent sx={cardContentStyle}>
                    {/*Her bruger vi den const der blev defineret i starten 
           Den sørger for at når kortet har ramt sin max højde så bliver det overskydende tekst skåret fra. 
           Det sikrer at alle kort står lækkert og ensformigt med minimal forstyrrelse til brugeren  */}
                    <Typography variant="body2" color="text.secondary"
                    >
                        {props.body}
                    </Typography>

                    <CardMedia
                        component="img"
                        height="150"
                        image={props.image}
                    >

                    </CardMedia>
                </CardContent>

                    <CardActions disableSpacing>
                        <IconButton aria-label="add to favorites">
                            <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="share">
                            <ShareIcon />
                        </IconButton>
                        <MainBtn name="Read more" page="/destination" />

                    </CardActions>
  
            </Card>
        </Stack>
    )
}
