import React, {Component} from 'react'

export default class Header extends Component {
	constructor(props) {
		super(props)
		this.state = {
			chosen: 1
		}
	}
	captions_text = [
		'Home',
		'About',
		'Skills',
		'Experience',
		'Portfolio',
		'Blog',
		'Contact'
	]
	change_page = (id) => {
		this.setState({ chosen: id })
	}
	render() {
		var captions = []
		var caption_default_style = 'up-mr-10 d-mr-10 pd-20 fl-0-1 f5 cursor-point'
		for (let i = 0; i < this.captions_text.length; ++i) {
			var color = (i === this.state.chosen)? ' gold bold': ' grey light'
			var caption_style = caption_default_style.concat(color)
			captions.push(<h1 className={caption_style} onClick={()=>this.change_page(i)} key={i}>{this.captions_text[i]}</h1>)
			if (i === this.state.chosen)
				captions.push(<hr className='chosen-line mr-0 up-mr-25 d-mr-20 pd-0 gold b-none b-l-solid b-1 skew-320' key={this.captions_text.length}/>)
		}
		return (
			<div className="header mr-0 pd-0 r-pd-20 fl-row font-pri fl-end">
				{captions}
			</div>
		)
	}
}

