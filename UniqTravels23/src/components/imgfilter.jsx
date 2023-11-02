
import { Grid, Card, CardContent, CardMedia, Typography, makeStyles } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    minHeight: '100%',
  },
  card: {
    width: 300,
    height: 300,
  },
  media: {
    height: '100%',
    width: '100%',
  },
}));

const ImageGallery = ({ images }) => {
  const classes = useStyles();

  return (
    <Grid container spacing={2} justifyContent="center">
      {images.map((image, index) => (
        <Grid item key={index}>
          <Card className={classes.card}>
            <CardMedia
              component="img"
              className={classes.media}
              image={image.src}
              title={image.title}
            />
            <CardContent className={classes.root}>
              <Typography variant="h6" component="div">
                {image.title}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {image.subheader}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default ImageGallery;
