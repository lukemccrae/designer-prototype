import React from 'react';
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  CardHeader,
  Avatar,
  Typography,
  Stack,
  Divider,
} from '@mui/material';

const AthleticFeedPosts = [
  {
    jsx: (
      <Card key="post1">
        <CardHeader
          avatar={<Avatar src="https://i.pravatar.cc/40?img=11" />}
          title="John Doe"
          subheader="Cycling"
        />
        <CardMedia
          component="img"
          height="180"
          image="https://source.unsplash.com/800x600/?cycling"
          alt="Cycling"
        />
        <CardContent>
          <Typography variant="body1" gutterBottom>
            Duration: 1h 45m | Calories Burned: 650 kcal
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Rode through the scenic mountain trails today. The view was breathtaking, and it was an exhilarating workout!
          </Typography>
        </CardContent>
      </Card>
    ),
    code: `
<Card>
  <CardHeader
    avatar={<Avatar src="https://i.pravatar.cc/40?img=11" />}
    title="John Doe"
    subheader="Cycling"
  />
  <CardMedia
    component="img"
    height="180"
    image="https://source.unsplash.com/800x600/?cycling"
    alt="Cycling"
  />
  <CardContent>
    <Typography variant="body1" gutterBottom>
      Duration: 1h 45m | Calories Burned: 650 kcal
    </Typography>
    <Typography variant="body2" color="text.secondary">
      Rode through the scenic mountain trails today. The view was breathtaking, and it was an exhilarating workout!
    </Typography>
  </CardContent>
</Card>
    `,
  },
  {
    jsx: (
      <Card key="post2">
        <CardHeader
          avatar={<Avatar src="https://i.pravatar.cc/40?img=12" />}
          title="Jane Smith"
          subheader="Yoga"
        />
        <CardMedia
          component="img"
          height="180"
          image="https://source.unsplash.com/800x600/?yoga"
          alt="Yoga"
        />
        <CardContent>
          <Typography variant="body1" gutterBottom>
            Duration: 45m | Calories Burned: 200 kcal
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Started the day with a calming yoga session. Focused on breathing and flexibility—feeling centered and refreshed.
          </Typography>
        </CardContent>
      </Card>
    ),
    code: `
<Card>
  <CardHeader
    avatar={<Avatar src="https://i.pravatar.cc/40?img=12" />}
    title="Jane Smith"
    subheader="Yoga"
  />
  <CardMedia
    component="img"
    height="180"
    image="https://source.unsplash.com/800x600/?yoga"
    alt="Yoga"
  />
  <CardContent>
    <Typography variant="body1" gutterBottom>
      Duration: 45m | Calories Burned: 200 kcal
    </Typography>
    <Typography variant="body2" color="text.secondary">
      Started the day with a calming yoga session. Focused on breathing and flexibility—feeling centered and refreshed.
    </Typography>
  </CardContent>
</Card>
    `,
  },
  {
    jsx: (
      <Card key="post3">
        <CardHeader
          avatar={<Avatar src="https://i.pravatar.cc/40?img=13" />}
          title="Alex Johnson"
          subheader="Running"
        />
        <CardMedia
          component="img"
          height="180"
          image="https://source.unsplash.com/800x600/?running"
          alt="Running"
        />
        <CardContent>
          <Typography variant="body1" gutterBottom>
            Duration: 30m | Calories Burned: 350 kcal
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Quick morning run around the city park. The weather was perfect, and it felt great to get my heart pumping!
          </Typography>
        </CardContent>
      </Card>
    ),
    code: `
<Card>
  <CardHeader
    avatar={<Avatar src="https://i.pravatar.cc/40?img=13" />}
    title="Alex Johnson"
    subheader="Running"
  />
  <CardMedia
    component="img"
    height="180"
    image="https://source.unsplash.com/800x600/?running"
    alt="Running"
  />
  <CardContent>
    <Typography variant="body1" gutterBottom>
      Duration: 30m | Calories Burned: 350 kcal
    </Typography>
    <Typography variant="body2" color="text.secondary">
      Quick morning run around the city park. The weather was perfect, and it felt great to get my heart pumping!
    </Typography>
  </CardContent>
</Card>
    `,
  },
  {
    jsx: (
      <Card key="post4">
        <CardHeader
          avatar={<Avatar src="https://i.pravatar.cc/40?img=14" />}
          title="Emily Davis"
          subheader="Weight Training"
        />
        <CardMedia
          component="img"
          height="180"
          image="https://source.unsplash.com/800x600/?gym"
          alt="Weight Training"
        />
        <CardContent>
          <Typography variant="body1" gutterBottom>
            Duration: 1h 10m | Calories Burned: 500 kcal
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Focused on strength training today. Squats, deadlifts, and bench presses—feeling stronger every day!
          </Typography>
        </CardContent>
      </Card>
    ),
    code: `
<Card>
  <CardHeader
    avatar={<Avatar src="https://i.pravatar.cc/40?img=14" />}
    title="Emily Davis"
    subheader="Weight Training"
  />
  <CardMedia
    component="img"
    height="180"
    image="https://source.unsplash.com/800x600/?gym"
    alt="Weight Training"
  />
  <CardContent>
    <Typography variant="body1" gutterBottom>
      Duration: 1h 10m | Calories Burned: 500 kcal
    </Typography>
    <Typography variant="body2" color="text.secondary">
      Focused on strength training today. Squats, deadlifts, and bench presses—feeling stronger every day!
    </Typography>
  </CardContent>
</Card>
    `,
  },
  {
    jsx: (
      <Card key="post5">
        <CardHeader
          avatar={<Avatar src="https://i.pravatar.cc/40?img=15" />}
          title="Michael Brown"
          subheader="Swimming"
        />
        <CardMedia
          component="img"
          height="180"
          image="https://source.unsplash.com/800x600/?swimming"
          alt="Swimming"
        />
        <CardContent>
          <Typography variant="body1" gutterBottom>
            Duration: 1h | Calories Burned: 700 kcal
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Hit the pool for some laps. Swimming is my favorite full-body workout—it’s challenging but so refreshing!
          </Typography>
        </CardContent>
      </Card>
    ),
    code: `
<Card>
  <CardHeader
    avatar={<Avatar src="https://i.pravatar.cc/40?img=15" />}
    title="Michael Brown"
    subheader="Swimming"
  />
  <CardMedia
    component="img"
    height="180"
    image="https://source.unsplash.com/800x600/?swimming"
    alt="Swimming"
  />
  <CardContent>
    <Typography variant="body1" gutterBottom>
      Duration: 1h | Calories Burned: 700 kcal
    </Typography>
    <Typography variant="body2" color="text.secondary">
      Hit the pool for some laps. Swimming is my favorite full-body workout—it’s challenging but so refreshing!
    </Typography>
  </CardContent>
</Card>
    `,
  },
];

export default AthleticFeedPosts;