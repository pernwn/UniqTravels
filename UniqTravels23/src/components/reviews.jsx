import { addDoc, collection, deleteDoc, doc, onSnapshot } from "@firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase-config";
import { MainBtn } from "./cards";
import { Box, List, ListItem, Typography } from "@mui/material";

export default function ComReviews() {
    const [data, setData] = useState([]);
    const [user, setUser] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [location, setLocation] = useState("");
    const [rating, setRating] = useState(0);

    const [sorting, setSorting] = useState("rating")


    useEffect(() => {
        async function fetchData() {
            onSnapshot(collection(db, "community-reviews"), data => {
                const docs = [];
                data.forEach((doc) => {
                    docs.push({ id: doc.id, ...doc.data() });
                });
                console.log("useEffect");

                docs.sort(function (a, b) {
                    if (a[sorting] < b[sorting]) {
                        return -1;
                    }
                    if (a[sorting] > b[sorting]) {
                        return 1
                    }
                    return 0;
                });

                setData(docs);

            });
        }
        fetchData();

    }, [sorting]);


    async function addReview(e) {
        e.preventDefault(); //forhindrer reload af siden

        const newReview = {
            user: user, //variablen til højre er det som brugeren har indtastet
            title: title,
            description: description,
            location: location,
            rating: rating,
        }

        try { //laver opdatering TODO: pop up beskeder i stedet for console log
            const ratingRef = await addDoc(collection(db, "community-reviews"), newReview);//når bruger opretter ny vare, oprettes nyt dokument i firebase shoppingliste collection
            console.log("A review has neen added with ID: ", ratingRef.id);
        } catch (e) {
            console.error("ERROR – Could not add review: ", e)
        }
    }

    async function deleteReview(e) { //TODO: prøv at finde ud af at gøre sådan at man kun kan slette sine egne reviews.......
        const ratingId = e.currentTarget.getAttribute("data-id");

        try {
            const ratingRef = doc(db, "community-reviews", ratingId);
            await deleteDoc(ratingRef);
            console.log("The review was deleted");
        } catch (e) {
            console.error("ERROR – the review could not be deleted: ", e);
        }
    }

    // De følgende to funktioner skifter sorteringsfelt.
    function sortByRating() {
        setSorting("rating");
    }

    function sortByLocation() {
        setSorting("location");
    }

    return (
        <>
            <MainBtn name="Sort by rating" onClick={sortByRating} />
            <MainBtn name="Sort by location" onClick={sortByLocation} />

            <Typography variant="h4">Reviews</Typography>
            <List>
                {data.map((item) => (
                    <ListItem key={item.id}>
                        <span>{item.title}</span>
                        <span>{item.location}</span>
                        <span>{item.user}</span>
                        <span>{item.description}</span>
                        <span>{item.rating}</span>
                        <MainBtn name="Delete review" data-id={item.id} onclick={deleteReview}></MainBtn>
                    </ListItem>
                ))}

            </List>


                <Box
                    component="form"
                >




                </Box>


        </>
    );
}


/*            <form onSubmit={addReview}>
                <h2>Add review</h2>
                <label>Title: </label><input type="text" value={title} onChange={e => setTitle(e.target.value)} required />
                <label>Location: </label><input type="number" value={location} onChange={e => setLocation(e.target.value)} required />
                <label>User: </label><input type="number" value={user} onChange={e => setUser(e.target.value)} required />
                <label>Description: </label><input type="number" value={description} onChange={e => setDescription(e.target.value)} required />
                <label>Rating: </label><input type="number" value={rating} onChange={e => setRating(e.target.value)} required />
                
                <button>Add review</button>
            </form> */