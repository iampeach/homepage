import React, { Component } from 'react'
import AboutBlock from './about-components/AboutBlock'
import { setDelay } from '../../utils/animation'

export default class About extends Component {
	constructor(props) {
		super(props)
		this.state = {
			text: [
				{
					title: 'I am a junior student stydying in Electrical Engineering, National Taiwan University.',
					content: 'Interested in EDA and Machine Learning and Web Design.'
				},
				{
					title: 'Also interested in multimedia and photographing.',
					content: 'Delight in watching movie and also create a short films.'
				}
			]
		}
	}
	render() {
		var abouts = this.state.text.map((text,idx) => 
			<AboutBlock key={idx} delay={setDelay(5*idx)} text={text}/>)
		return(
			<div className={this.props.className}>
				{abouts}
			</div>
		)
	}
}
