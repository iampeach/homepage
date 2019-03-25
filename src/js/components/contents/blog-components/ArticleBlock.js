import React, { Component } from 'react'
import ReactDOM from 'react-dom'

export default class ArticleBlock extends Component {
	constructor(props) {
		super(props)
		this.state = {
			style: 'h-500 w-300 mr-20 bg-washed-blue fl-0-0 animate-fade-in animated'
		}
	}
	componentDidMount() {
		window.addEventListener('scroll', this.scrollController)
		window.scroll(0, 1) // Trigger the event
	}
	componentWillUnmount() {
		window.removeEventListener('scroll', this.scrollController)
	}
	scrollController = _ => {
		var node = ReactDOM.findDOMNode(this)
		var rect = node.getBoundingClientRect()
		if (rect.top <= this.props.windowHeight-150 && !node.classList.contains('fade-in-up'))
				this.setState({ style: this.state.style + ' fade-in-up' })
	}
	render() {
		return(
			<div className={this.state.style + this.props.delay}>
				<h1>Something here</h1>
			</div>
		)
	}
}
