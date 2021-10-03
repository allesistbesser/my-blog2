import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { signIn } from '../utils/Functions';
import { BlogContext } from '../context/BlogContext';
import { useContext } from 'react';
import { useHistory } from 'react-router';
import { Formik } from "formik"
import * as Yup from "yup"


export const imageBoxStyle = { display: { xs:"none" , sm:"inline-block" }, backgroundImage: `url(${"https://picsum.photos/700/1000"})`, width: 700, height: 1000, boxShadow: 20 }

const theme = createTheme();

export default function Login() {

    const { setloginInfo, islogin, setislogin } = useContext(BlogContext)
    const history = useHistory()

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        await signIn(data.get("email"), data.get("password"), setislogin, setloginInfo)

        history.push("/");
    };

    const LoginValidationSchema = Yup.object().shape({
        email: Yup.string()
            .required("Email is required")
            .email("Invalid Email"),
        password: Yup.string()
            .required("No password proviede")
            .min(5, "Password is too short - should be 8 chars minimum")
        // .matches(/\d+/, 'Password must have a number')
        // .matches(/[a-z]+/, 'Password must have a lowercase')
        // .matches(/[A-Z]+/, 'Password must have a uppercase')
        // .matches(/[!?.@#$%^&*()-+]+/, 'Password must have a special char'),
    })
    const initialValues = {
        email: "",
        password: "",
    }

    return (
        <Box sx={{ display: "flex", flexDirection: "row" }}>
            <Box sx={imageBoxStyle}>
            </Box>
            <ThemeProvider theme={theme}>
                <Container component="main" maxWidth="xs" >
                    <CssBaseline />
                    <Box
                        sx={{
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'info.main' }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Log in
                        </Typography>

                        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                            

                                        <TextField
                                            margin="normal"
                                            fullWidth
                                            id="email"
                                            label="Email Address"
                                            name="email"
                                            autoComplete="email"
                                            autoFocus
                                            
                                        />
                                        <TextField
                                            margin="normal"

                                            fullWidth
                                            name="password"
                                            label="Password"
                                            type="password"
                                            id="password"
                                            autoComplete="current-password"
                                           
                                        />
                                  


                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Remember me"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                                color={islogin ? `warning` : `info`}
                            >
                                Login
                            </Button>
                            <Grid container>
                                <Grid item xs>
                                    <Link href="#" variant="body2">
                                        Forgot password?
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link href="#" variant="body2">
                                        {"Don't have an account? Sign Up"}
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>


                    </Box>


                </Container>
            </ThemeProvider>
        </Box>
    );
}