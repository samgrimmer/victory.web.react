import axios from 'axios';

import { API_BASE_URL, EVENT_API_QUERYSTRING } from '../Config';

export default class EventService {
  async Get(): Promise<any> {
    return await axios.get(`${API_BASE_URL}/event/${EVENT_API_QUERYSTRING}`);
  }
}
