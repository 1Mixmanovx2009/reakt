function Services({ className, img, seans, servicesInfo, extraBg }) {
    return (
        <>
        <div className="web-services">
            <div className={`web-services-wrapper-img ${extraBg}`}>
                <img className={className} src={img} alt="" />
            </div>
            <div className="web-services-title-wrapper">
                <p className="seans">{seans}</p>
                <p className="services-info">{servicesInfo}</p>
            </div>
        </div>

        </>
    )
}

export default Services