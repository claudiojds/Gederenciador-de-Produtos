import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";


interface Props{
    texto: string
}

const CategoryList = ({texto}: Props) => {
    const rows = [
        {
            id: "1",
          name: 'Teclado'
        }  
      ];
  
      return (
          <div>
              <h3>{texto}</h3>
          
          <TableContainer  component={Paper}>
                  <Table sx={{ Width: 200 }} size="small" aria-label="a dense table" >
                  <TableHead>
                      <TableRow>
                      <TableCell style={{fontWeight: "bold"}}>Id</TableCell>
                      <TableCell style={{fontWeight: "bold"}}>
                          Nome
                      </TableCell>
                      </TableRow>
                  </TableHead>
                  <TableBody>
                      {rows.map((row) => (
                      <TableRow
                          key={row.id}
                          sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                      >
                        <TableCell >{row.id}</TableCell>
                        <TableCell component="th" scope="row">
                            {row.name}
                        </TableCell>
                          
                      </TableRow>
                      ))}
                  </TableBody>
                  </Table>
          </TableContainer>
          </div>
      );
};

export default CategoryList;

