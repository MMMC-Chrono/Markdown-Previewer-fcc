marked.setOptions({
    breaks: true
})
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: "# Welcome to my React Markdown Previewer!\n\n## This is a sub-heading...\n\n### And here's some other cool stuff:\n\nHeres some code, `<div></div>`, between 2 backticks.\n\n```\n\n// this is multi-line code:\n\nfunction anotherExample(firstLine, lastLine) {\n\n   if (firstLine == '```' && lastLine == '```') {\n\n      return multiLineCode;\n\n   }\n\n}\n\n```\n\nYou can also make text **bold**... whoa!\n\nOr _italic_.\n\nOr... wait for it... **_both!_**\n\nAnd feel free to go crazy ~~crossing stuff out~~.\n\nThere's also [links](https://www.freecodecamp.org).\n\nAnd of course there are lists.\n\n- Some are bulleted.\n\n- With different indentation levels.\n\n- That look like this.\n\nAnd there are numbered lists too.\n\n1. Use just 1s if you want!\n\n1. But it will automically list numbers.\n\n 1. And last but not least, let's not forget embedded images:\n\n![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)\n\n"
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
                <h2>Editor</h2>
                <div id="editor-expand"></div>
                <textarea id="editor" value={this.state.input} onChange={this.handleChange}></textarea>
                <h2>Previewer</h2>
                <div id="previewer-expand"></div>
                <div id="preview" dangerouslySetInnerHTML={{__html:marked.parse(this.state.input)}}></div>
            </div>
        )
    }
}
ReactDOM.render(<App />, document.getElementById("app"));