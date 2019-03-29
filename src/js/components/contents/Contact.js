import React, { Component } from 'react'

export default class Contact extends Component {
	render() {
		var style = this.props.className.concat(' fl-col align-center')
		return(
			<div className={style}>
				<h1 className='font-pri f2 animated animate-fade-in fade-in-up'>Contact me</h1>
				<h2 className='font-sec f3 animated animate-fade-in fade-in-up delay-03'>snoopy90338@gmail.com</h2>
				{/*<h2 className='sec-font'>b05901061@ntu.edu.tw</h2>*/}
			</div>
		)
	}
}
