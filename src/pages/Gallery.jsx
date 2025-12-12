import "../styles/gallery.css";
const images = import.meta.glob('../images/gallery/*.{jpg,png,jpeg}', { eager: true });

function Gallery() {
    return (
        <section className="gallery-grid-container">
            {Object.values(images).map((img, i) => (
                <div className="bento-item" key={i}>
                    <img src={img.default} alt="" />
                </div>
            ))}
        </section>
    );
}

export default Gallery;
