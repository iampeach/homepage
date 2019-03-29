import React, { Component } from 'react'
import ArticleBlock from './ArticleBlock'
import { setDelay } from '../../../utils/animation'

export default class ArticleRow extends Component {
	constructor(props) {
		super(props)
		this.initialized = false
		this.added = false
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
		this.checkInterval = setInterval(() => {
			if (!this.added)
				this.checkInVision()
		}, 10)
	}
	inVision = _ => {
		this.props.addInitRows()
	}
	checkInVision = _ => {
		if (this.initialized){
			if (this.rectTop <= this.props.windowHeight-150)
				this.inVision()
			this.added = true
			clearInterval(this.getRectTopInterval)
			clearInterval(this.checkInterval)
		}
	}
	render() {
		var articleblocks = []
		for (let i = 0; i < this.props.numblocks; ++i) {
			articleblocks.push(<ArticleBlock delay={setDelay(2*i+this.props.delay)} windowHeight={this.props.windowHeight} key={i} />)
		}
		return(
			<div className="fl-row fl-center" ref={node=>this.node=node}>
				{articleblocks}
			</div>
		)
	}
}
