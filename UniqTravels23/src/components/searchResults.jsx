import { Typography } from "@mui/material";
import "../styles/vic.css"
export default function SearchResult ({ result }){
  return (
    <Typography
      className="search-result"
      onClick={() => alert(`You selected ${result}!`)}
    >
      {result}
    </Typography>
  );
}