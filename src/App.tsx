import React, { useState } from 'react';
import { Box, Button, Typography, FormControl, InputLabel, Select } from '@mui/material';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import BlogCardVariants from './examples/blogcards';
import AthleticFeedPosts from './examples/athleticfeed';

export default function App() {
  const [index, setIndex] = useState(0);

  const handleNext = () => setIndex((prev) => (prev + 1) % AthleticFeedPosts.length);
  const handlePrev = () => setIndex((prev) => (prev - 1 + AthleticFeedPosts.length) % AthleticFeedPosts.length);


  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'start',
        minHeight: '100vh',
        width: '100vw',
        padding: 2,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <Typography variant="h4" gutterBottom>
          Blog Card Prototype {index + 1}
        </Typography>
        {/* <FormControl sx={{ marginBottom: 4, minWidth: 200 }}>
          <InputLabel id="example-select-label">Choose Example</InputLabel>
          <Select
            labelId="example-select-label"
            value={index}
            onChange={handleSelect}
            label="Choose Example"
          >
            {['BlogCardVariants', 'AthleticFeedPosts']}
          </Select>
        </FormControl> */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            gap: 4,
            mt: 4,
            width: '100%',
          }}
        >
          {/* Left Column: Previous Button */}
          <Box
            sx={{
              flex: 1,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Button variant="outlined" onClick={handlePrev}>
              Previous
            </Button>
          </Box>

          {/* Middle Column: Card Design */}
          <Box
            sx={{
              flex: 2,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 2,
              overflow: 'hidden',
              padding: 2,
            }}
          >
            {AthleticFeedPosts[index].jsx}

            {/* Code Viewer */}
            <Box
              sx={{
                mt: 4,
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
                {AthleticFeedPosts[index].code}
              </SyntaxHighlighter>
            </Box>
          </Box>

          {/* Right Column: Next Button */}
          <Box
            sx={{
              flex: 1,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Button variant="outlined" onClick={handleNext}>
              Next
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}