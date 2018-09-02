import * as React from 'react';
import { Input } from 'antd';
import MenuClass from './Menu';


interface MessageState {
    message: string;
}
export default class Message extends React.Component<{}, MessageState> {
    constructor(props: {}) {
        super(props);
        this.state = { message: '' };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        this.setState({ message: event.target.value });
    }
    render() {
        return <div>
            <MenuClass />
            <h3>Message: {this.state.message}</h3>
            Enter message: <Input placeholder="Input from ant design" value={this.state.message} onChange={this.handleChange} />
        </div>;
    }
}