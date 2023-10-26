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
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVert from '@mui/icons-material/MoreVert';

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
                <MoreVert />

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