export interface UserListModel {
  data: {
    current_page: number;
    data:userlist[]; 
    last_page: number;
  };
}

export interface userlist {
  id: number;
  name: string;
  email: string;
  username: string;
  type: string;
  account_type: string;
  date: string;
}
