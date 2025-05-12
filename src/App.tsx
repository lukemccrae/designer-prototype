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
  Stack,
  Divider,
} from '@mui/material';

import blogCardVariants from './examples/blogcards';

export default function App() {
  const [index, setIndex] = useState(0);

  const handleNext = () => setIndex((prev) => (prev + 1) % blogCardVariants.length);
  const handlePrev = () => setIndex((prev) => (prev - 1 + blogCardVariants.length) % blogCardVariants.length);

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh', // Full viewport height
        width: '100vw',
        padding: 2,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          maxWidth: '600px',
          width: '100%',
        }}
      >
        <Typography variant="h4" gutterBottom>
          Prototype {index + 1}
        </Typography>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
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
              justifyContent: 'center',
              alignItems: 'center',
              maxWidth: '800px',
              maxHeight: '800px',
              overflow: 'hidden',
              border: '1px solid #ddd',
              borderRadius: '8px',
              padding: 2,
            }}
          >
            {blogCardVariants[index]}
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