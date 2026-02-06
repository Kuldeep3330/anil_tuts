import Content from "./Content";
import Footer from "./Footer";
import Nabar from "./Navbar";
import ThemeProvider from "./ThemeProvider";


function Theme(){
    return(
        <ThemeProvider>
            <Nabar/>
            <Content/>
            <Footer/>
        </ThemeProvider>
    )

}

export default Theme;