import "./searchItem.css"

const SearchItem = () => {
    return (
        <div className="searchItem">
            <img 
             src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg"
             alt="pListImg"
             className="siImg"
             />
        <div className="siDesc">
        <h1 className="siTitle">Tower Apartment</h1>
        <span className="siDistance">500m from center</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">
          Studio Apartment with Air conditioning
        </span>
        <span className="siFeatures">Entire studio . 1 bathroom . 21sqm 1 full bed</span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
          <div className="siRating">
              <span>Excellent</span>
              <button>8.9</button>
          </div>
          <div className="siDetailTexts">
              <span className="siPrice">$123</span>
              <span className="siTaxOp">Includes taxes and fees</span>
              <button className="siCheckButton">See Availability</button>
          </div>
      </div>
        </div>
    )
}

export default SearchItem