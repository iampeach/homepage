import React, { Component } from 'react'

export default class ArticleBlock extends Component {
	constructor(props) {
		super(props)
		this.state = {
			style: 'h-500 w-350 mr-20 fl-0-0 shadow-0-0-10 animate-fade-in animated'
		}
		this.initialized = false
		this.rectTop = 0
		this.node = React.createRef()
		this.getRectTopInterval = undefined
		this.checkInterval = undefined
	}
	componentDidMount() {
		this.getRectTopInterval = setInterval(() => {
			const rect = this.node.getBoundingClientRect()
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
			if (this.rectTop <= this.props.windowHeight-150 && !this.node.classList.contains('fade-in-up')){
				this.setState({ style: this.state.style + ' fade-in-up' })
			}
		}
	}
	render() {
		return(
			<div className={this.state.style + this.props.delay} ref={node=>this.node=node}>
				<img className='w-100p' src={this.props.blog_datas.img} />
				<div className='pd-0-30'>
					<h2 className='font-pri'>{this.props.blog_datas.title}</h2>
					<h3 className='font-sec light'>{this.props.blog_datas.content}</h3>
				</div>
			</div>
		)
	}
}
