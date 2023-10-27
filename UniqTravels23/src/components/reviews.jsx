import { useEffect, useState } from "react";

export default function ComReviews(){
    const [data, setData] = useState([]);
    const [user, setUser] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [rating, setRating] = useState(0);

    const [sorting, setSorting] = useState("rating")


    useEffect(() => {
        async function fetchData(){
            onSnapchot(collection(db, "community-reviews"), data => {
                const docs = [];
                data.forEach((doc) => {
                    docs.push({id: doc.id, ...doc.data() });
                });
                console.log("useEffect");

                docs.sort(function (a, b) {
                    if(a[sorting] < b[sorting]) {
                        return -1;
                    }
                    if (a[sorting] > b[sorting]){
                        return 1
                    }
                    return 0;
                });

                setData(docs);
                
            });
        }
        fetchData();

    }, [sorting]);


    async function addReview(e){
        e.preventDefault(); //forhindrer reload af siden

        const newReview = {
            user: user, //variablen til højre er det som brugeren har indtastet
            title: title,
            description: description,
            rating:rating
        }

        try{ //laver opdatering
            const ratingRef = await addDoc(collection(db, "community-reviews"), newReview);
            console.log("A review has neen added with ID: ", ratingRef.id);
        }
    }
}


