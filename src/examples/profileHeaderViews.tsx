import React from 'react';
import { Box, Avatar, Typography, Button, Stack, Chip, Divider } from '@mui/material';

const ProfileHeaderViews = [
  // Example 1: Centered Profile Header with Bio and Action Buttons
  {
    jsx: (
      <Box
        key="view1"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          padding: 3,
          backgroundColor: 'white',
          borderRadius: 2,
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Avatar
          src="https://i.pravatar.cc/100?img=7"
          sx={{ width: 100, height: 100, mb: 2 }}
        />
        <Typography variant="h6" color="black" fontWeight="bold">
          Alex Williams
        </Typography>
        <Typography variant="body2" color="text.secondary" mb={2}>
          Software Engineer & Coffee Enthusiast. Passionate about building scalable systems.
        </Typography>
        <Stack direction="row" spacing={2} justifyContent="center">
          <Button variant="contained" color="primary" size="small">
            Follow
          </Button>
          <Button variant="outlined" color="primary" size="small">
            Message
          </Button>
        </Stack>
      </Box>
    ),
    code: `
<Box
  sx={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    padding: 3,
    backgroundColor: 'white',
    borderRadius: 2,
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
  }}
>
  <Avatar
    src="https://i.pravatar.cc/100?img=7"
    sx={{ width: 100, height: 100, mb: 2 }}
  />
  <Typography variant="h6" color="black" fontWeight="bold">
    Alex Williams
  </Typography>
  <Typography variant="body2" color="text.secondary" mb={2}>
    Software Engineer & Coffee Enthusiast. Passionate about building scalable systems.
  </Typography>
  <Stack direction="row" spacing={2} justifyContent="center">
    <Button variant="contained" color="primary" size="small">
      Follow
    </Button>
    <Button variant="outlined" color="primary" size="small">
      Message
    </Button>
  </Stack>
</Box>
    `,
  },

  // Example 2: Horizontal Layout with Profile Details
  {
    jsx: (
      <Box
        key="view2"
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 2,
          padding: 3,
          backgroundColor: 'white',
          borderRadius: 2,
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Avatar
          src="https://i.pravatar.cc/100?img=8"
          sx={{ width: 80, height: 80 }}
        />
        <Box sx={{ flex: 1 }}>
          <Typography variant="h6" color="black" fontWeight="bold">
            Sarah Johnson
          </Typography>
          <Typography variant="body2" color="text.secondary" mb={1}>
            Digital Marketer | Traveler | Food Lover
          </Typography>
          <Stack direction="row" spacing={1}>
            <Chip label="Marketing" color="primary" size="small" />
            <Chip label="Travel" color="secondary" size="small" />
            <Chip label="Food" color="success" size="small" />
          </Stack>
        </Box>
        <Button variant="contained" color="primary" size="small">
          Follow
        </Button>
      </Box>
    ),
    code: `
<Box
  sx={{
    display: 'flex',
    alignItems: 'center',
    gap: 2,
    padding: 3,
    backgroundColor: 'white',
    borderRadius: 2,
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
  }}
>
  <Avatar
    src="https://i.pravatar.cc/100?img=8"
    sx={{ width: 80, height: 80 }}
  />
  <Box sx={{ flex: 1 }}>
    <Typography variant="h6" color="black" fontWeight="bold">
      Sarah Johnson
    </Typography>
    <Typography variant="body2" color="text.secondary" mb={1}>
      Digital Marketer | Traveler | Food Lover
    </Typography>
    <Stack direction="row" spacing={1}>
      <Chip label="Marketing" color="primary" size="small" />
      <Chip label="Travel" color="secondary" size="small" />
      <Chip label="Food" color="success" size="small" />
    </Stack>
  </Box>
  <Button variant="contained" color="primary" size="small">
    Follow
  </Button>
</Box>
    `,
  },

  // Example 3: Minimalistic Profile Header with Bio
  {
    jsx: (
      <Box
        key="view3"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          padding: 2,
          backgroundColor: 'white',
          borderRadius: 2,
        }}
      >
        <Avatar
          src="https://i.pravatar.cc/100?img=9"
          sx={{ width: 80, height: 80, mb: 1 }}
        />
        <Typography variant="h6" color="black" fontWeight="bold">
          David Lee
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Avid Reader. Tech Evangelist. Cat Dad.
        </Typography>
      </Box>
    ),
    code: `
<Box
  sx={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    padding: 2,
    backgroundColor: 'white',
    borderRadius: 2,
  }}
>
  <Avatar
    src="https://i.pravatar.cc/100?img=9"
    sx={{ width: 80, height: 80, mb: 1 }}
  />
  <Typography variant="h6" color="black" fontWeight="bold">
    David Lee
  </Typography>
  <Typography variant="body2" color="text.secondary">
    Avid Reader. Tech Evangelist. Cat Dad.
  </Typography>
</Box>
    `,
  },

  // Example 4: Profile Header with Divider and Statistics
  {
    jsx: (
      <Box
        key="view4"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          padding: 3,
          backgroundColor: 'white',
          borderRadius: 2,
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Avatar
          src="https://i.pravatar.cc/100?img=10"
          sx={{ width: 100, height: 100, mb: 2 }}
        />
        <Typography variant="h6" color="black" fontWeight="bold">
          Emily Carter
        </Typography>
        <Typography variant="body2" color="text.secondary" mb={2}>
          Fitness Coach & Lifestyle Blogger
        </Typography>
        <Divider sx={{ width: '100%', mb: 2 }} />
        <Stack
          direction="row"
          spacing={2}
          justifyContent="center"
          sx={{ width: '100%' }}
        >
          <Box>
            <Typography variant="h6" color="black">
              245
            </Typography>
            <Typography variant="caption" color="text.secondary">
              Posts
            </Typography>
          </Box>
          <Box>
            <Typography variant="h6" color="black">
              1.2k
            </Typography>
            <Typography variant="caption" color="text.secondary">
              Followers
            </Typography>
          </Box>
          <Box>
            <Typography variant="h6" color="black">
              98
            </Typography>
            <Typography variant="caption" color="text.secondary">
              Following
            </Typography>
          </Box>
        </Stack>
      </Box>
    ),
    code: `
<Box
  sx={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    padding: 3,
    backgroundColor: 'white',
    borderRadius: 2,
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
  }}
>
  <Avatar
    src="https://i.pravatar.cc/100?img=10"
    sx={{ width: 100, height: 100, mb: 2 }}
  />
  <Typography variant="h6" color="black" fontWeight="bold">
    Emily Carter
  </Typography>
  <Typography variant="body2" color="text.secondary" mb={2}>
    Fitness Coach & Lifestyle Blogger
  </Typography>
  <Divider sx={{ width: '100%', mb: 2 }} />
  <Stack
    direction="row"
    spacing={2}
    justifyContent="center"
    sx={{ width: '100%' }}
  >
    <Box>
      <Typography variant="h6" color="black">
        245
      </Typography>
      <Typography variant="caption" color="text.secondary">
        Posts
      </Typography>
    </Box>
    <Box>
      <Typography variant="h6" color="black">
        1.2k
      </Typography>
      <Typography variant="caption" color="text.secondary">
        Followers
      </Typography>
    </Box>
    <Box>
      <Typography variant="h6" color="black">
        98
      </Typography>
      <Typography variant="caption" color="text.secondary">
        Following
      </Typography>
    </Box>
  </Stack>
</Box>
    `,
  },

  // Example 5: Vibrant Profile Header with Background Image
  {
    jsx: (
      <Box
        key="view5"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          padding: 3,
          background: 'linear-gradient(to bottom, #6a11cb, #2575fc)',
          borderRadius: 2,
          color: 'white',
        }}
      >
        <Avatar
          src="https://i.pravatar.cc/100?img=11"
          sx={{ width: 100, height: 100, mb: 2, border: '3px solid white' }}
        />
        <Typography variant="h6" fontWeight="bold">
          Chris Evans
        </Typography>
        <Typography variant="body2" sx={{ opacity: 0.8, mb: 2 }}>
          Photographer | Explorer | Dreamer
        </Typography>
        <Stack direction="row" spacing={2} justifyContent="center">
          <Button variant="contained" color="secondary" size="small">
            Follow
          </Button>
          <Button variant="outlined" color="secondary" size="small">
            Message
          </Button>
        </Stack>
      </Box>
    ),
    code: `
<Box
  sx={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    padding: 3,
    background: 'linear-gradient(to bottom, #6a11cb, #2575fc)',
    borderRadius: 2,
    color: 'white',
  }}
>
  <Avatar
    src="https://i.pravatar.cc/100?img=11"
    sx={{ width: 100, height: 100, mb: 2, border: '3px solid white' }}
  />
  <Typography variant="h6" fontWeight="bold">
    Chris Evans
  </Typography>
  <Typography variant="body2" sx={{ opacity: 0.8, mb: 2 }}>
    Photographer | Explorer | Dreamer
  </Typography>
  <Stack direction="row" spacing={2} justifyContent="center">
    <Button variant="contained" color="secondary" size="small">
      Follow
    </Button>
    <Button variant="outlined" color="secondary" size="small">
      Message
    </Button>
  </Stack>
</Box>
    `,
  },
];

export default ProfileHeaderViews;