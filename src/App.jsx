import Feed from "./Components/Feed";
import SideBar from "./Components/SideBar";
import RightBar from "./Components/RightBar";
import { Box, Stack } from "@mui/material";
import NavBar from "./Components/NavBar";
import AddButton from "./Components/AddButton";


function App() {
  return (
    <Box>
      <NavBar />
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <SideBar />
        <Feed />
        <RightBar />
      </Stack>
      <AddButton/>
    </Box>
  );
}

export default App;
