class DisplayMessages extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            messages: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.submitMessage = this.submitMessage.bind(this)
    }
    handleChange(event) {
        this.setState({
            input: event.target.value
        });
    }
    submitMessage() {
        this.setState({
            messages: this.state.messages.concat(this.state.input),
            input: ''
        })
    }

    render() {
        const message = this.state.messages.map(message => <li>{message}</li>);
        return (
            <div>
                <h2>Type in a new Message:</h2>
                <input onChange={this.handleChange} value={this.state.input}></input>
                <button onClick={this.submitMessage}>Submit</button>
                <ul>
                    {message}
                </ul>
            </div>
        );
    }
};