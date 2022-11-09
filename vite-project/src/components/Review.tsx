import { Component } from 'react'
import './Review.scss'

export default class Review extends Component {
	render() {
		return(
			<div className="div--review">
				<h1>Reports</h1>
				{this.props.result.map(note => (
					<p key={note.id}>{note.firstName} {note.result}</p>
					))
				}
				<p>
					blablabla blablabla blablablablablabla
					blablabl ablabla blablablabl ablablabl ablablabla
					blablablablablablablablablablablablablablabla
				</p>
			</div>
		)
	}
}