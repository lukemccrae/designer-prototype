import React, { useState } from 'react';
import {
  Box,
  Button,
  Typography,
} from '@mui/material';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import CoffeeMenuVariants from './examples/coffeemenu';

export default function App() {
  const [index, setIndex] = useState(0);

  const handleNext = () => setIndex((prev) => (prev + 1) % CoffeeMenuVariants.length);
  const handlePrev = () => setIndex((prev) => (prev - 1 + CoffeeMenuVariants.length) % CoffeeMenuVariants.length);

  const getCodeForCard = (component: React.ReactNode) => {
    return `
import React from 'react';
import { Card, CardContent, Typography, Avatar, Stack, Divider, Button, Box, CardMedia } from '@mui/material';

const Example = () => (
  ${React.Children.toArray(component).map((child) => child).toString()}
);

export default Example;
    `;
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
          Coffee Menu Prototype {index + 1}
        </Typography>
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
            {CoffeeMenuVariants[index]}

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
                {getCodeForCard(CoffeeMenuVariants[index])}
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