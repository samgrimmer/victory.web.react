import * as React from 'react';
import EventService from './service/EventService';

interface IProps {
  text: string;
  age?: number;
}

interface IState {
  email: string;
  name: string;
}

export default class Form extends React.Component<IProps, IState> {
  state: IState = {
    email: '',
    name: '',
  };

  eventService = new EventService();

  componentDidMount = async () => {
    const data = await this.eventService.Get();
    console.log(JSON.stringify(data));
  };

  handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { name }: any = e.target;

    this.setState({
      name,
    });
  };

  render() {
    const { text } = this.props;
    const { name } = this.state;

    return (
      <div>
        <p>{text}</p>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
        <p>
          <input name="name" value={name} onChange={this.handleChange} />
        </p>
      </div>
    );
  }
}
