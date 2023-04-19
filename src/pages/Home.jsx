import Header from "../components/Header";
import Footer from "../components/Footer";
import Images from "../components/Images";
import Description from "../components/Description";
import { useImages } from "../react-query";


function Home({user}) {
    const { data, isLoading } = useImages();
    const images = data || [];
    // const user = users[0];
    images.sort((a, b) => a.id - b.id);
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
                    images={images}
                    isLoading={isLoading}
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