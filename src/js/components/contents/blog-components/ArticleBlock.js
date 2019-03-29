import React, { Component } from 'react'
import ReactDOM from 'react-dom'

export default class ArticleBlock extends Component {
	constructor(props) {
		super(props)
		this.state = {
			style: 'h-500 w-350 mr-20 bg-washed-blue fl-0-0 animate-fade-in animated'
		}
		this.initialized = false
		this.rectTop = 0
		this.getRectTopInterval = undefined
		this.checkInterval = undefined
	}
	componentDidMount() {
		this.getRectTopInterval = setInterval(() => {
			const rect = ReactDOM.findDOMNode(this).getBoundingClientRect()
			if (rect.top === this.rectTop)
				this.initialized = true
			else this.rectTop = rect.top
		}, 10)
		this.checkInterval = setInterval(this.checkInVision, 10)
	}
	componentWillUnmount() {
		clearInterval(this.getRectTopInterval)
		clearInterval(this.checkInterval)
	}
	checkInVision = _ => {
		if (this.initialized) {
			var node = ReactDOM.findDOMNode(this)
			if (this.rectTop <= this.props.windowHeight-150 && !node.classList.contains('fade-in-up')){
				this.setState({ style: this.state.style + ' fade-in-up' })
			}
		}
	}
	render() {
		return(
			<div className={this.state.style + this.props.delay}>
				<h1>Something here</h1>
			</div>
		)
	}
}
