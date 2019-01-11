import React from "react"

export default class extends React.Component {
	state = { blob: null }

	componentDidMount = () => {
		const { token, url } = this.props

		const headers = new Headers({ authorization: `Bearer ${token}` })
		const options = { headers }

		fetch(url, options)
			.then(response => response.blob())
			.then(response => {
				var blob = new Blob([response])
				const obj = URL.createObjectURL(blob)
				this.setState({ blobObject: obj })
			})
			.catch(e => console.error("Error", e))
	}

	render = () => {
		const { src, token, ...props } = this.props

		return <iframe {...props} />
	}
}
