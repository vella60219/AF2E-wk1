import ImageItem from "../ImageItem/ImageItem";

function ImageList({ images }) {
    return (
        <div className="row">
            {images.map(image => (
                <ImageItem
                    key={image.id}
                    image={image}
                />
            ))}
        </div>
    );

}

export default ImageList;