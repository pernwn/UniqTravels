import { useState } from 'react';
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

import hamburg from "../assets/pictures/hamburg.jpg"
import iceland from "../assets/pictures/iceland.jpg"
import bhutan from "../assets/pictures/bhutan.jpg"
import azores from "../assets/pictures/azores.jpg";
import lapland from "../assets/pictures/lapland.jpg";
import salvador from "../assets/pictures/salvador.jpg";
import beach from "../assets/pictures/beachy.jpeg"

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
  { id: 1, url: hamburg, title: 'Hamburg', category: 'Luxury Travel' },
  { id: 2, url: iceland, title: 'Iceland', category: 'Educational Travel' },
  { id: 3, url: bhutan, title: 'Bhutan', category: 'Medical Tourism' },
  { id: 4, url: azores, title: 'Azores', category: 'Volunteer Travel' },
  { id: 5, url: lapland, title: 'Lapland', category: 'Honeymoon Travel' },
  { id: 6, url: salvador, title: 'Salvador', category: 'Pilgrimage Travel' },
  { id: 7, url: beach, title: 'Beach', category:   'Luxury Travel' },
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

      <Grid container spacing={2}>
        {images
          .filter((image) => !selectedCategory || image.category === selectedCategory)
          .map((image) => (
            <Grid item xs={12} sm={6} md={4} key={image.id}>
          <img
          src={image.url}
          alt={image.title}
          style={{
            maxWidth: '24%', // Adjust the maximum width as needed


          }}
        />
              <Typography variant="subtitle1">{image.title}</Typography>
            </Grid>
          ))}
      </Grid>
    </ThemeProvider>
  );
};

export default TravelFilter;
