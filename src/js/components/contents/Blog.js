import React, { Component } from 'react'
import ArticleBlock from './blog-components/ArticleBlock'
import ArticleRow from './blog-components/ArticleRow'
import { img1, img2, img3, img4, img5, img6, img7, img8, img9 } from './blog-components/img/'

export default class Blog extends Component {
	constructor(props) {
		super(props)
		this.state = {
			height: window.innerHeight,
			width: window.innerWidth,
			num_init_rows: 0,
			blog_datas: [
				{title: '1st', content: '1', img: img1},
				{title: '2nd', content: '2', img: img2},
				{title: '3rd', content: '3', img: img3},
				{title: '4st', content: '4', img: img4},
				{title: '5st', content: '5', img: img5},
				{title: '6st', content: '6', img: img6},
				{title: '7st', content: '7', img: img7},
				{title: '8st', content: '8', img: img8},
				{title: '9st', content: '9', img: img9}
			]
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
		this.setState( state => ({ num_init_rows: state.num_init_rows+1 }))
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
			if (i < this.state.num_init_rows) delay = 3*i
			var blog_datas = []
			for (let j = numblocks*i; j < numblocks*(i+1); ++j)
				blog_datas.push(this.state.blog_datas[j])
			article_blocks.push(<ArticleRow
														numblocks={numblocks}
														blog_datas={blog_datas}
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
