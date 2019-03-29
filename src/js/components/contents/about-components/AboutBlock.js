import React, { Component } from 'react'

export default class AboutBlock extends Component {
	render() {
		const className = 'font-sec pd-0-150 animated animate-fade-in fade-in-up' + this.props.delay
		return(
			<div className={className}>
				<h2 className='dark-grey'>{this.props.text.title}</h2>
				<h3 className='line-h-40 light grey'>{this.props.text.content}</h3>
			</div>
		)
	}
}
