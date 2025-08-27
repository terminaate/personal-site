export class LastFMApi {
  private baseParams = {
    user: import.meta.env.LASTFM_USER,
    api_key: import.meta.env.LASTFM_API_KEY,
    format: 'json',
  };

  private readonly baseUrl = 'http://ws.audioscrobbler.com/2.0/';

  request<T>(method: string, params: Record<string, any>): Promise<T> {
    const url = new URL(this.baseUrl);

    for (const [key, value] of Object.entries({
      ...this.baseParams,
      ...params,
      method,
    })) {
      url.searchParams.set(key, value);
    }

    return fetch(url).then((r) => r.json());
  }
}

export const lastFmApi = new LastFMApi();
