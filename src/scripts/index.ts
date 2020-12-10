import Axios from 'axios';
import { loginState } from 'features/auth/loginForm/slice';

export class ApiFetch {
  constructor(_reqAddr: string) {
    this.reqAddr = _reqAddr
  }
  protected reqAddr: string
  protected apiHost = () => {
    const { host, protocol } = window.location
    return process.env.REACT_APP_API_HOST || `${protocol}://${host}:${process.env.REACT_APP_API_PORT}`
  }
  public post = async (body: loginState): Promise<any> => {
    const response = await Axios.post(`${this.apiHost}${this.reqAddr}`, body)
    return response
  }
  public get = async (): Promise<any> => {
    const response = await Axios.post(`${this.apiHost}${this.reqAddr}`)
    return response
  }
}
export class AppDate extends Date {
  
}
