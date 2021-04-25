
class CurrentUser {
  private currentUserId: string = '';
  private hasCurrentUser: boolean = false;

  constructor() {
    const currentUser = localStorage.getItem('current_user');
    if(currentUser === null) {
      this.hasCurrentUser = false;
    } else {
      this.hasCurrentUser = true;
      this.currentUserId = currentUser;
    }
  }

  public hasUserId() {
    return this.hasCurrentUser;
  }

  public getUserId() {
    return this.currentUserId;
  }

  public clear() {
    localStorage.removeItem('current_user');
  }
}

export default CurrentUser;
