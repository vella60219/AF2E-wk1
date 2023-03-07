import ImageList from "../ImageList/ImageList";

function Images({ images }) {
    return (
        <article className="image__layout py-3 py-sm-5">
            <div className="container">
                <h1 className="text-center">IMAGES</h1>
                <hr className="divider--dark" />
                <ImageList
                    images={images}
                />
            </div>
        </article>
    );
}

export default Images;