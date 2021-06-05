import React from 'react'
import handshake from "./handshake.jpeg";

const Carousel = ({listings}) => {
    return (

        <div className="col-6">
            <main className="container container-fluid my-5 carousel-custom car-img" >
                <div
                    id="carouselExampleCaptions"
                    className="carousel slide"
                    data-bs-ride="carousel"
                >
                    <div className="carousel-inner" style={{ border: "3px solid rgb(230, 228, 228)" }}>
                        <div className="carousel-item active">
                            <img
                                src={handshake}
                                className="d-block w-100"
                                alt="Landing page image"

                            />
                            <div className="carousel-caption carousel-caption-custom">
                                <h5>Welcome to Haggle!</h5>
                                <p>Scroll through to see current listings!</p>
                            </div>
                        </div>

                        {listings.map((listing) => (
                            <div className="carousel-item" key={listing._id}>
                                <img
                                    src={listing.image_path}
                                    className="d-block w-100"
                                    alt="..."
                                />
                                <div className="carousel-caption carousel-caption-custom">
                                    <h5>{listing.title}</h5>
                                    <p>{listing.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide="prev"
                    >
                        <span
                            className="carousel-control-prev-icon"
                            aria-hidden="true"
                        ></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide="next"
                    >
                        <span
                            className="carousel-control-next-icon"
                            aria-hidden="true"
                        ></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </main>
        </div>

    )
}

export default Carousel
