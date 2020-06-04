import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
    root: {
        width: 275,
        margin: 14
    },
    bullet: {
        display: "inline-block",
        margin: "0 2px",
        transform: "scale(0.8)"
    },
    title: {
        fontSize: 14
    },
    pos: {
        marginBottom: 12
    },
    p: {
        color: "black",
        fontSize: "medium",

    }
});

export default function SimpleCard(props) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography variant="h5" component="h2">
                    {props.titulo}
                </Typography>
                <br/>
                <Typography variant="body2" component="p" className={classes.p}>
                    {props.texto}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" href={props.to} >Ver Mas</Button>
            </CardActions>
        </Card>
    );
}

