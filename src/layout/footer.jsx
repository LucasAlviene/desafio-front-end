import { styled } from '@mui/material/styles';

const Container = styled("footer")(({ theme }) => ({
    background: "#f1f1f1",
    textAlign: "center",
    borderTop: "1px solid #dedede",
    fontSize: 16,
    padding: 5,
    "& a": {
        color: theme.palette.primary.main,
        textDecoration: "none",
        "&:hover": {
            textDecoration: "underline"
        }
    },
    position: "fixed",
    bottom:0,
    left:0,
    right:0
}));

const Footer = () => {

    return (
        <Container>Desenvolvido por <a rel="noreferrer" href="https://github.com/LucasAlviene/desafio-front-end" target="_blank"><b>Lucas Alviene</b></a></Container>
    );
}

Footer.propTypes = {}

export default Footer;