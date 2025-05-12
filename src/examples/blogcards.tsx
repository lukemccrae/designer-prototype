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
  Button,
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

  // Variant 3: Horizontal layout with profile
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

  // Variant 6: Full-width image with overlay
  <Card key="variant6" sx={{ position: 'relative', color: 'white' }}>
    <CardMedia
      component="img"
      height="200"
      image="https://source.unsplash.com/800x600/?mountain,run"
      alt="Mountain running"
    />
    <Box
      sx={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        p: 2,
        background: 'rgba(0, 0, 0, 0.6)',
        width: '100%',
      }}
    >
      <Typography variant="h6">How I Ran My First 100K</Typography>
      <Typography variant="body2">Jane Doe · May 12, 2025</Typography>
    </Box>
  </Card>,

  // Variant 7: Compact layout with call-to-action buttons
  <Card key="variant7" sx={{ p: 2 }}>
    <Stack direction="row" spacing={2} alignItems="center">
      <Avatar src="https://i.pravatar.cc/40?img=5" />
      <Box>
        <Typography variant="h6">How I Ran My First 100K</Typography>
        <Typography variant="caption" color="text.secondary">
          May 12, 2025
        </Typography>
      </Box>
    </Stack>
    <Typography variant="body2" mt={2}>
      My journey to completing my first ultramarathon, with tips for aspiring long-distance runners.
    </Typography>
    <Stack direction="row" spacing={1} mt={2}>
      <Button size="small" variant="contained" color="primary">
        Read More
      </Button>
      <Button size="small" variant="outlined">
        Share
      </Button>
    </Stack>
  </Card>,

  // Variant 8: Gradient background
  <Card key="variant8" sx={{ background: 'linear-gradient(to bottom, #FF8A65, #FF7043)', color: 'white' }}>
    <CardContent>
      <Typography variant="h5" gutterBottom>
        How I Ran My First 100K
      </Typography>
      <Typography variant="body2">
        A colorful look at my ultramarathon preparation, from training plans to mental strategies.
      </Typography>
    </CardContent>
  </Card>,

  // Variant 9: Image with overlay text
  <Card key="variant9" sx={{ position: 'relative', overflow: 'hidden' }}>
    <CardMedia
      component="img"
      height="200"
      image="https://source.unsplash.com/800x600/?running,trail"
      alt="Trail running"
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
        How I Ran My First 100K
      </Typography>
      <Typography variant="body2" color="white">
        Jane Doe · May 12, 2025
      </Typography>
    </Box>
  </Card>,

  // Variant 10: Horizontal layout with media
  <Card key="variant10" sx={{ display: 'flex' }}>
    <CardMedia
      component="img"
      sx={{ width: 150 }}
      image="https://source.unsplash.com/800x600/?fitness,run"
      alt="Fitness running"
    />
    <Box sx={{ p: 2 }}>
      <Typography variant="h6">How I Ran My First 100K</Typography>
      <Typography variant="body2" color="text.secondary">
        Jane Doe · May 12, 2025
      </Typography>
      <Typography variant="body2" mt={1}>
        A detailed account of my ultramarathon experience, including the highs, lows, and everything in between.
      </Typography>
    </Box>
  </Card>,
];

// React code strings for each prototype
const blogCardCode = [
  `// Variant 1: Standard header layout
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
</Card>`,

  `// Variant 2: Media image on top
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
</Card>`,

  `// Variant 3: Horizontal layout with profile
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
</Card>`,
`// Variant 4: 
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
</Card>`,

`// Variant 5: Dark mode look
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
</Card>`,

`// Variant 6: Full-width image with overlay
<Card key="variant6" sx={{ position: 'relative', color: 'white' }}>
<CardMedia
  component="img"
  height="200"
  image="https://source.unsplash.com/800x600/?mountain,run"
  alt="Mountain running"
/>
<Box
  sx={{
    position: 'absolute',
    bottom: 0,
    left: 0,
    p: 2,
    background: 'rgba(0, 0, 0, 0.6)',
    width: '100%',
  }}
>
  <Typography variant="h6">How I Ran My First 100K</Typography>
  <Typography variant="body2">Jane Doe · May 12, 2025</Typography>
</Box>
</Card>`,

`// Variant 7: Compact layout with call-to-action buttons
<Card key="variant7" sx={{ p: 2 }}>
<Stack direction="row" spacing={2} alignItems="center">
  <Avatar src="https://i.pravatar.cc/40?img=5" />
  <Box>
    <Typography variant="h6">How I Ran My First 100K</Typography>
    <Typography variant="caption" color="text.secondary">
      May 12, 2025
    </Typography>
  </Box>
</Stack>
<Typography variant="body2" mt={2}>
  My journey to completing my first ultramarathon, with tips for aspiring long-distance runners.
</Typography>
<Stack direction="row" spacing={1} mt={2}>
  <Button size="small" variant="contained" color="primary">
    Read More
  </Button>
  <Button size="small" variant="outlined">
    Share
  </Button>
</Stack>
</Card>`,

`// Variant 8: Gradient background
<Card key="variant8" sx={{ background: 'linear-gradient(to bottom, #FF8A65, #FF7043)', color: 'white' }}>
<CardContent>
  <Typography variant="h5" gutterBottom>
    How I Ran My First 100K
  </Typography>
  <Typography variant="body2">
    A colorful look at my ultramarathon preparation, from training plans to mental strategies.
  </Typography>
</CardContent>
</Card>`,

`// Variant 9: Image with overlay text
<Card key="variant9" sx={{ position: 'relative', overflow: 'hidden' }}>
<CardMedia
  component="img"
  height="200"
  image="https://source.unsplash.com/800x600/?running,trail"
  alt="Trail running"
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
    How I Ran My First 100K
  </Typography>
  <Typography variant="body2" color="white">
    Jane Doe · May 12, 2025
  </Typography>
</Box>
</Card>`,

`// Variant 10: Horizontal layout with media
<Card key="variant10" sx={{ display: 'flex' }}>
<CardMedia
  component="img"
  sx={{ width: 150 }}
  image="https://source.unsplash.com/800x600/?fitness,run"
  alt="Fitness running"
/>
<Box sx={{ p: 2 }}>
  <Typography variant="h6">How I Ran My First 100K</Typography>
  <Typography variant="body2" color="text.secondary">
    Jane Doe · May 12, 2025
  </Typography>
  <Typography variant="body2" mt={1}>
    A detailed account of my ultramarathon experience, including the highs, lows, and everything in between.
  </Typography>
</Box>
</Card>,`

];

export { blogCardCode };
export default BlogCardVariants;