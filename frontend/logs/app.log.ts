
import axios from 'axios';

const log = async (message: string) => {
  try {
    await axios.post('/api/log', { message });
  } catch (error) {
    console.error('Error sending log to backend:', error);
  }
};

export default log;
