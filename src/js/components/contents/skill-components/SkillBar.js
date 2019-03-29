import React, { Component } from 'react'

export default class SkillBar extends Component {
	setWidth = width => {
		return 'w-' + width +'p'
	}
	render() {
		return(
			<h3 className={this.setWidth(this.props.skill.width) + ' pd-10 bg-washed-blue font-sec light grey'}>{this.props.skill.name}</h3>
		)
	}
}
