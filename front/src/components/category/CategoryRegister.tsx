import { Button, TextField } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

interface Props {
  texto: string;
}

const CategoryResgister = ({ texto }: Props) => {
  return (
    <Card>
      <CardContent>
        <div style={{fontWeight: "bold"}}>
            {texto}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "14px",
            marginTop: "10px",
          }}
        >
          <div>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Nome"
              variant="outlined"
            />
          </div>
          
          <div>
            <Button variant="contained">Salvar</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CategoryResgister;
