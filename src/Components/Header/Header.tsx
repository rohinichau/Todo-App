import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  const handleSignOut = () => {
    sessionStorage.clear();
    navigate("/login");
  };
  return (
    <Box sx={{ flexGrow: 1, paddingBottom: "50px" }}>
      <AppBar position="static" sx={{ backgroundColor: "#ed6c02" }}>
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            To-Do List App
          </Typography>

          <Button
            data-cy="signOut"
            sx={{ color: "white", fontSize: "15px", marginLeft: "auto" }}
            variant="text"
            onClick={handleSignOut}
          >
            Signout
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
