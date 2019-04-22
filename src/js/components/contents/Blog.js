import React, { Component } from 'react'
import ArticleBlock from './blog-components/ArticleBlock'
import ArticleRow from './blog-components/ArticleRow'

export default class Blog extends Component {
	constructor(props) {
		super(props)
		this.state = {
			height: window.innerHeight,
			width: window.innerWidth,
			num_init_rows: 0,
			blog_datas: [
				{title: '1st', content: '1', img: "https://live.staticflickr.com/65535/33787024588_6d088364e5_k.jpg"},
				{title: '2nd', content: '2', img: "https://live.staticflickr.com/65535/47664398791_31ac2b10a3_k.jpg"},
				{title: '3rd', content: '3', img: "https://live.staticflickr.com/65535/47664397851_b025062819_k.jpg"},
				{title: '4st', content: '4', img: "https://live.staticflickr.com/65535/47664396941_cf249096ea_k.jpg"},
				{title: '5st', content: '5', img: "https://live.staticflickr.com/65535/47664400251_2c01b48e0e_k.jpg"},
				{title: '6st', content: '6', img: "https://live.staticflickr.com/65535/46748654525_caab20a730_k.jpg"},
				{title: '7st', content: '7', img: "https://live.staticflickr.com/65535/32721770047_70aa5d657f_k.jpg"},
				{title: '8st', content: '8', img: "https://live.staticflickr.com/65535/33787027618_350af8986b_k.jpg"},
				{title: '9st', content: '9', img: "https://live.staticflickr.com/65535/33787032078_a0fe2adf0f_k.jpg"}
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
