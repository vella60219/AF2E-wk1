function ImageItem({ image }) {
    return (
        <div className="image mt-4 col-sm-6 col-lg-3">
            <a href={image.href} className="image__link">
                <img src={image.src} alt={image.alt} className="image__style" />
            </a>
            <p className="image_title">{image.title}</p>
        </div>
    );
}

export default ImageItem;