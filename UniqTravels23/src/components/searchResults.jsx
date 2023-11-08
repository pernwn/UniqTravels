//{Kodet af: Victoria}

import { Typography } from "@mui/material";

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