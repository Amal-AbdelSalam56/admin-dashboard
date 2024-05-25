import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Box,  } from '@mui/material';
import { columns, rows } from '../contacts/data';

export default function Invoices() {

  return (
    <Box sx={{ height: 490, width: '98%', mx: "auto" }}>
    <DataGrid 
           checkboxSelection     // هنا عشان اخلى ان يكون فيه تحديد للصف عشان احذفه او اى حاجة    
       
     slots={{
        toolbar: GridToolbar,   //  ده عشان افلتر الداتا فوق الجدول
      }}

    rows={rows}
      // @ts-ignore
      columns={columns} />
  </Box>
  )
}
