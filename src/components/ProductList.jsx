import Link from 'next/link';
import Image from 'next/image';
import { XCircleIcon } from '@heroicons/react/solid';

const ProductList = ({ product, handleDelete, editDelete }) => {
  const urlPattern = /^(http|https)/;
  return (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="flex-shrink-0 h-10 w-10">
            {urlPattern.test(product.images[0]) && product.images[0] !== '' && <Image className="h-10 w-10 rounded-full" src={product.images[0]} alt="" width="40px" height="40px" layout="fixed" />}
          </div>
          <div className="ml-4">
            <div className="text-sm font-medium text-gray-900">{product.title}</div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{product.category.name}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">{product.price}</span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.id}</td>
      {editDelete && (
        <>
          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
            <Link href={`/dashboard/edit/${product.id}`}>
              <span className="text-indigo-600 hover:text-indigo-900">Edit</span>
            </Link>
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
            <XCircleIcon className="flex-shrink-0 h-6 w-6 text-gray-400 cursor-pointer" aria-hidden="true" onClick={() => handleDelete(product.id)} />
          </td>
        </>
      )}
    </tr>
  );
};

export default ProductList;
