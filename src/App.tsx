import React, { useState, type JSX } from 'react';
import { Box, Button, Typography, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import BlogCardVariants from './examples/blogcards';
import AthleticFeedPosts from './examples/athleticfeed';
import LiveUserCards from './examples/liveprofile';
import EditUserInfoCards from './examples/userInfoCards'; // Ensure this is correctly imported
import ProfileHeaderViews from './examples/profileHeaderViews';

const exampleSets: Record<string, { jsx: JSX.Element; code: string }[]> = {
  BlogCardVariants,
  AthleticFeedPosts,
  LiveUserCards,
  EditUserInfoCards,
  ProfileHeaderViews
};

export default function App() {
  const [exampleType, setExampleType] = useState<keyof typeof exampleSets>('BlogCardVariants');
  const [index, setIndex] = useState(0);

  const currentExamples = exampleSets[exampleType]; // Make sure `exampleType` matches a key in `exampleSets`

  const handleNext = () => setIndex((prev) => (prev + 1) % currentExamples.length);
  const handlePrev = () => setIndex((prev) => (prev - 1 + currentExamples.length) % currentExamples.length);
  const handleSelect = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setExampleType(event.target.value as keyof typeof exampleSets);
    setIndex(0); // Reset index to 0 when switching examples
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'start',
        minHeight: '100vh',
        width: '100vw',
        padding: 2,
        backgroundColor: '#1e1e2f', // Light background for the app
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
          maxWidth: '600px', // Constrain width for better mobile responsiveness
        }}
      >
        <Typography variant="h4" gutterBottom>
          Example Viewer: {exampleType} - Example {index + 1}
        </Typography>
        <FormControl
          sx={{
            marginBottom: 2,
            minWidth: 200,
            backgroundColor: 'white', // Light background for the dropdown
            borderRadius: '4px',
          }}
        >
          <InputLabel
            id="example-select-label"
            sx={{
              backgroundColor: 'white', // Matches dropdown
              padding: '0 4px',
              color: 'black', // Dark text for contrast
            }}
          >
            Choose Example
          </InputLabel>
          <Select
            labelId="example-select-label"
            value={exampleType}
            onChange={handleSelect}
            label="Choose Example"
            sx={{
              backgroundColor: 'white',
              color: 'black', // Text color
              '.MuiSvgIcon-root': {
                color: 'black', // Arrow icon color
              },
              '&:hover': {
                backgroundColor: '#f0f0f0', // Hover effect
              },
            }}
            MenuProps={{
              PaperProps: {
                sx: {
                  backgroundColor: 'white', // Background for dropdown menu
                  color: 'black', // Text color for menu items
                },
              },
            }}
          >
            <MenuItem value="BlogCardVariants">Blog Card Variants</MenuItem>
            <MenuItem value="AthleticFeedPosts">Athletic Feed Posts</MenuItem>
            <MenuItem value="LiveUserCards">Live User Cards</MenuItem>
            <MenuItem value="EditUserInfoCards">Edit User Info</MenuItem>
            <MenuItem value="ProfileHeaderViews">Profile Header Views</MenuItem>
          </Select>
        </FormControl>

        {/* Buttons Row */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            marginBottom: 2, // Add spacing between buttons and demo example
          }}
        >
          <Button variant="outlined" onClick={handlePrev} sx={{ flex: 1, marginRight: 1 }}>
            Previous
          </Button>
          <Button variant="outlined" onClick={handleNext} sx={{ flex: 1, marginLeft: 1 }}>
            Next
          </Button>
        </Box>

        {/* Demo Example */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 2,
            overflow: 'hidden',
            padding: 2,
            width: '100%',
          }}
        >
          {currentExamples[index]?.jsx}

          {/* Code Viewer */}
          <Box
            sx={{
              mt: 2,
              width: '100%',
              maxHeight: 400,
              overflowY: 'auto',
              border: '1px solid #ddd',
              borderRadius: '8px',
              padding: 2,
              backgroundColor: '#282a36',
            }}
          >
            <SyntaxHighlighter language="jsx" style={dracula} wrapLongLines>
              {currentExamples[index]?.code || ''}
            </SyntaxHighlighter>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}