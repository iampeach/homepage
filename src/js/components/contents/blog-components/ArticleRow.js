import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import ArticleBlock from './ArticleBlock'

export default class ArticleRow extends Component {
	constructor(props) {
		super(props)
	}
	componentDidMount() {
		window.addEventListener('scroll', this.checkInVision)
		window.scroll(0, 1)
		setTimeout(()=>{
			window.removeEventListener('scroll', this.checkInVision)
		}, 100)
	}
	inVision = _ => {
		this.props.addInitRows()
	}
	checkInVision = _ => {
		var rect = ReactDOM.findDOMNode(this).getBoundingClientRect()
		if (rect.top <= this.props.windowHeight-150)
			this.inVision()
	}
	setDelay = time => {
		return (time === 0)? '': (' delay-' + this.digitsPadding(time, 2))
	}
	digitsPadding = (num, length) => {
		return ((num + '').length >= length)? num: this.digitsPadding('0' + num, length)
	}
	render() {
		var articleblocks = []
		for (let i = 0; i < this.props.numblocks; ++i) {
			articleblocks.push(<ArticleBlock delay={this.setDelay(2*i+this.props.delay)} windowHeight={this.props.windowHeight} key={i} />)
		}
		return(
			<div className="fl-row fl-center">
				{articleblocks}
			</div>
		)
	}
}
