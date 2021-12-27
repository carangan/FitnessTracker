import { Box } from "@mui/material";

const PageLayout = ({ children }) => {
  return (
    <Box
      component="main"
      sx={{ 
        flexGrow: 1, 
        p: 3, 
        width: { sm: `calc(100% - ${240}px)` },
        ml: { sm: `${240}px` }
      }}>
      { children }
    </Box>
  );
};

export default PageLayout;