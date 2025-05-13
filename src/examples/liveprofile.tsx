import { Box, Avatar, Typography, Chip, Badge } from '@mui/material';

const LiveUserCards = [
  // Variant 1: Instagram-style profile with a LIVE badge overlay
  {
    jsx: (
      <Box
        key="user1"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          width: 80,
          gap: 0.5,
          backgroundColor: 'white',
          borderRadius: 2,
          padding: 2,
        }}
      >
        <Badge
          badgeContent="LIVE"
          color="error"
          sx={{
            '.MuiBadge-badge': {
              fontSize: 8,
              height: 14,
              minWidth: 14,
            },
          }}
        >
          <Avatar
            src="https://i.pravatar.cc/80?img=1"
            sx={{
              width: 56,
              height: 56,
              border: '2px solid #ff0000',
            }}
          />
        </Badge>
        <Typography variant="caption" color="black" noWrap>
          StreamerOne
        </Typography>
        <Typography variant="caption" color="text.secondary" noWrap>
          Apex Legends
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
    width: 80,
    gap: 0.5,
    backgroundColor: 'white',
    borderRadius: 2,
    padding: 2,
  }}
>
  <Badge badgeContent="LIVE" color="error">
    <Avatar
      src="https://i.pravatar.cc/80?img=1"
      sx={{ width: 56, height: 56, border: '2px solid #ff0000' }}
    />
  </Badge>
  <Typography variant="caption" color="black" noWrap>
    StreamerOne
  </Typography>
  <Typography variant="caption" color="text.secondary" noWrap>
    Apex Legends
  </Typography>
</Box>
    `,
  },

  // Variant 2: Horizontal layout with avatar, username, and LIVE chip
  {
    jsx: (
      <Box
        key="user2"
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 1,
          width: 250,
          backgroundColor: 'white',
          borderRadius: 2,
          padding: 2,
        }}
      >
        <Avatar
          src="https://i.pravatar.cc/80?img=2"
          sx={{
            width: 56,
            height: 56,
            border: '2px solid #ff0000',
          }}
        />
        <Box sx={{ flex: 1 }}>
          <Typography variant="body2" color="black" noWrap>
            GamerGirl123
          </Typography>
          <Typography variant="caption" color="text.secondary" noWrap>
            Fortnite
          </Typography>
        </Box>
        <Chip label="LIVE" color="error" size="small" />
      </Box>
    ),
    code: `
<Box
  sx={{
    display: 'flex',
    alignItems: 'center',
    gap: 1,
    width: 250,
    backgroundColor: 'white',
    borderRadius: 2,
    padding: 2,
  }}
>
  <Avatar
    src="https://i.pravatar.cc/80?img=2"
    sx={{ width: 56, height: 56, border: '2px solid #ff0000' }}
  />
  <Box sx={{ flex: 1 }}>
    <Typography variant="body2" color="black" noWrap>
      GamerGirl123
    </Typography>
    <Typography variant="caption" color="text.secondary" noWrap>
      Fortnite
    </Typography>
  </Box>
  <Chip label="LIVE" color="error" size="small" />
</Box>
    `,
  },

  // Variant 3: Circular profile with a floating LIVE chip
  {
    jsx: (
      <Box
        key="user3"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          width: 80,
          gap: 0.5,
          backgroundColor: 'white',
          borderRadius: 2,
          padding: 2,
        }}
      >
        <Box sx={{ position: 'relative' }}>
          <Avatar
            src="https://i.pravatar.cc/80?img=3"
            sx={{
              width: 56,
              height: 56,
              border: '2px solid #ff0000',
            }}
          />
          <Chip
            label="LIVE"
            color="error"
            size="small"
            sx={{
              position: 'absolute',
              top: -4,
              right: -4,
              fontSize: 10,
              height: 16,
            }}
          />
        </Box>
        <Typography variant="caption" color="black" noWrap>
          ProGamerX
        </Typography>
        <Typography variant="caption" color="text.secondary" noWrap>
          Call of Duty
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
    width: 80,
    gap: 0.5,
    backgroundColor: 'white',
    borderRadius: 2,
    padding: 2,
  }}
>
  <Box sx={{ position: 'relative' }}>
    <Avatar
      src="https://i.pravatar.cc/80?img=3"
      sx={{ width: 56, height: 56, border: '2px solid #ff0000' }}
    />
    <Chip
      label="LIVE"
      color="error"
      size="small"
      sx={{ position: 'absolute', top: -4, right: -4, fontSize: 10, height: 16 }}
    />
  </Box>
  <Typography variant="caption" color="black" noWrap>
    ProGamerX
  </Typography>
  <Typography variant="caption" color="text.secondary" noWrap>
    Call of Duty
  </Typography>
</Box>
    `,
  },

  // Variant 4: User card with a solid background and stacked text
  {
    jsx: (
      <Box
        key="user4"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          width: 90,
          gap: 0.5,
          backgroundColor: '#f9f9f9',
          borderRadius: '8px',
          p: 2,
        }}
      >
        <Avatar
          src="https://i.pravatar.cc/80?img=4"
          sx={{
            width: 64,
            height: 64,
            border: '2px solid #ff0000',
          }}
        />
        <Typography variant="caption" color="black" noWrap>
          StreamerKing
        </Typography>
        <Typography variant="caption" color="text.secondary" noWrap>
          League of Legends
        </Typography>
        <Chip label="LIVE" color="error" size="small" sx={{ fontSize: 10 }} />
      </Box>
    ),
    code: `
<Box
  sx={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    width: 90,
    gap: 0.5,
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    p: 2,
  }}
>
  <Avatar
    src="https://i.pravatar.cc/80?img=4"
    sx={{ width: 64, height: 64, border: '2px solid #ff0000' }}
  />
  <Typography variant="caption" color="black" noWrap>
    StreamerKing
  </Typography>
  <Typography variant="caption" color="text.secondary" noWrap>
    League of Legends
  </Typography>
  <Chip label="LIVE" color="error" size="small" sx={{ fontSize: 10 }} />
</Box>
    `,
  },

  // Variant 5: Minimal design with just a profile photo and LIVE label
  {
    jsx: (
      <Box
        key="user5"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          width: 70,
          gap: 0.5,
          backgroundColor: 'white',
          borderRadius: 2,
          padding: 1,
        }}
      >
        <Avatar
          src="https://i.pravatar.cc/80?img=5"
          sx={{
            width: 56,
            height: 56,
            border: '2px solid #ff0000',
          }}
        />
        <Chip label="LIVE" color="error" size="small" sx={{ fontSize: 10 }} />
      </Box>
    ),
    code: `
<Box
  sx={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    width: 70,
    gap: 0.5,
    backgroundColor: 'white',
    borderRadius: 2,
    padding: 1,
  }}
>
  <Avatar
    src="https://i.pravatar.cc/80?img=5"
    sx={{ width: 56, height: 56, border: '2px solid #ff0000' }}
  />
  <Chip label="LIVE" color="error" size="small" sx={{ fontSize: 10 }} />
</Box>
    `,
  },
];

export default LiveUserCards;