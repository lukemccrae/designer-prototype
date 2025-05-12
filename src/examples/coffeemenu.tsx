import React from 'react';
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Stack,
  Avatar,
  Divider,
  Button,
} from '@mui/material';

const CoffeeMenuVariants = [
  // Variant 1: Simple layout with image on top
  <Card key="variant1">
    <CardMedia
      component="img"
      height="180"
      image="https://source.unsplash.com/800x600/?coffee"
      alt="Espresso"
    />
    <CardContent>
      <Typography variant="h6">Espresso</Typography>
      <Typography variant="body2" color="text.secondary">
        A strong and bold shot of coffee, perfect for a quick pick-me-up.
      </Typography>
      <Typography variant="subtitle1" mt={1}>
        $2.50
      </Typography>
    </CardContent>
  </Card>,

  // Variant 2: Minimal layout with border and divider
  <Card key="variant2" variant="outlined">
    <CardContent>
      <Typography variant="h5">Cappuccino</Typography>
      <Divider sx={{ my: 1 }} />
      <Typography variant="body2" color="text.secondary">
        A classic Italian coffee drink with equal parts espresso, steamed milk, and foam.
      </Typography>
      <Typography variant="subtitle1" mt={2}>
        $3.50
      </Typography>
    </CardContent>
  </Card>,

  // Variant 3: Compact layout with call-to-action buttons
  <Card key="variant3" sx={{ p: 2 }}>
    <Stack direction="row" spacing={2} alignItems="center">
      <Avatar src="https://source.unsplash.com/40x40/?coffee" />
      <Box>
        <Typography variant="h6">Latte</Typography>
        <Typography variant="caption" color="text.secondary">
          $4.00
        </Typography>
      </Box>
    </Stack>
    <Typography variant="body2" mt={2}>
      A creamy coffee drink made with espresso and steamed milk, topped with a light layer of foam.
    </Typography>
    <Stack direction="row" spacing={1} mt={2}>
      <Button size="small" variant="contained" color="primary">
        Order Now
      </Button>
      <Button size="small" variant="outlined">
        Details
      </Button>
    </Stack>
  </Card>,

  // Variant 4: Dark mode look
  <Card key="variant4" sx={{ backgroundColor: '#1e1e1e', color: 'white' }}>
    <CardContent>
      <Typography variant="h6">Mocha</Typography>
      <Typography variant="body2" color="gray">
        A delicious blend of espresso, steamed milk, and chocolate syrup, topped with whipped cream.
      </Typography>
      <Typography variant="subtitle1" mt={1}>
        $4.50
      </Typography>
    </CardContent>
  </Card>,

  // Variant 5: Image with overlay text
  <Card key="variant5" sx={{ position: 'relative', overflow: 'hidden' }}>
    <CardMedia
      component="img"
      height="200"
      image="https://source.unsplash.com/800x600/?coffee,latte"
      alt="Flat White"
    />
    <Box
      sx={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        p: 2,
        background: 'rgba(0, 0, 0, 0.5)',
      }}
    >
      <Typography variant="h6" color="white">
        Flat White
      </Typography>
      <Typography variant="body2" color="white">
        $3.75
      </Typography>
    </Box>
  </Card>,

  // Variant 6: Gradient background
  <Card key="variant6" sx={{ background: 'linear-gradient(to bottom, #FFD700, #FFA500)', color: 'white' }}>
    <CardContent>
      <Typography variant="h5">Caramel Macchiato</Typography>
      <Typography variant="body2">
        Layers of espresso, steamed milk, and caramel syrup, topped with a drizzle of caramel.
      </Typography>
      <Typography variant="subtitle1" mt={2}>
        $4.75
      </Typography>
    </CardContent>
  </Card>,
];

export default CoffeeMenuVariants;