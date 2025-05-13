import React from 'react';
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Avatar,
  Typography,
  Stack,
  Divider,
  Chip,
  Button,
} from '@mui/material';

const AthleticFeedPosts = [
  // Example 1: Full-width banner with overlay text
  {
    jsx: (
      <Card key="post1" sx={{ position: 'relative', backgroundColor: 'white', color: 'black' }}>
        <CardMedia
          component="img"
          height="200"
          image="https://source.unsplash.com/800x600/?cycling"
          alt="Cycling"
        />
        <Box
          sx={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            background: 'rgba(255, 255, 255, 0.8)',
            padding: 2,
          }}
        >
          <Typography variant="h5" color="black">
            John Doe
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Cycling - 1h 45m | 650 kcal
          </Typography>
          <Typography variant="caption" color="text.secondary">
            "Rode through the scenic mountain trails today. The view was breathtaking!"
          </Typography>
        </Box>
      </Card>
    ),
    code: `
<Card sx={{ position: 'relative', backgroundColor: 'white', color: 'black' }}>
  <CardMedia
    component="img"
    height="200"
    image="https://source.unsplash.com/800x600/?cycling"
    alt="Cycling"
  />
  <Box
    sx={{
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      background: 'rgba(255, 255, 255, 0.8)',
      padding: 2,
    }}
  >
    <Typography variant="h5" color="black">John Doe</Typography>
    <Typography variant="body2" color="text.secondary">
      Cycling - 1h 45m | 650 kcal
    </Typography>
    <Typography variant="caption" color="text.secondary">
      "Rode through the scenic mountain trails today. The view was breathtaking!"
    </Typography>
  </Box>
</Card>
    `,
  },

  // Example 2: Vertical card with side panel for details
  {
    jsx: (
      <Card key="post2" sx={{ display: 'flex', flexDirection: 'row', height: '180px', backgroundColor: 'white' }}>
        <CardMedia
          component="img"
          sx={{ width: 150 }}
          image="https://source.unsplash.com/800x600/?yoga"
          alt="Yoga"
        />
        <CardContent sx={{ flex: 1 }}>
          <Typography variant="h6" color="black">
            Jane Smith
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Yoga - 45m | 200 kcal
          </Typography>
          <Divider sx={{ my: 1 }} />
          <Typography variant="body2" color="text.secondary">
            Started the day with a calming yoga session. Feeling centered and refreshed!
          </Typography>
        </CardContent>
      </Card>
    ),
    code: `
<Card sx={{ display: 'flex', flexDirection: 'row', height: '180px', backgroundColor: 'white' }}>
  <CardMedia
    component="img"
    sx={{ width: 150 }}
    image="https://source.unsplash.com/800x600/?yoga"
    alt="Yoga"
  />
  <CardContent sx={{ flex: 1 }}>
    <Typography variant="h6" color="black">Jane Smith</Typography>
    <Typography variant="body2" color="text.secondary">
      Yoga - 45m | 200 kcal
    </Typography>
    <Divider sx={{ my: 1 }} />
    <Typography variant="body2" color="text.secondary">
      Started the day with a calming yoga session. Feeling centered and refreshed!
    </Typography>
  </CardContent>
</Card>
    `,
  },

  // Example 3: Circular avatar with a badge-like design
  {
    jsx: (
      <Card key="post3" sx={{ textAlign: 'center', backgroundColor: 'white', padding: 3 }}>
        <Avatar
          src="https://i.pravatar.cc/100?img=13"
          alt="Alex Johnson"
          sx={{ width: 100, height: 100, margin: '0 auto', border: '4px solid #1976d2' }}
        />
        <Typography variant="h6" sx={{ mt: 2 }} color="black">
          Alex Johnson
        </Typography>
        <Chip label="Running - 30m | 350 kcal" color="primary" sx={{ mt: 1 }} />
        <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
          Quick morning run around the city park. The weather was perfect for some cardio!
        </Typography>
      </Card>
    ),
    code: `
<Card sx={{ textAlign: 'center', backgroundColor: 'white', padding: 3 }}>
  <Avatar
    src="https://i.pravatar.cc/100?img=13"
    alt="Alex Johnson"
    sx={{ width: 100, height: 100, margin: '0 auto', border: '4px solid #1976d2' }}
  />
  <Typography variant="h6" sx={{ mt: 2 }} color="black">Alex Johnson</Typography>
  <Chip label="Running - 30m | 350 kcal" color="primary" sx={{ mt: 1 }} />
  <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
    Quick morning run around the city park. The weather was perfect for some cardio!
  </Typography>
</Card>
    `,
  },

  // Example 4: Minimalist inline card
  {
    jsx: (
      <Card key="post4" variant="outlined" sx={{ display: 'flex', alignItems: 'center', padding: 2, backgroundColor: 'white' }}>
        <Avatar src="https://i.pravatar.cc/80?img=14" sx={{ width: 80, height: 80, mr: 2 }} />
        <Box>
          <Typography variant="h6" color="black">
            Emily Davis
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Weight Training - 1h 10m | 500 kcal
          </Typography>
          <Typography variant="body2" sx={{ mt: 1 }} color="text.secondary">
            Focused on strength training today. Squats and deadlifts to build power!
          </Typography>
        </Box>
      </Card>
    ),
    code: `
<Card variant="outlined" sx={{ display: 'flex', alignItems: 'center', padding: 2, backgroundColor: 'white' }}>
  <Avatar src="https://i.pravatar.cc/80?img=14" sx={{ width: 80, height: 80, mr: 2 }} />
  <Box>
    <Typography variant="h6" color="black">Emily Davis</Typography>
    <Typography variant="body2" color="text.secondary">
      Weight Training - 1h 10m | 500 kcal
    </Typography>
    <Typography variant="body2" sx={{ mt: 1 }} color="text.secondary">
      Focused on strength training today. Squats and deadlifts to build power!
    </Typography>
  </Box>
</Card>
    `,
  },

  // Example 5: Card with button actions
  {
    jsx: (
      <Card
        key="post5"
        sx={{
          backgroundColor: 'white',
          color: 'black',
          padding: 2,
          borderRadius: 4,
        }}
      >
        <Typography variant="h6" color="black">
          Michael Brown
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Swimming - 1h | 700 kcal
        </Typography>
        <Typography variant="body2" sx={{ mt: 2 }} color="text.secondary">
          Hit the pool for some laps. Swimming is my favorite full-body workout—it’s refreshing and challenging!
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Button variant="contained" color="primary" sx={{ mr: 1 }}>
            Like
          </Button>
          <Button variant="outlined" color="primary">
            Comment
          </Button>
        </Box>
      </Card>
    ),
    code: `
<Card
  sx={{
    backgroundColor: 'white',
    color: 'black',
    padding: 2,
    borderRadius: 4,
  }}
>
  <Typography variant="h6" color="black">Michael Brown</Typography>
  <Typography variant="body2" color="text.secondary">
    Swimming - 1h | 700 kcal
  </Typography>
  <Typography variant="body2" sx={{ mt: 2 }} color="text.secondary">
    Hit the pool for some laps. Swimming is my favorite full-body workout—it’s refreshing and challenging!
  </Typography>
  <Box sx={{ mt: 2 }}>
    <Button variant="contained" color="primary" sx={{ mr: 1 }}>
      Like
    </Button>
    <Button variant="outlined" color="primary">
      Comment
    </Button>
  </Box>
</Card>
    `,
  },
];

export default AthleticFeedPosts;