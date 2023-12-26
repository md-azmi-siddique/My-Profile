// SkillCard.js
import React from "react";
import { Card, CardActionArea, CardMedia, CardContent, Typography } from "@mui/material";

const CardDesign = ({ name, image, description, imageHeight}) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height={"40"}
          image={image}
          alt={name}
        />
        <CardContent>
          <Typography gutterBottom variant="p" component="div" className="text-center">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CardDesign;
