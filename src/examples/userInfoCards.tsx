import React from 'react';
import {
  Box,
  Card,
  CardContent,
  TextField,
  Typography,
  Button,
  Stack,
  Avatar,
} from '@mui/material';

const EditUserInfoCards = [
  {
    jsx: (
      <Card
        key="edit1"
        sx={{
          maxWidth: 400,
          backgroundColor: 'white',
          color: 'black',
          padding: 3,
          borderRadius: 2,
        }}
      >
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Edit Profile
          </Typography>
          <Stack spacing={2} alignItems="center">
            <Avatar
              src="https://i.pravatar.cc/100?img=1"
              sx={{ width: 80, height: 80, marginBottom: 2 }}
            />
            <TextField label="Full Name" variant="outlined" fullWidth />
            <TextField label="Email Address" variant="outlined" fullWidth />
            <TextField label="Username" variant="outlined" fullWidth />
            <TextField
              label="Bio"
              variant="outlined"
              multiline
              rows={3}
              fullWidth
            />
            <Button variant="contained" color="primary" fullWidth>
              Save Changes
            </Button>
          </Stack>
        </CardContent>
      </Card>
    ),
    code: `
<Card
  sx={{
    maxWidth: 400,
    backgroundColor: 'white',
    color: 'black',
    padding: 3,
    borderRadius: 2,
  }}
>
  <CardContent>
    <Typography variant="h6" gutterBottom>
      Edit Profile
    </Typography>
    <Stack spacing={2} alignItems="center">
      <Avatar
        src="https://i.pravatar.cc/100?img=1"
        sx={{ width: 80, height: 80, marginBottom: 2 }}
      />
      <TextField label="Full Name" variant="outlined" fullWidth />
      <TextField label="Email Address" variant="outlined" fullWidth />
      <TextField label="Username" variant="outlined" fullWidth />
      <TextField
        label="Bio"
        variant="outlined"
        multiline
        rows={3}
        fullWidth
      />
      <Button variant="contained" color="primary" fullWidth>
        Save Changes
      </Button>
    </Stack>
  </CardContent>
</Card>
    `,
  },
  {
    jsx: (
      <Card
        key="edit2"
        sx={{
          maxWidth: 500,
          backgroundColor: '#f9f9f9',
          border: '1px solid #ddd',
          padding: 3,
          borderRadius: 2,
        }}
      >
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Update Your Info
          </Typography>
          <Stack spacing={3}>
            <Stack direction="row" spacing={2} alignItems="center">
              <Avatar
                src="https://i.pravatar.cc/80?img=2"
                sx={{ width: 64, height: 64 }}
              />
              <Button variant="outlined" color="primary">
                Change Photo
              </Button>
            </Stack>
            <TextField label="Name" fullWidth />
            <TextField label="Email" fullWidth />
            <TextField label="Username" fullWidth />
            <TextField
              label="Short Bio"
              multiline
              rows={2}
              fullWidth
              placeholder="Tell us a bit about yourself"
            />
            <Button variant="contained" color="primary" fullWidth>
              Save
            </Button>
          </Stack>
        </CardContent>
      </Card>
    ),
    code: `
<Card
  sx={{
    maxWidth: 500,
    backgroundColor: '#f9f9f9',
    border: '1px solid #ddd',
    padding: 3,
    borderRadius: 2,
  }}
>
  <CardContent>
    <Typography variant="h5" gutterBottom>
      Update Your Info
    </Typography>
    <Stack spacing={3}>
      <Stack direction="row" spacing={2} alignItems="center">
        <Avatar
          src="https://i.pravatar.cc/80?img=2"
          sx={{ width: 64, height: 64 }}
        />
        <Button variant="outlined" color="primary">
          Change Photo
        </Button>
      </Stack>
      <TextField label="Name" fullWidth />
      <TextField label="Email" fullWidth />
      <TextField label="Username" fullWidth />
      <TextField
        label="Short Bio"
        multiline
        rows={2}
        fullWidth
        placeholder="Tell us a bit about yourself"
      />
      <Button variant="contained" color="primary" fullWidth>
        Save
      </Button>
    </Stack>
  </CardContent>
</Card>
    `,
  },
  {
    jsx: (
      <Card
        key="edit3"
        sx={{
          maxWidth: 600,
          padding: 4,
          backgroundColor: 'white',
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
          borderRadius: 2,
        }}
      >
        <CardContent>
          <Typography variant="h6" mb={2}>
            Edit Account Details
          </Typography>
          <Stack spacing={2}>
            <TextField label="Full Name" variant="filled" fullWidth />
            <TextField label="Email Address" variant="filled" fullWidth />
            <TextField label="Username" variant="filled" fullWidth />
            <TextField
              label="Bio"
              multiline
              rows={4}
              fullWidth
              variant="filled"
              placeholder="Share something about yourself"
            />
            <Stack direction="row" justifyContent="flex-end" spacing={2}>
              <Button variant="outlined" color="secondary">
                Cancel
              </Button>
              <Button variant="contained" color="primary">
                Save
              </Button>
            </Stack>
          </Stack>
        </CardContent>
      </Card>
    ),
    code: `
<Card
  sx={{
    maxWidth: 600,
    padding: 4,
    backgroundColor: 'white',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    borderRadius: 2,
  }}
>
  <CardContent>
    <Typography variant="h6" mb={2}>
      Edit Account Details
    </Typography>
    <Stack spacing={2}>
      <TextField label="Full Name" variant="filled" fullWidth />
      <TextField label="Email Address" variant="filled" fullWidth />
      <TextField label="Username" variant="filled" fullWidth />
      <TextField
        label="Bio"
        multiline
        rows={4}
        fullWidth
        variant="filled"
        placeholder="Share something about yourself"
      />
      <Stack direction="row" justifyContent="flex-end" spacing={2}>
        <Button variant="outlined" color="secondary">
          Cancel
        </Button>
        <Button variant="contained" color="primary">
          Save
        </Button>
      </Stack>
    </Stack>
  </CardContent>
</Card>
    `,
  },
  {
    jsx: (
      <Card
        key="edit4"
        sx={{
          maxWidth: 450,
          padding: 3,
          borderRadius: 3,
          backgroundColor: '#fafafa',
          border: '1px solid #ddd',
        }}
      >
        <CardContent>
          <Typography variant="h5" mb={3}>
            Profile Settings
          </Typography>
          <Stack spacing={2}>
            <TextField label="Full Name" size="small" fullWidth />
            <TextField label="Email" size="small" fullWidth />
            <TextField label="Username" size="small" fullWidth />
            <TextField
              label="About Me"
              size="small"
              multiline
              rows={3}
              fullWidth
            />
            <Button variant="contained" color="success" fullWidth>
              Update Profile
            </Button>
          </Stack>
        </CardContent>
      </Card>
    ),
    code: `
<Card
  sx={{
    maxWidth: 450,
    padding: 3,
    borderRadius: 3,
    backgroundColor: '#fafafa',
    border: '1px solid #ddd',
  }}
>
  <CardContent>
    <Typography variant="h5" mb={3}>
      Profile Settings
    </Typography>
    <Stack spacing={2}>
      <TextField label="Full Name" size="small" fullWidth />
      <TextField label="Email" size="small" fullWidth />
      <TextField label="Username" size="small" fullWidth />
      <TextField
        label="About Me"
        size="small"
        multiline
        rows={3}
        fullWidth
      />
      <Button variant="contained" color="success" fullWidth>
        Update Profile
      </Button>
    </Stack>
  </CardContent>
</Card>
    `,
  },
  {
    jsx: (
      <Card
        key="edit5"
        sx={{
          maxWidth: 400,
          backgroundColor: '#ffffff',
          padding: 4,
          borderRadius: 2,
          border: '1px solid #ccc',
        }}
      >
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Edit Info
          </Typography>
          <Stack spacing={2}>
            <TextField label="Name" variant="outlined" fullWidth />
            <TextField label="Email" variant="outlined" fullWidth />
            <TextField label="Username" variant="outlined" fullWidth />
            <TextField
              label="Personal Bio"
              multiline
              rows={3}
              fullWidth
              variant="outlined"
            />
            <Stack direction="row" spacing={2} justifyContent="center">
              <Button variant="outlined" color="secondary">
                Reset
              </Button>
              <Button variant="contained" color="primary">
                Submit
              </Button>
            </Stack>
          </Stack>
        </CardContent>
      </Card>
    ),
    code: `
<Card
  sx={{
    maxWidth: 400,
    backgroundColor: '#ffffff',
    padding: 4,
    borderRadius: 2,
    border: '1px solid #ccc',
  }}
>
  <CardContent>
    <Typography variant="h6" gutterBottom>
      Edit Info
    </Typography>
    <Stack spacing={2}>
      <TextField label="Name" variant="outlined" fullWidth />
      <TextField label="Email" variant="outlined" fullWidth />
      <TextField label="Username" variant="outlined" fullWidth />
      <TextField
        label="Personal Bio"
        multiline
        rows={3}
        fullWidth
        variant="outlined"
      />
      <Stack direction="row" spacing={2} justifyContent="center">
        <Button variant="outlined" color="secondary">
          Reset
        </Button>
        <Button variant="contained" color="primary">
          Submit
        </Button>
      </Stack>
    </Stack>
  </CardContent>
</Card>
    `,
  },
];

export default EditUserInfoCards;