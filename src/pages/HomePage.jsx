import TitleSectionComponent from "../components/TitleSectionComponent";
import CompanyLayout from "../layout/CompanyLayout";
import JumbotronLayout from "../layout/JumbotronLayout";
import NavbarLayout from "../layout/NavbarLayout";
import ServiceLayout from "../layout/ServiceLayout";

function HomePage() {
    return (
        <>
        <NavbarLayout/>
        <JumbotronLayout/>
        <CompanyLayout/>
        <TitleSectionComponent title ="Services" description = "We are leading company in our industry"/>
        <ServiceLayout/>
        </>
    );
}

export default HomePage;