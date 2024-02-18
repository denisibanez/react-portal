import axios from 'axios';

export default {
  async getToken(payload, success, error, done) {
    return await axios.post(
      {
        method: 'post',
        url: `${process.env.VITE__BASE_URL}/auth/login`,
        body: payload,
      },
      success,
      error,
      done
    );
  },
};
