import React from "react"

export default class extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	componentDidMount() {
		const { token, src, type } = this.props

		const method = "GET"
		const authorization = `Bearer ${token}`
		const headers = new Headers({ authorization, type })
		const options = { method, headers }

		fetch(src, options)
			.then(response => response.blob())
			.then(response => {
				var blob = new Blob([response], { type })
				const obj = URL.createObjectURL(blob)
				this.setState({ blobObject: obj })
			})
			.catch(e => console.error("Error", e))
	}

	render() {
		const { src, token, ...props } = this.props

		return <iframe src={this.state.blobObject} {...props} />
	}
}
