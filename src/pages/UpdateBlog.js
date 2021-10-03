import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { UpdateInfo } from '../utils/Functions';
import { BlogContext } from '../context/BlogContext';
import { useContext} from 'react';
import { useHistory } from 'react-router';
import UpdateIcon from '@mui/icons-material/Update';
import { imageBoxStyle } from './Login';


const theme = createTheme();

export default function UpdateBlog() {

    const { setBlogItem, BlogItem , loginInfo, date} = useContext(BlogContext)
    const history = useHistory()

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        UpdateInfo({email: loginInfo.email, title : data.get("title"), imageUrl: data.get("imageUrl"), description: data.get("description"), date: date, id: BlogItem.id});
               
        history.push("/");
        
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setBlogItem({ ...BlogItem, [name]: value });
        
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
                        <UpdateIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Update Blog
                        </Typography>
                        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="title"
                                label="Title"
                                name="title"
                                value={BlogItem.title}
                                onChange={handleInputChange} 
                                autoFocus
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="image"
                                label="Image Url"
                                name="imageUrl"
                                value={BlogItem.imageUrl}                              onChange={handleInputChange}  
                                autoFocus
                            />
                            <TextField
                                id="outlined-multiline-static"
                                label="Content"
                                multiline
                                rows={8}
                                name="description"
                                fullWidth
                                autoFocus
                                value={BlogItem.description}
                                onChange={handleInputChange} 
                            />


                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 , boxShadow: 10}}
                                color="info"
                            >
                                Update
                            </Button>
                            
                        </Box>
                    </Box>

                </Container>
            </ThemeProvider>
        </Box>
    );
}