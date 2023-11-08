//import { /*addDoc,*/ collection, onSnapshot } from "@firebase/firestore";
//import { useEffect, useState } from "react";
//import { db } from "../firebase-config";

//import { Avatar, Button, Divider, FormGroup, Rating, Stack, TextField, Typography
//Paper} from "@mui/material";
//import Paper from '@mui/material/Paper';
import "../styles/vic.css"
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
