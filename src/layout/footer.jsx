import { styled } from '@mui/material/styles';


const Container = styled("div")(({theme}) => ({
    background: "#f1f1f1",
    textAlign: "center",
    borderTop: "1px solid #dedede",
    fontSize:16,
    padding:5,
    "& a":{
        color: theme.palette.primary.main,
        textDecoration: "none",
        "&:hover":{
            textDecoration: "underline"
        }
    }
}));
const Footer = () => {

    return (
        <Container>Desenvolvido por <a href="https://github.com/LucasAlviene/desafio-front-end" target="_blank"><b>Lucas Alviene</b></a></Container>
    );
}

export default Footer;