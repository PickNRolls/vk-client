import { URL } from './constants';

interface Payload<ReqBody> {
  endpoint: string;
  method?: string;
  body?: ReqBody;
  headers?: Headers;
}

const json = async <ReqBody, ResBody>(payload: Payload<ReqBody>): Promise<ResBody> => {
  const url = `${URL}${payload.endpoint}`;

  try {
    const response = await fetch(url, {
      method: payload.method || 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        ...payload.headers,
      },
      body: JSON.stringify(payload.body),
    });

    return response.json();

  } catch (error) {
    console.error(error);
    return error;
  }
};

declare global {
  interface Window {
    json: typeof json;
  }
}
window.json = json;

export default json;
