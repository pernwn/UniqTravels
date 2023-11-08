//{Kodet af: Victoria}

import SearchResult from "./searchResults";

import Paper from "@mui/material/Paper";

export default function SearchResultsList({ results }) {
  
    return (


        <Paper className="searchResults" sx={{ backgroundColor: customTheme => customTheme.palette.background.paper}}>
            {results.map((result, id) => {
                return <SearchResult result={result.country} key={id} />;
            })}

        </Paper>


    );
}
