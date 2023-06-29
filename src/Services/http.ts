import axios, { AxiosResponse } from "axios";

class HTTP {
  private apiUrl: string;

  constructor(apiUrl: string) {
    this.apiUrl = apiUrl;
  }

  public async get(url: string): Promise<AxiosResponse> {
    try {
      const response = await axios.get(`${this.apiUrl}${url}`);
      return response;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  
  async post(url: string, data: any): Promise<AxiosResponse> {
    try {
      const urpRequest = `${this.apiUrl}${url}`;      
      const response = await axios.post(urpRequest, data);

      return response;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}

export { HTTP };