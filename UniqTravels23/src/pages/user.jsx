//{HEADER / USERHEAD er kodet af: Victoria}

//{Kodet af: Rina}



// Med NavLink gør vi, at produktet bliver en 1 pager
import { NavLink } from "react-router-dom";


import logoplaceholder from '../assets/pictures/logoplaceholder.png'
import userp from '../assets/pictures/userp.png'


//import af separat theme fil
import { customTheme } from '../themes/themes';
import { useTheme } from '@mui/material/styles';

import { Box, CssBaseline, Stack, ThemeProvider, Typography } from '@mui/material';

import UserHead from "../components/userhead";

import BackBtn from "../components/backbtn";

import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import AirplaneTicketOutlinedIcon from '@mui/icons-material/AirplaneTicketOutlined';
import PhotoCameraFrontOutlinedIcon from '@mui/icons-material/PhotoCameraFrontOutlined';
import RateReviewOutlinedIcon from '@mui/icons-material/RateReviewOutlined';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import MilitaryTechOutlinedIcon from '@mui/icons-material/MilitaryTechOutlined';
import ExtensionOutlinedIcon from '@mui/icons-material/ExtensionOutlined';

import { QuickTools } from "../components/cards";
import logo from '../assets/logo.png'
export default function User() {
    const outerTheme = useTheme();
    return (
        <ThemeProvider theme={customTheme(outerTheme)}>
            <CssBaseline enableColorScheme />

            <div className="header">
                <BackBtn/>
                <img src={logo} alt="LOGO" />
                <Typography variant="h5" className="h_txt">Traveler Profile</Typography>
                
                <SettingsOutlinedIcon
                            sx={{
                                position:"fixed",
                                top:20,
                                right:20,

                                color: customTheme => customTheme.palette.secondary.main,
                                borderRadius:"10px",
                                fontSize:"25pt",
                                boxShadow: "0 0 5px 0 rgba(0, 0, 0, 0.5)"
                                
                            }}
                />
            </div>

            <section className="body">
                <section className="b_head">


                    <div className="user">
                        <div className="u_img"><img src={userp} alt="User Profilpicture" /></div>
                    </div>

                    <UserHead />
                    <img src={logoplaceholder} alt="placeholder" style={{ width: "5em" }} />
                    <NavLink to='/login'>Login</NavLink>
                </section>
            <Box
                    sx={{ color: customTheme => customTheme.palette.secondary.main }}
                >
                    <Typography variant='h4' m="0 3%"> My Pages &#10024;</Typography>
                    <Stack direction="row" spacing={2}  /*Stack komponenten fra MUI er brugt her for at sætte elementerne horisontalt – opdagede denne måde, efter jeg havde brugt flex og flexdirection andre steder */
                        sx={{
                            p: "0 3% 3%",
                            overflow: "auto",
                        }}
                    >

                    <QuickTools name="Documents" icon={<ArticleOutlinedIcon sx={{ fontSize: 40 }} />} />
                    <QuickTools name="Tickets" icon={<AirplaneTicketOutlinedIcon sx={{ fontSize: 40 }} />} />
                    <QuickTools name="Passport" icon={<PhotoCameraFrontOutlinedIcon sx={{ fontSize: 40 }} />} />
                    <QuickTools name="Reviews" icon={<RateReviewOutlinedIcon sx={{ fontSize: 40 }} />} />

                    </Stack>
                </Box>
                <Typography variant="body"> Denne side er ufærdig, i fremtiden vil man kunne se flagene være interaktive, et leaderboard, ens egne grupper, man vil kunne oprette sine gruppe og meget mere!</Typography>
                <Box
                    sx={{ color: customTheme => customTheme.palette.secondary.main }}
                >
                    <Typography variant='h4' m="0 3%"> My Artie Progression &#10024;</Typography>
                    <Stack direction="row" spacing={2}  /*Stack komponenten fra MUI er brugt her for at sætte elementerne horisontalt */
                        sx={{
                            p: "0 3% 3%",
                            overflow: "auto",
                        }}
                    >

                    <QuickTools name="Rewards" icon={<EmojiEventsOutlinedIcon sx={{ fontSize: 40 }} />} />
                    <QuickTools name="Leaderboard" icon={<MilitaryTechOutlinedIcon sx={{ fontSize: 40 }} />} />
                    <QuickTools name="Challenges" icon={<ExtensionOutlinedIcon sx={{ fontSize: 40 }} />} />


                    </Stack>
                </Box>

                <Stack direction="row" spacing={2}  
                        sx={{
                            p: "0 3% 3%",
                            display: 'flex',
                            flexWrap: 'wrap'
                        }}
                    >
                <img src="https://flagsapi.com/BE/shiny/64.png" alt="Belgium"></img>
                <img src="https://flagsapi.com/BW/shiny/64.png" alt="Botswana"></img>
                <img src="https://flagsapi.com/DE/shiny/64.png" alt="Germany"></img>
                <img src="https://flagsapi.com/FR/shiny/64.png" alt="France"></img>
                <img src="https://flagsapi.com/US/shiny/64.png" alt="United States"></img>
                <img src="https://flagsapi.com/CA/shiny/64.png" alt="Canada"></img>
                <img src="https://flagsapi.com/AU/shiny/64.png" alt="Australia"></img>
                <img src="https://flagsapi.com/JP/shiny/64.png" alt="Japan"></img>
                <img src="https://flagsapi.com/IT/shiny/64.png" alt="Italy"></img>
                <img src="https://flagsapi.com/ES/shiny/64.png" alt="Spain"></img>
                <img src="https://flagsapi.com/NL/shiny/64.png" alt="Netherlands"></img>
                <img src="https://flagsapi.com/BR/shiny/64.png" alt="Brazil"></img>
                <img src="https://flagsapi.com/RU/shiny/64.png" alt="Russia"></img>
                <img src="https://flagsapi.com/IN/shiny/64.png" alt="India"></img>
                <img src="https://flagsapi.com/CN/shiny/64.png" alt="China"></img>
                <img src="https://flagsapi.com/ZA/shiny/64.png" alt="South Africa"></img>
                <img src="https://flagsapi.com/AR/shiny/64.png" alt="Argentina"></img>
                <img src="https://flagsapi.com/MX/shiny/64.png" alt="Mexico"></img>
                <img src="https://flagsapi.com/KR/shiny/64.png" alt="South Korea"></img>
                <img src="https://flagsapi.com/EG/shiny/64.png" alt="Egypt"></img>
                <img src="https://flagsapi.com/SE/shiny/64.png" alt="Sweden"></img>
                <img src="https://flagsapi.com/CH/shiny/64.png" alt="Switzerland"></img>
                <img src="https://flagsapi.com/NZ/shiny/64.png" alt="New Zealand"></img>
                <img src="https://flagsapi.com/GR/shiny/64.png" alt="Greece"></img>
                <img src="https://flagsapi.com/TR/shiny/64.png" alt="Turkey"></img>
                <img src="https://flagsapi.com/PL/shiny/64.png" alt="Poland"></img>
                <img src="https://flagsapi.com/NO/shiny/64.png" alt="Norway"></img>
                <img src="https://flagsapi.com/DK/shiny/64.png" alt="Denmark"></img>
                <img src="https://flagsapi.com/SG/shiny/64.png" alt="Singapore"></img>
                <img src="https://flagsapi.com/FI/shiny/64.png" alt="Finland"></img>
                <img src="https://flagsapi.com/ID/shiny/64.png" alt="Indonesia"></img>
                <img src="https://flagsapi.com/TH/shiny/64.png" alt="Thailand"></img>
                <img src="https://flagsapi.com/PT/shiny/64.png" alt="Portugal"></img>
                <img src="https://flagsapi.com/IE/shiny/64.png" alt="Ireland"></img>
                <img src="https://flagsapi.com/HK/shiny/64.png" alt="Hong Kong"></img>
                <img src="https://flagsapi.com/BE/shiny/64.png" alt="Belgium"></img>
                <img src="https://flagsapi.com/BR/shiny/64.png" alt="Brazil"></img>
                <img src="https://flagsapi.com/CA/shiny/64.png" alt="Canada"></img>



                    </Stack>

            </section>





        </ThemeProvider>
    );
}