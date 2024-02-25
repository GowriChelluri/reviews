import './index.css'
import {Component} from 'react'

class ReviewsCarousel extends Component {
  state = {activeIndex: 0}

  onClickLeftArrow = () => {
    const {activeIndex} = this.state
    if (activeIndex > 0) {
      this.setState(prevState => ({activeIndex: prevState.activeIndex - 1}))
    }
  }

  onClickRightArrow = () => {
    const {reviewsList} = this.props
    const {activeIndex} = this.state
    if (activeIndex < reviewsList.length - 1) {
      this.setState(prevState => ({activeIndex: prevState.activeIndex + 1}))
    }
  }

  renderCurrentData = props => {
    const {imgUrl, username, companyName, description} = props
    return (
      <li className="list-container">
        <img src={imgUrl} alt={username} />
        <p className="username">{username}</p>
        <p className="company-name">{companyName}</p>
        <p>{description}</p>
      </li>
    )
  }

  render() {
    const {reviewsList} = this.props
    const {activeIndex} = this.state
    const currentData = reviewsList[activeIndex]
    return (
      <div className="bg-container">
        <h1 className="heading">Reviews</h1>
        <div className="carousel-container">
          <button
            type="button"
            onClick={this.onClickLeftArrow}
            className="btn"
            data-testid="leftArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
              className="arrow"
            />
          </button>
          {this.renderCurrentData(currentData)}
          <button
            type="button"
            onClick={this.onClickRightArrow}
            className="btn"
            data-testid="rightArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
              className="arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}
export default ReviewsCarousel
