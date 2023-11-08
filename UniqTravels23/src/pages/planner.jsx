
import ComReviews from "../components/reviews";
import "../styles/vic.css"


//vi har ændret denne komponent til at vise anmeldelser hentet fra firebase. vi ville oprindeligt gerne lave en planner som også kan ses på vores figma prototype.
export default function Planner() {
    return (
        <>
            <section className="cPic"></section>
            <ComReviews />
        </>

    )
}