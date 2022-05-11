import useProducts from '@hooks/useProducts';
import ProductList from 'components/ProductList';
import Pagination from 'components/Pagination';
import { Chart } from 'common/Chart';

export default function Dashboard() {
  const products = useProducts();
  const productsData = products.products;

  const categoryNames = productsData?.map((product) => product.category);
  const categoryCount = categoryNames?.map((category) => category.name);

  const countOccurrences = (arr) => arr.reduce((prev, curr) => ((prev[curr] = ++prev[curr] || 1), prev),
  {});

  return (
    <>
      { categoryCount !== undefined && 
        <Chart className="mb-8 mt-2" chartData={{
          datasets: [{
            label: 'Categories',
            data: countOccurrences(categoryCount),
            borderWidth: 2,
            backgroundColor: ['#ffbb11', '#c0c0c0', '#50af95', '#f3ba2f', '#2a71d0']
          }]}} 
        /> 
      }
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Name
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Category
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Price
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Id
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Edit</span>
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Delete</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {products?.products?.map((product) => (
                    <ProductList product={product} key={`Product-item-${product.id}`} />
                  ))}
                </tbody>
              </table>
              <Pagination 
                page={products.page} 
                setOffset={products.setOffset} 
                setPage={products.setPage} 
                PRODUCTS_LIMIT={products.PRODUCTS_LIMIT} 
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
