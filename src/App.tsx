import React, { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardHeader,
  CardContent,
  CardMedia,
  Avatar,
  Typography,
  Container,
  Stack,
  Divider,
} from '@mui/material';

// Variant 1: Standard header layout
const BlogCardVariant1 = () => (
  <Card>
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
  </Card>
);

// Variant 2: Media image on top
const BlogCardVariant2 = () => (
  <Card>
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
  </Card>
);

// Variant 3: Emphasized title and profile on side
const BlogCardVariant3 = () => (
  <Card sx={{ display: 'flex', p: 2 }}>
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
  </Card>
);

// Variant 4: Minimal layout with border and divider
const BlogCardVariant4 = () => (
  <Card variant="outlined">
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
  </Card>
);

// Variant 5: Dark mode look
const BlogCardVariant5 = () => (
  <Card sx={{ backgroundColor: '#1e1e1e', color: 'white' }}>
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
  </Card>
);

const blogCardVariants = [
  <BlogCardVariant1 key="1" />,
  <BlogCardVariant2 key="2" />,
  <BlogCardVariant3 key="3" />,
  <BlogCardVariant4 key="4" />,
  <BlogCardVariant5 key="5" />,
];

export default function App() {
  const [index, setIndex] = useState(0);

  const handleNext = () => setIndex((prev) => (prev + 1) % blogCardVariants.length);
  const handlePrev = () => setIndex((prev) => (prev - 1 + blogCardVariants.length) % blogCardVariants.length);

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Blog Card Prototype {index + 1}
      </Typography>
      <Box>{blogCardVariants[index]}</Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
        <Button variant="outlined" onClick={handlePrev}>
          Previous
        </Button>
        <Button variant="outlined" onClick={handleNext}>
          Next
        </Button>
      </Box>
    </Container>
  );
}
