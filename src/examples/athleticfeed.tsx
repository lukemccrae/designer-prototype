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
  Button,
  Chip,
} from '@mui/material';

const AthleticFeedPosts = [
  // Example 1: Horizontal card with profile and activity summary
  {
    jsx: (
      <Card
        key="post1"
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: 2,
          padding: 2,
          backgroundColor: 'white',
          borderRadius: 2,
        }}
      >
        <Avatar
          src="https://i.pravatar.cc/80?img=10"
          alt="John Doe"
          sx={{ width: 64, height: 64 }}
        />
        <Box sx={{ flex: 1 }}>
          <Typography variant="h6" color="black">
            John Doe
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <strong>Cycling</strong> - 45m | 15km | 600 kcal
          </Typography>
          <Typography variant="caption" color="text.secondary">
            "Explored the countryside today. Great weather!"
          </Typography>
        </Box>
        <Button variant="outlined" color="primary" size="small">
          Details
        </Button>
      </Card>
    ),
    code: `
<Card
  sx={{
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
    padding: 2,
    backgroundColor: 'white',
    borderRadius: 2,
  }}
>
  <Avatar
    src="https://i.pravatar.cc/80?img=10"
    alt="John Doe"
    sx={{ width: 64, height: 64 }}
  />
  <Box sx={{ flex: 1 }}>
    <Typography variant="h6" color="black">John Doe</Typography>
    <Typography variant="body2" color="text.secondary">
      <strong>Cycling</strong> - 45m | 15km | 600 kcal
    </Typography>
    <Typography variant="caption" color="text.secondary">
      "Explored the countryside today. Great weather!"
    </Typography>
  </Box>
  <Button variant="outlined" color="primary" size="small">
    Details
  </Button>
</Card>
    `,
  },

  // Example 2: Vertical card with image and activity stats
  {
    jsx: (
      <Card
        key="post2"
        sx={{
          backgroundColor: 'white',
          borderRadius: 2,
          overflow: 'hidden',
        }}
      >
        <CardMedia
          component="img"
          height="180"
          image="https://source.unsplash.com/800x600/?running"
          alt="Running"
        />
        <CardContent>
          <Stack direction="row" alignItems="center" spacing={2}>
            <Avatar src="https://i.pravatar.cc/80?img=12" alt="Jane Smith" />
            <Box>
              <Typography variant="h6" color="black">
                Jane Smith
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Running - 8km | 45m | 500 kcal
              </Typography>
            </Box>
          </Stack>
          <Typography
            variant="body2"
            color="text.secondary"
            mt={2}
            sx={{ fontStyle: 'italic' }}
          >
            "Morning run along the beach. Feeling energized!"
          </Typography>
        </CardContent>
      </Card>
    ),
    code: `
<Card
  sx={{
    backgroundColor: 'white',
    borderRadius: 2,
    overflow: 'hidden',
  }}
>
  <CardMedia
    component="img"
    height="180"
    image="https://source.unsplash.com/800x600/?running"
    alt="Running"
  />
  <CardContent>
    <Stack direction="row" alignItems="center" spacing={2}>
      <Avatar src="https://i.pravatar.cc/80?img=12" alt="Jane Smith" />
      <Box>
        <Typography variant="h6" color="black">Jane Smith</Typography>
        <Typography variant="body2" color="text.secondary">
          Running - 8km | 45m | 500 kcal
        </Typography>
      </Box>
    </Stack>
    <Typography
      variant="body2"
      color="text.secondary"
      mt={2}
      sx={{ fontStyle: 'italic' }}
    >
      "Morning run along the beach. Feeling energized!"
    </Typography>
  </CardContent>
</Card>
    `,
  },

  // Example 3: Compact mobile-friendly card
  {
    jsx: (
      <Card
        key="post3"
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: 'white',
          padding: 2,
          borderRadius: 2,
        }}
      >
        <Avatar
          src="https://i.pravatar.cc/80?img=14"
          alt="Alex Johnson"
          sx={{ width: 48, height: 48, mr: 2 }}
        />
        <Box>
          <Typography variant="body1" color="black">
            Alex Johnson
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <strong>Swimming</strong> - 30m | 450 kcal
          </Typography>
        </Box>
      </Card>
    ),
    code: `
<Card
  sx={{
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 2,
    borderRadius: 2,
  }}
>
  <Avatar
    src="https://i.pravatar.cc/80?img=14"
    alt="Alex Johnson"
    sx={{ width: 48, height: 48, mr: 2 }}
  />
  <Box>
    <Typography variant="body1" color="black">Alex Johnson</Typography>
    <Typography variant="body2" color="text.secondary">
      <strong>Swimming</strong> - 30m | 450 kcal
    </Typography>
  </Box>
</Card>
    `,
  },

  // Example 4: Stacked card for activity details
  {
    jsx: (
      <Card
        key="post4"
        sx={{
          backgroundColor: 'white',
          padding: 2,
          borderRadius: 2,
        }}
      >
        <Stack direction="row" alignItems="center" spacing={2}>
          <Avatar src="https://i.pravatar.cc/80?img=15" alt="Emily Davis" />
          <Box>
            <Typography variant="h6" color="black">
              Emily Davis
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <strong>Yoga</strong> - 1h | 250 kcal
            </Typography>
          </Box>
        </Stack>
        <Divider sx={{ my: 2 }} />
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ fontStyle: 'italic' }}
        >
          "A peaceful yoga session to start the day. Feeling calm and focused."
        </Typography>
        <Stack sx={{ mt: 2 }} direction="row" spacing={1}>
          <Chip label="Yoga" color="primary" size="small" />
          <Chip label="Stretching" color="secondary" size="small" />
        </Stack>
      </Card>
    ),
    code: `
<Card
  sx={{
    backgroundColor: 'white',
    padding: 2,
    borderRadius: 2,
  }}
>
  <Stack direction="row" alignItems="center" spacing={2}>
    <Avatar src="https://i.pravatar.cc/80?img=15" alt="Emily Davis" />
    <Box>
      <Typography variant="h6" color="black">Emily Davis</Typography>
      <Typography variant="body2" color="text.secondary">
        <strong>Yoga</strong> - 1h | 250 kcal
      </Typography>
    </Box>
  </Stack>
  <Divider sx={{ my: 2 }} />
  <Typography
    variant="body2"
    color="text.secondary"
    sx={{ fontStyle: 'italic' }}
  >
    "A peaceful yoga session to start the day. Feeling calm and focused."
  </Typography>
  <Stack sx={{ mt: 2 }} direction="row" spacing={1}>
    <Chip label="Yoga" color="primary" size="small" />
    <Chip label="Stretching" color="secondary" size="small" />
  </Stack>
</Card>
    `,
  },

   // Example 5: Redesigned card with profile, stats, and actions
   {
    jsx: (
      <Card
        key="post5"
        sx={{
          backgroundColor: 'white`', // Dark blue-gray background
          color: 'black',
          padding: 3,
          borderRadius: 4,
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)', // Subtle shadow
        }}
      >
        <Stack direction="row" alignItems="center" spacing={2}>
          {/* Profile Avatar */}
          <Avatar
            src="https://i.pravatar.cc/80?img=20"
            alt="Michael Brown"
            sx={{ width: 64, height: 64 }}
          />
          {/* User Info */}
          <Box>
            <Typography variant="h6" color="black" fontWeight="bold">
              Michael Brown
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Hiking - 3h | 10km | 1200 kcal
            </Typography>
          </Box>
        </Stack>

        {/* Divider */}
        <Divider sx={{ my: 2, backgroundColor: 'gray' }} />

        {/* Activity Details */}
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ fontStyle: 'italic', mb: 2 }}
        >
          "The most breathtaking hike of my life! Reaching the summit was worth
          every step."
        </Typography>

        {/* Tags */}
        <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
          <Chip label="Hiking" color="primary" />
          <Chip label="Nature" color="secondary" />
          <Chip label="Adventure" color="success" />
        </Stack>

        {/* Actions */}
        <Stack direction="row" spacing={2}>
          <Button
            variant="contained"
            color="primary"
            sx={{
              textTransform: 'none',
              flex: 1,
            }}
          >
            Like
          </Button>
          <Button
            variant="outlined"
            color="primary"
            sx={{
              textTransform: 'none',
              flex: 1,
            }}
          >
            Comment
          </Button>
        </Stack>
      </Card>
    ),
    code: `
<Card
  sx={{
    backgroundColor: 'white', // Dark blue-gray background
    color: 'white',
    padding: 3,
    borderRadius: 4,
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)', // Subtle shadow
  }}
>
  <Stack direction="row" alignItems="center" spacing={2}>
    {/* Profile Avatar */}
    <Avatar
      src="https://i.pravatar.cc/80?img=20"
      alt="Michael Brown"
      sx={{ width: 64, height: 64 }}
    />
    {/* User Info */}
    <Box>
      <Typography variant="h6" color="white" fontWeight="bold">
        Michael Brown
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Hiking - 3h | 10km | 1200 kcal
      </Typography>
    </Box>
  </Stack>

  {/* Divider */}
  <Divider sx={{ my: 2, backgroundColor: 'gray' }} />

  {/* Activity Details */}
  <Typography
    variant="body2"
    color="text.secondary"
    sx={{ fontStyle: 'italic', mb: 2 }}
  >
    "The most breathtaking hike of my life! Reaching the summit was worth
    every step."
  </Typography>

  {/* Tags */}
  <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
    <Chip label="Hiking" color="primary" />
    <Chip label="Nature" color="secondary" />
    <Chip label="Adventure" color="success" />
  </Stack>

  {/* Actions */}
  <Stack direction="row" spacing={2}>
    <Button
      variant="contained"
      color="primary"
      sx={{
        textTransform: 'none',
        flex: 1,
      }}
    >
      Like
    </Button>
    <Button
      variant="outlined"
      color="primary"
      sx={{
        textTransform: 'none',
        flex: 1,
      }}
    >
      Comment
    </Button>
  </Stack>
</Card>
    `,
  },
];

export default AthleticFeedPosts;