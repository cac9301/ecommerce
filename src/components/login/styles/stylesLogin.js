import { makeStyles } from "@material-ui/core/styles";
    
const useStyles = makeStyles((theme) => ({
        paper: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginBottom:theme.spacing(3)
        },
        avatar: {
            backgroundColor: theme.palette.secondary.main,
        },
        form: {
            width: "100%", // Fix IE 11 issue.
            marginTop: theme.spacing(1),
        },
        submit: {
            margin: theme.spacing(3, 0, 2),

        },
        link:{
            marginLeft: theme.spacing(3),
            textTransform:"capitalize",
            fontSize: "1rem",
            textDecoration:"none",
        }
        }));

export default useStyles;