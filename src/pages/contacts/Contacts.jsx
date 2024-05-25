import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Box,  } from '@mui/material';
import { columns, rows } from './data';


const Contacts = () => {

  return (
    <Box sx={{ height: 490, width: '98%', mx: "auto" }}>
      <DataGrid 

         slots={{
          toolbar: GridToolbar,   //  ده عشان افلتر الداتا فوق الجدول
        }}

      rows={rows}
        // @ts-ignore
        columns={columns} />
    </Box>
  )
}
export default Contacts;