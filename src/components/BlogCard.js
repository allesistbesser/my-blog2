import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import IconButton from "@mui/material/IconButton";
import ChatIcon from "@mui/icons-material/Chat";
import { useContext} from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useHistory } from "react-router";
import {BlogContext} from "../context/BlogContext"


export default function BlogCard({item}) {
  
  const history = useHistory();
  const {setBlogItem, islogin} = useContext(BlogContext);

  const handleClick = ()=>{
    setBlogItem(item);
    islogin ? history.push("/details"): history.push("/login");
    
  }

  return (
    <Card sx={{ maxWidth: 345 , m: 3 , boxShadow: 20}} key={item.id} >
      <CardActionArea onClick={handleClick}>
        <CardMedia
          component="img"
          height="200"
          image={item.imageUrl}
          alt="green iguana"
        />
        <CardContent sx={{ padding: 2, backgroundColor: "#efeefe", fontFamily:"Girassol" }}>
          <Typography gutterBottom variant="h5" component="div" sx={{fontFamily:"Girassol"}}>
            {item.title}
          </Typography>
          <Typography gutterBottom variant="h7" component="div">
            {item.date}
          </Typography>
          <Typography height="60px" overflow="hidden" variant="body2" color="text.secondary">
           {item.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <AccountCircleIcon sx={{ paddingRight: 3 }} />
        <Typography variant="h6" component="div">
          {item.email}
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
  );
}