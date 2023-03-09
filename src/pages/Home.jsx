import Header from "../components/Header";
import Footer from "../components/Footer";
import Images from "../components/Images";
import Description from "../components/Description";

function Home({ user }) {
    return (
        <div className="pagecontainer mainLayout" >
            <Header
                className="layoutHeader"
                img={user.avatar}
                title={user.name}
                slogan={user.slogan}
            />

            <div className="layoutContent" >
                <Images
                    images={user.images}
                />
                <Description
                    description={user.descriptions}
                />
            </div>

            <Footer className="layoutFooter" />
        </div>
    );
}

export default Home;