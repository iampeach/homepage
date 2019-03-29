import React, { Component } from 'react'
import SkillBar from './SkillBar'

export default class SkillBlock extends Component {
	render() {
		var skillbars = this.props.skill.content.map((skill, idx)=><SkillBar skill={skill} key={idx}/>)
		return(
			<div className={'d-mr-50 pd-0-150 animated animate-fade-in fade-in-up' + this.props.delay}>
				<h2 className='font-pri dark-grey'>{this.props.skill.title}</h2>
				{skillbars}
			</div>
		)
	}
}
