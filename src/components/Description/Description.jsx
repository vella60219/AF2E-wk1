function Description({description}) {
    return (
        <article className="description__layout py-4 py-sm-5">
            <div className="container d-flex flex-column align-items-center">
                <h1>DESCRIPTIONS</h1>
                <hr className="divider--light" />
                <p className="text-justify description__content py-3">{description}</p>
            </div>
        </article>
    );
}

export default Description;