import React, {Component, PropTypes} from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import './App.css';

export default class App extends Component {
  static propTypes = {
    slides: PropTypes.array.isRequired,
    preloadNext: PropTypes.number,
    autoplay: PropTypes.bool
  }

  get preloadNext() {
      return this.props.preloadNext || this.props.slides.length
  }

  constructor(props) {
      super(props)

      this.state = {
          currentSlide: 0,
          items: []
      }
  }

  _setNextSlide = () => {
    const currentSlide = this.state.currentSlide + 1 === this.props.slides.length ? 0 : this.state.currentSlide + 1
    const {slides} = this.props
    const end = currentSlide + this.preloadNext + 1
    const items = end <= slides.length - 1
      ? slides.slice(currentSlide, end)
      : slides.slice(currentSlide).concat(slides.slice(0, end - slides.length))

    this.setState({currentSlide, items})
  }

  render() {
    const {autoplay, slides} = this.props
    const {currentSlide, items} = this.state

    if (this.preloadNext > slides.length) throw new Error(`Can't preload more than ${slides.length} slides`)
    if (autoplay) window.setTimeout(this._setNextSlide, slides[currentSlide].duration)

    return (
      <ReactCSSTransitionGroup
        className="container"
        transitionName="image"
        transitionEnterTimeout={1000}
        transitionLeaveTimeout={1000}>
        {items.map((img, ix) => <img key={currentSlide + ix} src={img.src} />)}
      </ReactCSSTransitionGroup>

    )
  }
}
