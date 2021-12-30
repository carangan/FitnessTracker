import { Box } from "@mui/material";

const PageLayout = ({ children }) => {
  const navBarWidth = 240;
  const paddingWidth = 1.5; // in em units

  return (
    <Box
      component="main"
      sx={{ 
        flexGrow: 1, 
        p: paddingWidth,
        width: { sm: `calc(100% - ${navBarWidth}px - ${paddingWidth}em)` },
        ml: { sm: `${navBarWidth}px` }
      }}>
      { children }
    </Box>
  );
};

export default PageLayout;