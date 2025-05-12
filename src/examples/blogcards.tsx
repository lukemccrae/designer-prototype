import React from 'react';
import {
  Box,
  Card,
  CardHeader,
  CardContent,
  CardMedia,
  Avatar,
  Typography,
  Stack,
  Divider,
} from '@mui/material';

const BlogCardVariants = [
  // Variant 1: Standard header layout
  <Card key="variant1">
    <CardHeader
      avatar={<Avatar src="https://i.pravatar.cc/40?img=1" />}
      title="Jane Doe"
      subheader="May 12, 2025"
    />
    <CardContent>
      <Typography variant="h5" gutterBottom>
        How I Ran My First 100K
      </Typography>
      <Typography variant="body2" color="text.secondary">
        This article shares lessons and stories from my journey training for and running my first 100K ultramarathon.
      </Typography>
    </CardContent>
  </Card>,

  // Variant 2: Media image on top
  <Card key="variant2">
    <CardMedia
      component="img"
      height="180"
      image="https://source.unsplash.com/800x600/?trail,run"
      alt="Trail running"
    />
    <CardContent>
      <Typography variant="overline" color="text.secondary">
        May 12, 2025
      </Typography>
      <Typography variant="h6">How I Ran My First 100K</Typography>
      <Stack direction="row" spacing={1} alignItems="center" mt={1}>
        <Avatar src="https://i.pravatar.cc/40?img=2" />
        <Typography variant="body2">Jane Doe</Typography>
      </Stack>
    </CardContent>
  </Card>,

  // Variant 3: Emphasized title and profile on side
  <Card key="variant3" sx={{ display: 'flex', p: 2 }}>
    <Avatar src="https://i.pravatar.cc/60?img=3" sx={{ width: 60, height: 60, mr: 2 }} />
    <Box>
      <Typography variant="h6">How I Ran My First 100K</Typography>
      <Typography variant="body2" color="text.secondary">
        By Jane Doe · May 12, 2025
      </Typography>
      <Typography variant="body2" mt={1}>
        I never thought I’d make it through the training, but here’s how I overcame every obstacle to finish strong.
      </Typography>
    </Box>
  </Card>,

  // Variant 4: Minimal layout with border and divider
  <Card key="variant4" variant="outlined">
    <CardContent>
      <Typography variant="h5">How I Ran My First 100K</Typography>
      <Divider sx={{ my: 1 }} />
      <Stack direction="row" spacing={1} alignItems="center">
        <Avatar src="https://i.pravatar.cc/40?img=4" />
        <Box>
          <Typography variant="body2">Jane Doe</Typography>
          <Typography variant="caption" color="text.secondary">
            May 12, 2025
          </Typography>
        </Box>
      </Stack>
      <Typography variant="body2" mt={2}>
        A short reflection on pacing, nutrition, and mindset after running my longest race to date.
      </Typography>
    </CardContent>
  </Card>,

  // Variant 5: Dark mode look
  <Card key="variant5" sx={{ backgroundColor: '#1e1e1e', color: 'white' }}>
    <CardContent>
      <Typography variant="h6" gutterBottom>
        How I Ran My First 100K
      </Typography>
      <Typography variant="body2" color="gray">
        Jane Doe · May 12, 2025
      </Typography>
      <Typography variant="body2" mt={1}>
        In this post, I cover what it took to mentally and physically prepare for an ultramarathon in the mountains.
      </Typography>
    </CardContent>
  </Card>,
];

export default BlogCardVariants;