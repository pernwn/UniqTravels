import React, { useState } from 'react';
import {
  ThemeProvider,
  CssBaseline,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
  Typography,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { customTheme } from '../themes/themes';


const travelCategories = [
  'Luxury Travel',
  'Backpacking',
  'Road Trips',
  'Volunteer Travel',
  'Educational Travel',
  'Medical Tourism',
  'Religious Tourism',
  'Pilgrimage Travel',
  'Honeymoon Travel',
];

const TravelFilter = () => {
  const outerTheme = useTheme();
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <ThemeProvider theme={customTheme(outerTheme)}>
      <CssBaseline enableColorScheme />
      <FormControl fullWidth>
        <InputLabel id="category-label">Select Travel Category</InputLabel>
        <Select
          labelId="category-label"
          id="category-select"
          value={selectedCategory}
          label="Select Travel Category"
          onChange={handleCategoryChange}
        >
          <MenuItem value="">All Categories</MenuItem>
          {travelCategories.map((category) => (
            <MenuItem key={category} value={category}>
              {category}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* Here, you can map through your images and display them based on the selected category */}
      <Grid container spacing={2}>
        {/* Replace 'imageURL' with the actual URLs of your images */}
        {images.map((image) => (
          <Grid item xs={12} sm={6} md={4} key={image.id}>
            {/* Assuming you have an 'Image' component to display images */}
            <Image src={image.url} alt={image.title} />
            <Typography variant="subtitle1">{image.title}</Typography>
          </Grid>
        ))}
      </Grid>
    </ThemeProvider>
  );
};

export default TravelFilter;
