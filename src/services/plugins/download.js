import axios from '@/plugins/axios/index';
import store from '@/store';

export default async (
  { method, url, body, headers },
  success,
  error,
  done = () => {}
) => {
  try {
    const res = await axios({
      url,
      method,
      data: body,
      responseType: 'blob',
      headers,
    }).then((res) => {
      if (res.data.type === 'application/json') {
        const blb = new Blob([res.data]);
        const reader = new FileReader();

        reader.addEventListener('loadend', (e) => {
          const { result } = JSON.parse(e.srcElement.result);
          store.dispatch('error/setError', result.message);
        });

        reader.readAsText(blb);
      } else {
        const fileURL = window.URL.createObjectURL(new Blob([res.data]));

        const filename = res.headers['content-type'].split('=');
        const fileLink = document.createElement('a');

        fileLink.href = fileURL;
        fileLink.setAttribute('download', filename[filename.length - 1]);
        document.body.appendChild(fileLink);

        fileLink.click();
        document.body.removeChild(fileLink);
      }
    });

    return await success(res);
  } catch (e) {
    return await error(e);
  } finally {
    done();
  }
};
