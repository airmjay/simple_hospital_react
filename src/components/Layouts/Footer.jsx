import { Box} from "@mui/material";

function Footer() {
    return (
    <Box sx={{
        backgroundColor : 'rgba(231, 232, 241, 1)',
        height: '30px',
        display: 'flex',
        alignItems: 'center',
        margin: '0',
        paddingLeft: '10px',
        width: '100%',
    }}>

        @Copyright 2024 by SparkLab Studio
    </Box>    
    );
}

export default Footer;