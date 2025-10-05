export interface User {
  id?: number,
  name: string,
  email: string,
  role?: string,
  role_id: number,
  address?: string,
  photo?: string,
  file?: File | null,
  password?: string,
}

const userDefault: User = { 
  id: 0,
  name: "",
  email: "",
  role: "",
  role_id: 0,
  address: "",
  photo: "",
  file: null,
  password: "", 
};

export default userDefault;