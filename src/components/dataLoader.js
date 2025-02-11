import React from "react";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import Button from "react-bootstrap/Button";
import Dropzone from "react-dropzone";

export default class DataLoader extends React.PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			isLoadingSchema: false,
			isLoadingMicroscopes: false,
			isSchemaLoaded: false,
			isMicroscopesLoaded: false
		};

		this.simulateClickLoadSchema = this.simulateClickLoadSchema.bind(this);
		this.onClickLoadSchema = this.onClickLoadSchema.bind(this);

		this.simulateClickLoadMicroscopes = this.simulateClickLoadMicroscopes.bind(
			this
		);
		this.onClickLoadMicroscopes = this.onClickLoadMicroscopes.bind(this);
	}

	onClickLoadSchema() {
		this.setState({ isLoadingSchema: true }, () => {
			this.props.onClickLoadSchema().then(() => {
				this.setState({ isLoadingSchema: false, isSchemaLoaded: true });
			});
		});
	}

	onClickLoadMicroscopes() {
		this.setState({ isLoadingMicroscopes: true }, () => {
			this.props.onClickLoadMicroscopes().then(() => {
				this.setState({
					isLoadingMicroscopes: false,
					isMicroscopesLoaded: true
				});
			});
		});
	}

	simulateClickLoadSchema(loadSchemaButtonRef) {
		if (loadSchemaButtonRef === null) return;
		loadSchemaButtonRef.click();
	}

	simulateClickLoadMicroscopes(loadMicroscopesButtonRef) {
		if (loadMicroscopesButtonRef === null) return;
		loadMicroscopesButtonRef.click();
	}

	render() {
		const buttonStyle = {
			width: "200px",
			height: "50px",
			padding: "5px",
			margin: "5px"
		};
		const windowExternalContainer = {
			display: "flex",
			justifyContent: "center",
			flexFlow: "column",
			width: "100%",
			height: "100%",
			alignItems: "center"
		};
		const windowInternalContainer = {
			display: "flex",
			justifyContent: "center",
			flexFlow: "column",
			width: "100%",
			height: "100%",
			alignItems: "center"
		};
		let isLoadingSchema = this.state.isLoadingSchema;
		let isLoadingMicroscopes = this.state.isLoadingMicroscopes;
		let isSchemaLoaded = this.state.isSchemaLoaded;
		let isMicroscopesLoaded = this.state.isMicroscopesLoaded;
		return (
			<div style={windowExternalContainer}>
				<div style={windowInternalContainer}>
					<Button
						ref={this.simulateClickLoadSchema}
						disabled={isLoadingSchema || isSchemaLoaded}
						onClick={
							!isLoadingSchema && !isSchemaLoaded
								? this.onClickLoadSchema
								: null
						}
						style={buttonStyle}
						size="lg"
					>
						{isLoadingSchema
							? "Loading schema"
							: isSchemaLoaded
								? "Schema loaded"
								: "Load schema"}
					</Button>
					<Button
						ref={this.simulateClickLoadMicroscopes}
						disabled={isLoadingMicroscopes || isMicroscopesLoaded}
						onClick={
							!isLoadingMicroscopes && !isMicroscopesLoaded
								? this.onClickLoadMicroscopes
								: null
						}
						style={buttonStyle}
						size="lg"
					>
						{isLoadingMicroscopes
							? "Loading microscopes"
							: isMicroscopesLoaded
								? "Microscopes loaded"
								: "Load microscopes"}
					</Button>
				</div>
			</div>
		);
	}
}
