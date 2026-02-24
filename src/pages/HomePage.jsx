import TitleSectionComponent from "../components/TitleSectionComponent";
import CompanyLayout from "../layout/CompanyLayout";
import CompanyProposalLayout from "../layout/CompanyProposalLayout";
import JumbotronLayout from "../layout/JumbotronLayout";
import NavbarLayout from "../layout/NavbarLayout";
import ServiceLayout from "../layout/ServiceLayout";

function HomePage() {
    return (
        <>
        <NavbarLayout/>
        <JumbotronLayout/>
        <CompanyLayout/>
        <TitleSectionComponent title ="Services" description = "At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:"/>
        <ServiceLayout/>
        <CompanyProposalLayout/>
        <TitleSectionComponent title ="Case Studies" description = "Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies"/>
        <TitleSectionComponent title ="Our Working Process" description = "Step-by-Step Guide to Achieving Your Business Goals"/>
        </>
    );
}

export default HomePage;