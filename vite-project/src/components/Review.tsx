import { Component } from 'react'
import {notesType} from '../notes/notestype'
import './Review.scss'

interface ReviewProps {
	results: notesType[]
}

export default class Review extends Component<ReviewProps> {
	render() {
		return(
			<div className="div--review">
				<h1>Reports</h1>
				{this.props.results.map(result => (
					<p key={result.id}>{result.firstName} {result.result}</p>
					))
				}
			</div>
		)
	}
}