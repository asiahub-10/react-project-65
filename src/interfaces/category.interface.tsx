export interface Category {
    id: number,
    name: string,
    is_active: boolean
}
const categoryDefault: Category = { 
  id: 0, 
  name: "", 
  is_active: false 
};

export default categoryDefault;