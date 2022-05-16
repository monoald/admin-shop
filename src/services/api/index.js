const API = process.env.NEXT_PUBLIC_API_URL;
const VERSION = process.env.NEXT_PUBLIC_API_VERSION;

const endPoints = {
  products: {
    getProducts: (limit, offset) => `${API}/api/${VERSION}/products?limit=${limit}&offset=${offset}`,
    getAllProducts: `${API}/api/${VERSION}/products/`,
    addProducts: `${API}/api/${VERSION}/products`,
    getProduct: (id) => `${API}/api/${VERSION}/products/${id}`,
    updateProducts: (id) => `${API}/api/${VERSION}/products/${id}`,
    deleteProducts: (id) => `${API}/api/${VERSION}/products/${id}`,
  },
  users: {
    getUsers: `${API}/api/${VERSION}/users`,
    postUsers: `${API}/api/${VERSION}/users`,
  },
  auth: {
    login: `${API}/api/${VERSION}/auth/login`,
    profile: `${API}/api/${VERSION}/auth/profile`,
  },
  categories: {
    getCategoriesList: `${API}/api/${VERSION}/categories`,
    addCategory: `${API}/api/${VERSION}/categories`,
    getCategoryItem: (id) => `${API}/api/${VERSION}/categories/${id}/products`,
    updateCategories: (id) => `${API}/api/${VERSION}/categories/${id}`,
  },
  files: {
    addImage: `${API}/api/${VERSION}/files/upload`,
    getFiles: (fileName) => `${API}/api/${VERSION}/${fileName}`,
  },
};

export default endPoints;
