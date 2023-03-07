import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Images from "../components/Images/Images";
import Description from "../components/Description/Description";

function Home({ user }) {
    return (
        <div>
            <Header
                img={user.avatar}
                title={user.name}
                slogan={user.slogan}
            />

            <div>
                <Images
                    images={user.images}
                />
                <Description
                    description={user.descriptions}
                />
            </div>


            <Footer />
        </div>
    );
}

export default Home;