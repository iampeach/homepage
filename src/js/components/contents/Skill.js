import React, { Component } from 'react'
import SkillBlock from './skill-components/SkillBlock'
import { setDelay } from '../../utils/animation'

export default class Skills extends Component {
	constructor(props) {
		super(props)
		this.state = {
			skills: [
				{
					title: 'Programming',
					content: [
						{name: 'C++', width: '90'},
						{name: 'Python', width: '80'},
						{name: 'Javascript(React, Nodejs)', width: '80'}
					]
				},
				{
					title: 'Tools',
					content: [
						{name: 'Git', width: '90'},
						{name: 'Tensorflow', width: '80'},
						{name: 'LaTeX', width: '80'}
					]
				},
				{
					title: 'Multimedia',
					content: [
						{name: 'Photoshop', width: '100'},
						{name: 'Indesign', width: '90'},
						{name: 'Lightroom', width: '90'},
						{name: 'Final Cut Pro X', width: '80'},
						{name: 'Premiere Pro', width: '80'}
					]
				}
			]
		}
	}
	render() {
		var skillblocks = this.state.skills.map((skill,idx) => <SkillBlock skill={skill} delay={setDelay(3*idx)} key={idx}/>)
		return(
			<div className={this.props.className}>
				{skillblocks}
			</div>
		)
	}
}
