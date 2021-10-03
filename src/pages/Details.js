import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import IconButton from "@mui/material/IconButton";
import ChatIcon from "@mui/icons-material/Chat";
import { useContext } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { BlogContext } from "../context/BlogContext"
import { Box } from "@mui/system";
import Button from '@mui/material/Button';
import { deleteHandler } from "../utils/Functions";
import { useHistory } from "react-router";



export default function Details() {
  //const [date, setDate] = useState(Date().slice(4, 15));
  const { BlogItem, loginInfo } = useContext(BlogContext)
  const history= useHistory()
    
  return (
    <div style={{display:"flex" , justifyContent:"center"}}>
    <Box sx={{maxWidth: 900,  display: "flex", flexFlow:"column wrap", justifyContent:"center"}}>
      <Card sx={{ maxWidth: 900, m: 2 , boxShadow: 20 }} >
        <CardActionArea>
          <CardMedia
            component="img"
            height="440"
            image={BlogItem.imageUrl}
            alt="green iguana"
          />
          <CardContent sx={{ padding: 2, backgroundColor: "#efeefe" }}>
            <Typography sx={{ textAlign:"center"}}>
            <Typography gutterBottom variant="h4" component="span" sx={{ fontFamily:"Girassol"}}>
              {BlogItem.title}
            </Typography>
            
            <Typography  gutterBottom variant="h6" component="span"sx={{ display: "block", fontFamily:"Girassol"}} >
              {BlogItem.date}
            </Typography>
            
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {BlogItem.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <AccountCircleIcon sx={{ paddingRight: 3 }} />
          <Typography variant="h6" component="div">
            {BlogItem.email}
          </Typography>
        </CardActions>
        <CardActions>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="Chat">
            <ChatIcon />
          </IconButton>
        </CardActions>
 
      </Card>
      {BlogItem.email === loginInfo.email ? <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly" }}>
          <Button variant="contained" disableElevation onClick={()=>history.push("/updateblog")}>
            UPDATE
          </Button>
          <Button variant="contained" disableElevation color="warning" onClick={() => {deleteHandler(BlogItem.id); history.push("/")}}>
            DELETE
          </Button>
        </Box> : null}
    </Box>
    </div>
  );
}