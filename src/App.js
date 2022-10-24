marked.setOptions({
    breaks: true
})
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: ''
        };
        this.handleChange = this.handleChange.bind(this);
        
    }
    handleChange(event) {
        this.setState({
            input: event.target.value
        })
    }
    render () {
        return (
            <div>
                <h1>Markdown Previewer</h1>
                <textarea id="editor" value={this.state.input} onChange={this.handleChange}></textarea>
                <div id="preview" dangerouslySetInnerHTML={{__html:marked.parse(this.state.input)}}></div>
            </div>
        )
    }
}
ReactDOM.render(<App />, document.getElementById("app"));