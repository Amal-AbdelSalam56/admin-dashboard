import { DownloadingOutlined } from "@mui/icons-material";
import Row1 from "./Row1";
import Row2 from "./Row2";
import Row3 from "./Row3";
import { Box, Button } from '@mui/material';

const Dashboard = () => {
  return (
    <div>
      <Box sx={{textAlign:"right" , marginBottom:"20px"}}>
        <Button  sx={{textTransform:"capitalize"  }} variant="contained" color="primary" >
          <DownloadingOutlined />
          Download Reports
        </Button>
      </Box>

      <Row1 />
      <Row2 />
      <Row3 />
    </div>
  )
}
export default Dashboard;