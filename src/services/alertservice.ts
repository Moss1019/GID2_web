
class AlertService {
  private m_message: string;
  private m_currentTimeout: any;
  private m_callbacks: ((show: boolean) => void)[];

  constructor() {
    this.m_callbacks = [];
    this.m_message = '';
    this.m_currentTimeout = undefined;
  }

  message = () => this.m_message;

  register = (callback: (show: boolean) => void) => {
    this.m_callbacks.push(callback);
  }

  showToast = (message: string) => {
    if(this.m_currentTimeout !== undefined) {
      clearTimeout(this.m_currentTimeout);
    }
    this.m_message = message;
    this.m_currentTimeout = setTimeout(() => {
      for(let callback of this.m_callbacks) {
        callback(false);
      }
      this.m_message = '';
      clearInterval(this.m_currentTimeout);
      this.m_currentTimeout = undefined;
    }, 6000);
    for(let callback of this.m_callbacks) {
      callback(true);
    }
  }
}

export default AlertService;
