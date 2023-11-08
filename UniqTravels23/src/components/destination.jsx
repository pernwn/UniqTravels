//lavet af Rina

import { CssBaseline, ThemeProvider } from "@mui/material"
import { customTheme } from "../themes/themes"
import { useTheme } from "@emotion/react";
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { /*IconButtonProps*/ } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';


import iceland from "../assets/pictures/iceland.webp";
import BackBtn from "./backbtn";
import { useState } from "react";

const ExpandMore = styled((props) => {
const { expand, ...other } = props;
return <IconButton {...other} />;
})(({ theme, expand }) => ({
transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
marginLeft: 'auto',
transition: theme.transitions.create('transform', {
duration: theme.transitions.duration.shortest,
}),
}));



export default function Destination(){
const [expanded, setExpanded] = useState(false);

const handleExpandClick = () => {
setExpanded(!expanded);
};
const outerTheme = useTheme();
return(
<ThemeProvider theme={customTheme(outerTheme)}>
<CssBaseline enableColorScheme />

    <section className='hPic'>{/* Denne section er stylet magen til den på Homepage for at der er sammenhæng i siden*/}
    <BackBtn />
          <Typography variant="h2" 
          sx={{ 
          color: customTheme => customTheme.palette.background.paper, 
          lineHeight: 8,  
          textAlign:'center'
          }}>
          The Beauty of Iceland
          </Typography>


    </section>

      <Card sx={{ margin:3 }}>
      <CardHeader
      avatar={
      <Avatar sx={{ bgcolor: red[500] }} aria-label="country">
      ICE
      </Avatar>
      }
      action={
      <IconButton aria-label="settings">
      <MoreVertIcon />
      </IconButton>
      }
      title="Iceland"
      subheader="Stunning natural attractions"
      />
      <CardMedia
      component="img"
      height="194"
      image={iceland}
      alt="Iceland"
      />
<CardContent>
    <Typography variant="body2" color="text.secondary">
    Iceland is the ultimate adventure playground for those seeking a taste of the extraordinary! With its dramatic landscapes, steaming geysers, epic waterfalls, and the enchanting Northern Lights, Iceland is where the impossible becomes possible. Dive into geothermal pools, traverse glaciers, and roam under the midnight sun. Experience a world unlike any other, where every corner reveals a new wonder. Iceland is where ordinary vacations become legendary adventures!
    Iceland, known as the Land of Fire and Ice, is a unique and captivating destination for travelers. Before you embark on your journey, there are several key aspects to consider:
    </Typography>
</CardContent>
<CardActions disableSpacing>
<IconButton aria-label="add to favorites">
<FavoriteIcon />
</IconButton>
<IconButton aria-label="share">
<ShareIcon />
</IconButton>
    <ExpandMore
    expand={expanded}
    onClick={handleExpandClick}
    aria-expanded={expanded}
    aria-label="show more"
    >
    <ExpandMoreIcon />
    </ExpandMore>
</CardActions>
<Collapse in={expanded} timeout="auto" unmountOnExit>
<CardContent>
    <Typography paragraph> 1.1 Choosing the Right Time to Visit:</Typography> {/*evt lave numerede punkter som <li> i en <ul> */}
    <Typography paragraph>

    Iceland offers different experiences throughout the year. Summer, from June to August, is ideal for exploring the lush landscapes, hiking, and enjoying extended daylight hours. Winter, from November to March, is perfect for witnessing the Northern Lights, but be prepared for shorter days and colder temperatures. Spring and autumn offer a balance between these extremes.

    1.2 Duration of Your Stay:
    Determine how long you plan to stay in Iceland. A typical trip can range from a long weekend to a couple of weeks. The duration of your stay will influence your itinerary and the number of places you can explore.

    1.3 Budget Considerations:
    Iceland is known for its high cost of living, so it&apos;s essential to set a budget that aligns with your travel goals. Be prepared for higher prices on accommodations, dining, and activities.

    </Typography>
    <Typography paragraph> Section 2: Must-See Destinations in Iceland</Typography>
    <Typography paragraph>


    Iceland boasts a variety of stunning natural attractions that you shouldn&apos;t miss. Here are some of the must-see destinations:

    2.1 Reykjavik:
    Start your journey in the capital city, Reykjavik. Explore its vibrant arts scene, unique architecture, and soak in the Blue Lagoon, a geothermal spa located nearby.

    2.2 The Golden Circle:
    The Golden Circle is a popular tourist route that includes three primary stops: Thingvellir National Park, Geysir geothermal area, and Gullfoss waterfall. Each destination offers breathtaking natural wonders.

    2.3 The South Coast:
    Travel along Iceland&apos;s south coast to witness spectacular waterfalls like Seljalandsfoss and Skogafoss, as well as the black sand beaches of Reynisfjara. Don&apos;t forget to visit Vatnajokull National Park, home to Europe&apos;s largest glacier.

    2.4 The Ring Road (Route 1):
    For a comprehensive Icelandic experience, consider driving the Ring Road. This route encircles the entire island, allowing you to explore diverse landscapes, quaint villages, and more remote attractions.
    </Typography>
    <Typography paragraph>          Section 3: Practical Tips for Traveling in Iceland</Typography>
    <Typography paragraph>


    3.1 Packing Essentials:
    Pack clothing suitable for the season you&apos;re visiting, including waterproof and insulated gear. A good camera is a must for capturing the stunning landscapes.

    3.2 Accommodations:
    Iceland offers a range of accommodations, from hostels and guesthouses to luxury hotels and unique stays like geodesic domes and ice hotels. Be sure to book in advance, especially during the peak tourist season.

    3.3 Safety and Respect:
    Iceland&apos;s natural beauty is delicate, so always follow the Leave No Trace principles to protect the environment. Additionally, stay safe by checking the weather, road conditions, and respecting local regulations.

    3.4 Currency and Payment:
    Iceland uses the Icelandic Krona (ISK), and while credit cards are widely accepted, it&apos;s advisable to carry some cash for emergencies, especially in more remote areas.
    </Typography>
    <Typography>
    Now that you have a basic introduction to traveling to Iceland, you can start planning your adventure and exploring this remarkable country. Enjoy your journey in the land of glaciers, volcanoes, and endless natural beauty!
    </Typography>
</CardContent>
</Collapse>
</Card>

</ThemeProvider>

)
}

