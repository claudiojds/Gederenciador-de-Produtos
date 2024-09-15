import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";


interface Props {
  texto: string;
}

const ProductList = ({ texto }: Props) => {
      
    const rows = [
      {
        id: "1",
        name: 'Teclado',
        category: 'Inormática',
        price: 35,
        quant: 10
      }  
    ];

    return (
        <div>
            <h3>{texto}</h3>
        
        <TableContainer  component={Paper} sx={{ minWidth: 700 }}>
                <Table sx={{ minWidth: 600 }} size="small" aria-label="a dense table" >
                <TableHead>
                    <TableRow>
                        <TableCell style={{fontWeight: "bold"}}>ID</TableCell>
                        <TableCell style={{fontWeight: "bold"}}>
                            Nome
                        </TableCell>
                        <TableCell align="right" style={{fontWeight: "bold"}}>Categoria</TableCell>
                        <TableCell align="right" style={{fontWeight: "bold"}}>Preço</TableCell>
                        <TableCell align="right" style={{fontWeight: "bold"}}>Quantidade</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                    <TableRow
                        key={row.id}
                        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                        <TableCell >{row.id}</TableCell>
                        <TableCell component="th" scope="row" >
                            {row.name}
                        </TableCell>
                        <TableCell align="right">{row.category}</TableCell>
                        <TableCell align="right">R$ {row.price}</TableCell>
                        <TableCell align="right">{row.quant}</TableCell>
                    </TableRow>
                    ))}
                </TableBody>
                </Table>
        </TableContainer>
        </div>
    );
};

export default ProductList;
