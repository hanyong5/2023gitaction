import React, { useState } from "react";
import Stack from "@mui/material/Stack";

import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import hanyong5 from "./data";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

function App() {
  const [expanded, setExpanded] = React.useState(false);
  const [inputValue, setInputValue] = useState("");
  const [viewMessage, setViewMessage] = useState("");

  const dataHandler = (e) => {
    const value = e.target.value;
    setInputValue(value);

    // 중복 여부 확인
    const isDuplicate = hanyong5.some((item) => item.id === value);

    // 중복이면 처리
    if (isDuplicate) {
      // 중복 처리 로직을 여기에 추가하십시오.
      console.log("중복된 값이 있습니다.");
      setViewMessage("중복된 값이 있습니다.");
    } else {
      console.log("중복된 값이 없음.");
      setViewMessage("중복된 값이 없음.");
    }
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <div className="App">
      test1111
      <Card sx={{ maxWidth: "100%" }}>
        <CardMedia
          component="img"
          height={expanded ? "500" : "0"}
          image="/img/movie01.jpg"
          alt="Paella dish"
          style={{ transition: "0.3s" }}
        />
        <CardActions disableSpacing>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <Avatar src="/img/movie03.jpg"></Avatar> Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </Typography>
        </CardContent>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <Avatar src="/img/movie03.jpg"></Avatar> Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </Typography>
        </CardContent>
      </Card>
      {viewMessage}
      <input type="text" onChange={dataHandler} value={inputValue} />
    </div>
  );
}

export default App;
