//HUSK AT SKRIVE KOMMENTARER TIL NÆRMEST ALT – forklaring samt hvad koden gør

// Importér nødvendige moduler og komponenter
import { customTheme } from '../themes/themes';
import { useTheme } from '@mui/material/styles';

import { CssBaseline, Stack, ThemeProvider, Typography } from '@mui/material';
import SearchBar from '../components/search';
import { QuickTools } from '../components/cards';
import ComplexCard from '../components/compcard';



export default function Booking() {
        // Definér nogle variabler med data, der skal bruges senere
    const outerTheme = useTheme();
        // Definér nogle variabler med data, der skal bruges senere
    const imageUrl = 'url_to_your_image.jpg';
    const cardTitle = 'Card Title';
    const cardSubheader = 'Card Subheader';
    const cardLabel = 'Destination';
    const cardBody = 'This is the card body text.';

    return (
        <ThemeProvider theme={customTheme(outerTheme)}>
            <CssBaseline enableColorScheme />
            <Typography variant="h2">Where would you like to go [username]</Typography>
            <div>
                <SearchBar/>
            </div>



            <section className='quickTools'>
                <Stack direction="row" spacing={2}  
                        sx={{

                            padding: "1% 3%",
                            overflow: "auto",

                        }}>

                    <QuickTools name="Flights"/>
                    <QuickTools name="Hotels"/>
                    <QuickTools name="Rentals"/>
                    <QuickTools name="Explore"/>
                </Stack>
            </section>
            <Typography variant="h2">Flights</Typography>

            <Stack direction="row" spacing={2}>
                <ComplexCard
                image={"../src/assets/pictures/Hamburg.jpg"}
                title={ "Two day trip to Hamburg"}
                subheader={"Special tickets to the Elbphilharmonie"}
                label={"GER"}
                body={"Escape to Hamburg for a quick getaway! Explore historic landmarks like the stunning Elbphilharmonie, stroll along the scenic Alster Lake, and savor mouthwatering local cuisine at the famous Fischmarkt. With its vibrant arts scene and rich maritime history, Hamburg promises a memorable adventure in just a few days. Book your short trip now and immerse yourself in the charm of this captivating German city!"}
                />

                <ComplexCard
                image={"../src/assets/pictures/Kyoto.jpg"}
                title={"Discover the Beauty of Kyoto"}
                subheader={"Experience Japanese Culture"}
                label={"JPN"}
                body={"Embark on a journey to Kyoto and immerse yourself in the rich traditions of Japan. Visit historic temples and shrines, such as Kinkaku-ji (the Golden Pavilion) and Fushimi Inari Taisha, known for its thousands of vibrant red torii gates. Explore the enchanting Arashiyama Bamboo Grove and savor delicious Japanese cuisine, from sushi to ramen. Kyoto offers a unique blend of ancient and modern, making it a captivating travel destination. Book your adventure now and create lasting memories in the heart of Japan!"}
                 />

                <ComplexCard
                image={"../src/assets/pictures/London.jpg"}
                title={"Discover the Magic of London"}
                subheader={"Explore Iconic Landmarks"}
                label={"UK"}
                body={"Escape to the enchanting city of London and uncover its rich history and vibrant culture. Visit world-famous landmarks like the Tower of London, Buckingham Palace, and the British Museum. Take a leisurely stroll along the River Thames, enjoy a traditional afternoon tea, and explore the trendy neighborhoods of Shoreditch and Notting Hill. London's diverse attractions and culinary scene promise an unforgettable journey. Book your trip now and experience the magic of this iconic city!"}
                />
            </Stack>

        </ThemeProvider>   
                // Her gentages lignende blokke for andre rejsemål (Kyoto og London) med forskellige oplysninger
                // ComplexCard komponenten bruges til at vise oplysningerne om hvert rejsemål
    );
}