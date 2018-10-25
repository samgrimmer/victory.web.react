import * as React from 'react';
import EventService from 'src/service/EventService';
import { Spin, List, Card } from 'antd';

interface IEventsProps {}

interface IEventsState {
  events: any[];
  loading: boolean;
}

export default class Events extends React.Component<
  IEventsProps,
  IEventsState
> {
  state: IEventsState = {
    events: [],
    loading: true,
  };

  eventService = new EventService();

  componentDidMount = async () => {

    const events = await this.eventService.Get();

    console.log(events.data.data);

    this.setState({
      events: events.data.data,
      loading: false,
    });
  };

  render() {
    if (this.state.loading) {
      return (
        <div>
          <Spin />
        </div>
      );
    } else {
      return (
        <List
          grid={{ gutter: 16, column: 4 }}
          dataSource={this.state.events}
          renderItem={(event: any) => (
            <List.Item key={event.id}>
              <Card
                key={event.id}
                title={new Date(event.attributes.created).toISOString()}
              >
                {event.attributes.title}
              </Card>
            </List.Item>
          )}
        />
      );
    }
  }
}
