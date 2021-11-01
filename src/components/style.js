import { makeStyles } from "@material-ui/core";

const usestyles = makeStyles((theme)=>({
    button: {
        background: "#AD41F2 !important"
    },

    smBtn: {
        marginTop: "10px"
    },

    container: {
        width: "70% !important"
    },

    floatBtn: {
        borderRadius: "5px 0 20px 0 !important",
        position: "absolute",
        padding: "15px",
        bottom: "0",
        right: "0"
    },

    icon: {
        marginLeft: theme.spacing(2),
        cursor: "pointer",
    },

    paper: {
        padding: theme.spacing(5),
        borderRadius: "20px",
        boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
    },

    textField: {
        marginTop: theme.spacing(2)
    },

    btnInactive: {
        pointerEvents: "none",
    },

    // wrapper: {
    //     position: "relative",
    // }
}));

export default usestyles;