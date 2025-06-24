import React, { useState, useEffect, useRef } from 'react';
import {
  CssBaseline,
  Box,
  AppBar,
  Toolbar,
  Typography,
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  IconButton,
  Slide,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import MenuIcon from '@mui/icons-material/Menu';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';

// Main App Component
const App = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const presentationRef = useRef(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const slides = [
    {
      title: "Creating a React Project with Vite",
      content: (
        <Box>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Vite is a next-generation frontend tooling that focuses on speed and developer experience.
          </Typography>
          <Box
            component="pre"
            sx={{
              backgroundColor: '#1f2937', // Dark background for code
              color: '#34d399', // Greenish text for code
              p: 2,
              borderRadius: '8px',
              overflowX: 'auto',
              boxShadow: 3,
            }}
          >
            <code>
              {`# Step 1
npm create vite@latest my-react-app -- --template react
cd my-react-app
npm install
npm run dev`}
            </code>
          </Box>
          <Typography variant="body1" sx={{ mt: 2 }}>
            This creates a new React project using Vite.
          </Typography>
        </Box>
      ),
    },
    {
      title: "Understanding Vite.js",
      content: (
        <Box>
          <List sx={{ listStyleType: 'disc', pl: 2 }}>
            <ListItem sx={{ display: 'list-item' }}>
              <Typography variant="body1" component="span" sx={{ fontWeight: 'bold' }}>Fast Server Start:</Typography> Native ES Modules mean instant cold start
            </ListItem>
            <ListItem sx={{ display: 'list-item' }}>
              <Typography variant="body1" component="span" sx={{ fontWeight: 'bold' }}>HMR:</Typography> Hot Module Replacement keeps state intact
            </ListItem>
            <ListItem sx={{ display: 'list-item' }}>
              <Typography variant="body1" component="span" sx={{ fontWeight: 'bold' }}>Optimized Build:</Typography> Uses Rollup under the hood
            </ListItem>
            <ListItem sx={{ display: 'list-item' }}>
              <Typography variant="body1" component="span" sx={{ fontWeight: 'bold' }}>Pre-configured:</Typography> Works out of the box with React, Vue, etc.
            </ListItem>
            <ListItem sx={{ display: 'list-item' }}>
              <Typography variant="body1" component="span" sx={{ fontWeight: 'bold' }}>Plugin Ecosystem:</Typography> Extensible and powerful
            </ListItem>
          </List>
        </Box>
      ),
    },
    {
      title: "Core Files - index.html & main.jsx",
      content: (
        <Box>
          <List sx={{ listStyleType: 'disc', pl: 2, mb: 2 }}>
            <ListItem sx={{ display: 'list-item' }}>
              <Typography variant="body1" component="span" sx={{ fontWeight: 'bold' }}>index.html:</Typography> Contains &lt;div id="root"&gt; and links <code>main.jsx</code>
            </ListItem>
            <ListItem sx={{ display: 'list-item' }}>
              <Typography variant="body1" component="span" sx={{ fontWeight: 'bold' }}>main.jsx:</Typography> Renders the React app into the root element
            </ListItem>
          </List>
          <Box
            component="pre"
            sx={{
              backgroundColor: '#1f2937',
              color: '#34d399',
              p: 2,
              borderRadius: '8px',
              overflowX: 'auto',
              boxShadow: 3,
            }}
          >
            <code>
              {`// main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
ReactDOM.createRoot(document.getElementById('root')).render(<App />);`}
            </code>
          </Box>
        </Box>
      ),
    },
    {
      title: "Simple Click Button",
      content: (
        <Box>
          <Typography variant="body1" sx={{ mb: 2 }}>
            This example logs a message to the console when the button is clicked.
          </Typography>
          <Button
            variant="contained"
            color="success"
            sx={{
              py: 1.5,
              px: 3,
              borderRadius: '8px',
              fontSize: '1rem',
              boxShadow: 3,
              '&:hover': {
                backgroundColor: '#059669', // Darker green on hover
                transform: 'scale(1.05)',
              },
              transition: 'transform 0.3s ease-in-out',
            }}
            onClick={() => console.log('Button is clicked!')}
          >
            Click here
          </Button>
          <Typography variant="caption" display="block" sx={{ color: 'gray', mt: 1 }}>
            (Open your browser console to see the log)
          </Typography>
        </Box>
      ),
    },
    {
      title: "Quick Quiz!",
      content: (
        <Box>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>1. Which command creates a Vite project?</Typography>
          <List sx={{ listStyle: 'none', p: 0, mb: 3 }}>
            <ListItem disablePadding>
              <label style={{ display: 'flex', alignItems: 'center', fontSize: '1.125rem', color: '#4b5563' }}>
                <input type="radio" name="q1" style={{ marginRight: '8px' }} />
                npm create react-app
              </label>
            </ListItem>
            <ListItem disablePadding>
              <label style={{ display: 'flex', alignItems: 'center', fontSize: '1.125rem', color: '#4b5563' }}>
                <input type="radio" name="q1" style={{ marginRight: '8px' }} />
                create-react-app my-app
              </label>
            </ListItem>
            <ListItem disablePadding>
              <label style={{ display: 'flex', alignItems: 'center', fontSize: '1.125rem', color: '#4b5563' }}>
                <input type="radio" name="q1" style={{ marginRight: '8px' }} defaultChecked />
                <Typography component="span" sx={{ fontWeight: 'bold' }}>npm create vite@latest</Typography>
              </label>
            </ListItem>
          </List>

          <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>2. What is a key feature of Vite's development server?</Typography>
          <List sx={{ listStyle: 'none', p: 0 }}>
            <ListItem disablePadding>
              <label style={{ display: 'flex', alignItems: 'center', fontSize: '1.125rem', color: '#4b5563' }}>
                <input type="radio" name="q2" style={{ marginRight: '8px' }} />
                Uses Webpack
              </label>
            </ListItem>
            <ListItem disablePadding>
              <label style={{ display: 'flex', alignItems: 'center', fontSize: '1.125rem', color: '#4b5563' }}>
                <input type="radio" name="q2" style={{ marginRight: '8px' }} defaultChecked />
                <Typography component="span" sx={{ fontWeight: 'bold' }}>Uses native ES Modules</Typography>
              </label>
            </ListItem>
            <ListItem disablePadding>
              <label style={{ display: 'flex', alignItems: 'center', fontSize: '1.125rem', color: '#4b5563' }}>
                <input type="radio" name="q2" style={{ marginRight: '8px' }} />
                Requires manual config
              </label>
            </ListItem>
          </List>
        </Box>
      ),
    },
    {
      title: "Thank You!",
      content: (
        <Box>
          <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold' }}>
            We hope this presentation helped you understand how React and Vite work together.
          </Typography>
          <Typography variant="h4" color="primary" sx={{ fontWeight: 'extrabold' }}>
            Happy coding! 🚀💻✨
          </Typography>
        </Box>
      ),
    },
  ];

  const goToSlide = (index) => {
    if (index >= 0 && index < slides.length) {
      setCurrentSlideIndex(index);
      if (isMobile) {
        setIsSidebarOpen(false); // Close sidebar on slide selection for mobile
      }
    }
  };

  const nextSlide = () => {
    goToSlide(currentSlideIndex + 1);
  };

  const prevSlide = () => {
    goToSlide(currentSlideIndex - 1);
  };

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      presentationRef.current?.requestFullscreen().catch((err) => {
        console.error(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
      });
    } else {
      document.exitFullscreen();
    }
  };

  useEffect(() => {
    const handleFullScreenChange = () => {
      setIsFullScreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullScreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullScreenChange);
    document.addEventListener('mozfullscreenchange', handleFullScreenChange);
    document.addEventListener('MSFullscreenChange', handleFullScreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullScreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullScreenChange);
      document.removeEventListener('mozfullscreenchange', handleFullScreenChange);
      document.removeEventListener('MSFullscreenChange', handleFullScreenChange);
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (isFullScreen) {
        if (event.key === 'ArrowRight') {
          nextSlide();
        } else if (event.key === 'ArrowLeft') {
          prevSlide();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentSlideIndex, isFullScreen]);

  return (
    // MUI components and styling
    <Box
      ref={presentationRef}
      sx={{
        display: 'flex',
        height: '100vh',
        overflow: 'hidden',
        fontFamily: 'Inter, sans-serif',
        flexDirection: isFullScreen ? 'column' : { xs: 'column', md: 'row' },
        alignItems: isFullScreen ? 'center' : 'stretch',
        justifyContent: isFullScreen ? 'center' : 'stretch',
        backgroundColor: '#f3f4f6',
        '&:fullscreen': {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#f3f4f6',
        },
      }}
    >
      <CssBaseline />
      {/* AppBar for mobile in non-fullscreen mode */}
      {isMobile && !isFullScreen && (
        <AppBar position="static" sx={{ backgroundColor: '#1f2937' }}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              React Presentation
            </Typography>
            <IconButton color="inherit" onClick={toggleFullScreen}>
              {isFullScreen ? <FullscreenExitIcon /> : <FullscreenIcon />}
            </IconButton>
          </Toolbar>
        </AppBar>
      )}

      {/* Sidebar - always visible on desktop, toggleable on mobile */}
      {!isFullScreen && (
        <Box
          component="aside"
          sx={{
            width: { xs: '100%', md: '280px' },
            backgroundColor: '#1f2937',
            color: 'white',
            p: 3,
            overflowY: 'auto',
            boxShadow: 4,
            transition: 'transform 0.3s ease-in-out',
            transform: isMobile && !isSidebarOpen ? 'translateX(-100%)' : 'translateX(0)',
            position: { xs: 'absolute', md: 'relative' },
            height: { xs: '100%', md: 'auto' },
            zIndex: 1000,
            borderRadius: { md: '0 12px 12px 0' },
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 4, color: '#60a5fa' }}>
            React Presentation
          </Typography>
          <List>
            {slides.map((slide, index) => (
              <ListItem disablePadding key={index}>
                <ListItemButton
                  onClick={() => goToSlide(index)}
                  sx={{
                    py: 1.5,
                    px: 2,
                    mb: 1,
                    borderRadius: '8px',
                    transition: 'background-color 0.2s ease-in-out',
                    backgroundColor: currentSlideIndex === index ? '#2563eb' : 'transparent', // Active blue
                    color: currentSlideIndex === index ? 'white' : '#d1d5db',
                    '&:hover': {
                      backgroundColor: currentSlideIndex === index ? '#2563eb' : '#374151',
                      color: 'white',
                    },
                    boxShadow: currentSlideIndex === index ? 2 : 0,
                  }}
                >
                  <ListItemText primary={`${index + 1}: ${slide.title}`} sx={{ fontWeight: currentSlideIndex === index ? 'bold' : 'normal' }} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      )}

      {/* Main content area */}
      <Box
        component="main"
        sx={{
          flex: 1,
          p: { xs: 2, md: 4 },
          overflowY: 'auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: isFullScreen ? 'center' : 'flex-start',
          transition: 'padding 0.5s ease-in-out',
          position: 'relative',
          width: '100%',
          height: '100%',
          '&:fullscreen': {
            p: 0,
          },
        }}
      >
        {/* Full Screen Button for Desktop or if Sidebar is closed on Mobile*/}
        {!isMobile && (
          <Box sx={{ width: '100%', display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
            <Button
              variant="contained"
              color="secondary"
              startIcon={isFullScreen ? <FullscreenExitIcon /> : <FullscreenIcon />}
              onClick={toggleFullScreen}
              sx={{
                borderRadius: '8px',
                boxShadow: 3,
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  transform: 'scale(1.05)',
                },
              }}
            >
              {isFullScreen ? 'Exit Full Screen' : 'Full Screen'}
            </Button>
          </Box>
        )}
        {isMobile && isSidebarOpen && ( // Overlay for mobile sidebar
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0,0,0,0.5)',
              zIndex: 999,
            }}
            onClick={() => setIsSidebarOpen(false)}
          />
        )}
        {/* Current Slide Content */}
        <Slide direction="up" in={true} mountOnEnter unmountOnExit key={currentSlideIndex}>
          <Box
            sx={{
              backgroundColor: 'white',
              borderRadius: '12px',
              boxShadow: 6,
              p: { xs: 4, md: 6 },
              width: isFullScreen ? '90%' : { xs: '100%', md: '80%' },
              maxWidth: isFullScreen ? '1200px' : '800px',
              minHeight: isFullScreen ? 'auto' : '500px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: isFullScreen ? 'center' : 'flex-start',
              alignItems: isFullScreen ? 'center' : 'flex-start',
              overflow: 'auto',
              height: isFullScreen ? '85%' : 'auto', // Adjust height in full screen
              textAlign: isFullScreen ? 'center' : 'left',
              '&:fullscreen': {
                width: '90%',
                height: '90%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                overflow: 'auto',
              },
            }}
          >
            <Typography
              variant="h4"
              component="h2"
              sx={{
                fontWeight: 'extrabold',
                color: '#1f2937',
                mb: 3,
                borderBottom: '4px solid #3b82f6',
                pb: 1.5,
                width: '100%',
                textAlign: 'inherit',
              }}
            >
              Slide {currentSlideIndex + 1}: {slides[currentSlideIndex].title}
            </Typography>
            <Box sx={{ width: '100%', textAlign: 'inherit' }}>
              {slides[currentSlideIndex].content}
            </Box>
          </Box>
        </Slide>

        {/* Navigation Buttons (Next/Prev) */}
        <Box
          sx={{
            display: 'flex',
            mt: 4,
            gap: 2,
            position: isFullScreen ? 'absolute' : 'static',
            bottom: isFullScreen ? 32 : 'auto',
            width: isFullScreen ? '100%' : 'auto',
            justifyContent: 'center',
          }}
        >
          <Button
            variant="contained"
            color="primary"
            startIcon={<ArrowBackIcon />}
            onClick={prevSlide}
            disabled={currentSlideIndex === 0}
            sx={{
              borderRadius: '9999px', // Full rounded corners
              py: 1.5,
              px: 3,
              boxShadow: 3,
              transition: 'transform 0.3s ease-in-out',
              '&:hover': { transform: 'scale(1.05)' },
            }}
          >
            Previous
          </Button>
          <Button
            variant="contained"
            color="primary"
            endIcon={<ArrowForwardIcon />}
            onClick={nextSlide}
            disabled={currentSlideIndex === slides.length - 1}
            sx={{
              borderRadius: '9999px',
              py: 1.5,
              px: 3,
              boxShadow: 3,
              transition: 'transform 0.3s ease-in-out',
              '&:hover': { transform: 'scale(1.05)' },
            }}
          >
            Next
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default App;
