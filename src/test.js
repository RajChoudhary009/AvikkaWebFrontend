<Slider {...settings6}>
              {imagesList6.map((imageUrl, index) => (
                imageUrl.place == four ?(
                <div className="carousel-item1" key={index}>
                  <img className='carousel-image-mini' src={imageUrl.img} alt={`ImageItem ${index + 1}`} />
                </div>
                ):null
              ))}
            </Slider>
             // <Link to={`/filter-page/${eachsubcat.value}`}>
            // </Link>