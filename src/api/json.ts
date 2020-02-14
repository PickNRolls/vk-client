import { URL } from './constants';

const json = async <ReqBody extends {}, ResBody extends {}>(method: string, endpoint: string, body: ReqBody): Promise<ResBody> => {
  const response = await fetch(URL + endpoint, {
    method,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  return response.json();
};

export default json;
