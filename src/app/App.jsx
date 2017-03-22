import React from 'react';
import marked from 'marked';
import TextArea from './textArea';
import MarkDownArea from './markDownArea';

class MarkDownApp extends React.Component {
    constructor(props) {
        super(props);  
        this.state = {value: this.props.value};
        this.onUpdate = this.onUpdate.bind(this);
    }
    onUpdate(event) {      
        this.setState({value: event.target.value});        
    }
    render() {
        return (
            <div>
              <TextArea className='txt' id='txtArea' rows='35' type="text" update={this.onUpdate} value={this.state.value}/>
              <MarkDownArea className='txt'>{marked(this.state.value, {sanitize: true})}</MarkDownArea>
            </div>
        );
    }    
}

export default MarkDownApp;