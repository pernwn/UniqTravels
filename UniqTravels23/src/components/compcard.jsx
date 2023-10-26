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

export default function ComplexCard(props) {
return(
    <Card>
        <CardHeader
        avatar={ 
            <Avatar sx={{bgcolor: "info"}} aria-label="Destination">
                {props.label}
            </Avatar>
        }
        action={
            <IconButton aria-label="settings">
                <MoreVert />

            </IconButton>
        }
        >
                    {props.title}
                    {props.subheader}
        </CardHeader>
        <CardMedia
          component="img"
          height="200"
          image={props.image} 
        >
             
        </CardMedia>
        <CardContent>
            <Typography variant="body2" color="text.secondary">
               {props.body}
            </Typography>
        </CardContent>
        <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                <ShareIcon />
                </IconButton>
        </CardActions>
    </Card>


)
}