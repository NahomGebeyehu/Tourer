import Heropg from "../Components/Heropg";
import Navbar from "../Components/Navbar";
function Home(){

    return(
        <>
        <Navbar/>
            <Heropg cName={"hero"}
                    heroImg={"https://lp-cms-production.imgix.net/2019-06/c2af3eb20b44c86b0420b6d698107b21-tis-abay.jpg"}
                    title={"Facilitating your journey"}
                    text={"Explore Ethiopia with us - your journey begins here."}
            />
        </>
    )
}

export default Home;