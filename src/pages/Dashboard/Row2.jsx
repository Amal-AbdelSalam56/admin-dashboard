import { Box, Paper, Stack, Typography, useTheme } from "@mui/material";
import Linechart from "../../pages/Line/Linechart";

const Row2 = () => {
  const Theme = useTheme();

  return (
    <Stack direction={"row"} flexWrap={"wrap"} gap={1} >
      <Paper sx={{ maxWidth: 900, flexGrow: 1 }}>
       <Linechart inDashboard={true} />
      </Paper>

      <Box sx={{ height: 350 , flexGrow: 1 }}>
      <Paper >
       <Typography color={Theme.palette.secondary.main}
       fontWeight={"bold"}
       p={1.2}
       variant="h6">
        Recent Tranactions
       </Typography>
      </Paper>

      </Box>

    </Stack>
  )
}
export default Row2;