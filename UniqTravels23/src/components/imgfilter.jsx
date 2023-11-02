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
import { Image } from '@mui/icons-material';

import hamburg from "../assets/pictures/hamburg.jpg"
import kyoto from "../assets/pictures/kyoto.jpg"
import london from "../assets/pictures/london.jpg"
import santorini from "../assets/pictures/santorini.jpg";
import iceland from "../assets/pictures/iceland.jpg";
import bhutan from "../assets/pictures/bhutan.jpg";
import salvador from "../assets/pictures/salvador.jpg";
import lapland from "../assets/pictures/lapland.jpg";
import azores from "../assets/pictures/azores.jpg";


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
const images = [
    // billeder med tilhørende kategorier til filter funktion
    { id: 1, url: {hamburg}, title: 'Image 1', category: 'Luxury Travel' },
    { id: 2, url: {iceland}, title: 'Image 1', category:  'Educational Travel' },
    { id: 3, url: {bhutan}, title: 'Image 1', category:   'Medical Tourism'},
    { id: 4, url: {azores}, title: 'Image 1', category: 'Voluntqeer Travel', },
    { id: 5, url: {lapland}, title: 'Image 1', category:  'Honeymoon Travel' },
    { id: 6, url: {salvador}, title: 'Image 1', category:   'Pilgrimage Travel' },

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
