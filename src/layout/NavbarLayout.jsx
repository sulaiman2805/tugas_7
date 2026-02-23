import NavButtonComponent from "../components/NavButtonComponent";
import NavItemComponent from "../components/NavItemComponent";

function NavbarLayout() {
    return (
        <>
            <div style={{margin:'30px 60px', display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                <div>
                    <img style={{width:'200px'}} src="./images/logo.png" alt="Logo"/>
                </div>
                <div style={{display: "flex", flexDirection:"row", gap: '30px', alignItems:'center'}}>
                    <NavItemComponent text="About Us"/>
                    <NavItemComponent text="Service"/>
                    <NavItemComponent text="Use Cases"/>
                    <NavItemComponent text="Pricing"/>
                    <NavItemComponent text="Blog"/>
                    <NavButtonComponent/>
                </div>
            </div>
        </>
    );
}

export default NavbarLayout;