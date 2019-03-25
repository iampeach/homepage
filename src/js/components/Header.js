import React, { Component } from 'react'

export default class Header extends Component {
	constructor(props) {
		super(props)
	}
	change_page = id => {
		this.props.change_page(id)
	}
	render() {
		var captions = []
		var caption_default_style = 'up-mr-10 d-mr-10 pd-20 fl-0-1 f5 cursor-point'
		for (let i = 0; i < this.props.contents.length; ++i) {
			var color = (i === this.props.chosen)? ' gold bold': ' grey light hv-gold'
			var caption_style = caption_default_style.concat(color)
			captions.push(<h1 className={caption_style} onClick={()=>this.change_page(i)} key={i}>{this.props.contents[i].text}</h1>)
			if (i === this.props.chosen)
				captions.push(<hr className='fl-0-1 chosen-line mr-0 up-mr-25 d-mr-20 pd-0 gold b-none b-l-solid b-1 skew-320' key={this.props.contents.length}/>)
		}
		return (
			<div className="mr-0 pd-0 fl-row fl-center font-pri">
				<div className="w-200 fl-0-1" />
				<div className="fl-row fl-end fl-0-0">
					{captions}
				</div>
			</div>
		)
	}
}

