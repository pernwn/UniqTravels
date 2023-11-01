import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";



export default function BackBtn() {
    const navigate = useNavigate();
    
    return(
        <>
            <Button onClick={() => navigate(-1)}>Back</Button>
        </>
    )
}