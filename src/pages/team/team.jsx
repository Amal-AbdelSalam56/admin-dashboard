import { DataGrid } from "@mui/x-data-grid";
import { rows } from "./data";
import { Box, Typography, useTheme } from '@mui/material';
import { AdminPanelSettingsOutlined, LocalActivityOutlined, SecurityOutlined } from "@mui/icons-material";





const Team = () => {

  const theme = useTheme();


  const columns = [
    { field: 'id',    headerName: 'id', width: 33, align: "center", headerAlign: "center" },
    { field: 'name',  headerName: 'name', align: "center", headerAlign: "center" },
    { field: 'email', headerName: 'email', flex: 1, align: "center", headerAlign: "center" },
    { field: 'age',   headerName: 'age', align: "center", headerAlign: "center" },
    { field: 'phone', headerName: 'phone', flex: 1, align: "center", headerAlign: "center" },
    { field: 'access',headerName: "Access",flex: 1, align: "center", headerAlign: "center",
      renderCell: ({row : {access}}) => {          //   renderCell ده عشان اقدر اضيف ستايل جوا العمود 
        return (
          <Box
           sx={{
            alignItems: "center",
            p: "5px",
            margin: "auto",
            marginTop: "9px",
            justifyContent: "space-evenly",
            textAlign: "center",
            width: "99px",
            borderRadius: "5px",
            display:"flex",
            backgroundColor: access ==="Admin" 
            ? theme.palette.primary.dark 
             : access ==="manager" 
             ? theme.palette.secondary.dark 
             : "grey" ,
          }}>
            {access ==="Admin" && (
              <AdminPanelSettingsOutlined fontSize="small" sx={{color:"#fff"}}/>
            )}
            {access ==="manager" && (
              <SecurityOutlined fontSize="small" sx={{color:"#fff"}}/>
            )}
            {access ==="user" && (
              <LocalActivityOutlined fontSize="small" sx={{color:"#fff"}}/>
            )}
            
            <Typography sx={{fontSize:"15px" ,color:"#fff"}}> {access} </Typography>
          </Box>
        );
      },
    },
  ];

  return (
    
      <Box sx={{ height: 650, width: '98%' , mx:"auto" }}>
        <DataGrid rows={rows}
          // @ts-ignore
          columns={columns} />
    </Box>
  )
}
export default Team;