import Nav from "./Nav";
import Cards from "./Cards";
import Form from "./Form";
import Presentation from "./Presentation";
import Footer from "./Footer";
import AboutMe from "./AboutMe";
import GoogleReviews from "./GoogleReviews";
import WhyUs from "./WhyUs";
import Faq from "./Faq";
import Projects from "./Projects";




const Home = () => {


    return (

        <>
        
            <Nav />
            <Presentation />
            <Cards />
            <Projects />
            <AboutMe />
            <WhyUs />
            <Form />
            <GoogleReviews />
            <Faq />
            <Footer />
        
        </>

    )
}

export default Home;