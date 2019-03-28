import React, { Component } from 'react'
import ArticleBlock from './blog-components/ArticleBlock'
import ArticleRow from './blog-components/ArticleRow'

export default class Blog extends Component {
	constructor(props) {
		super(props)
		this.state = {
			height: window.innerHeight,
			width: window.innerWidth,
			init_row: [false, false, false]
		}
	}
	componentDidMount() {
		addEventListener('resize', this.updateDimension)
	}
	componentWillUnmount() {
		removeEventListener('resize', this.updateDimension)
	}
	updateDimension = _ => {
		this.setState({
			width: window.innerWidth,
			height: window.innerHeight
		})
	}
	addInitRows = id => {
		var init_row = this.state.init_row
		this.setState({ init_row: init_row })
	}
	render() {
		var numrows = 3, numblocks
		switch(true) {
			case (this.state.width < 800):
				numblocks = 1
				break
			case (this.state.width < 1200):
				numblocks = 2
				break
			default:
				numblocks = 3
				break
		}
		var style = this.props.className.concat(' mr-10 fl-col')
		var article_blocks = []
		for (let i = 0; i < numrows; ++i){
			let delay = 0
			if (this.state.init_row[i]) delay = 3*i
			article_blocks.push(<ArticleRow
														numblocks={numblocks}
														delay={delay}
														windowHeight={this.state.height}
														addInitRows={()=>this.addInitRows(i)}
														key={i}
													/>)
		}
		return(
			<div className={style}>
				{article_blocks}
			</div>
		)
	}
}
