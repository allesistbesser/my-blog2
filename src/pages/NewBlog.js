import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { addInfo } from '../utils/Functions';
import { BlogContext } from '../context/BlogContext';
import { useContext} from 'react';
import { useHistory } from 'react-router';
import FiberNewIcon from '@mui/icons-material/FiberNew';
import { imageBoxStyle } from './Login';

const theme = createTheme();

export default function NewBlog() {

    const { loginInfo, date} = useContext(BlogContext)
    const history = useHistory()

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        addInfo({email: loginInfo.email, title : data.get("title"), imageUrl: data.get("imgurl"), description: data.get("content"), date: date})
        history.push("/");
    };

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
                        <Avatar sx={{ m: 1, bgcolor: 'warning.main' }}>
                        <FiberNewIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            New Blog
                        </Typography>
                        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="title"
                                label="Title"
                                name="title"
                                
                                autoFocus
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="image"
                                label="Image Url"
                                name="imgurl"
                                
                                autoFocus
                            />
                            <TextField
                                id="outlined-multiline-static"
                                label="Content"
                                multiline
                                rows={8}
                                name="content"
                                fullWidth
                                autoFocus
                                
                            />
                               


                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 , boxShadow: 10}}
                                color="info"
                            >
                                Submit
                            </Button>
                            
                        </Box>
                    </Box>

                </Container>
            </ThemeProvider>
        </Box>
    );
}