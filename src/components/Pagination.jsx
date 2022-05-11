import { ChevronLeftIcon, ChevronRightIcon } from'@heroicons/react/solid'
import { useEffect } from'react'

export default function FooterPag({ page, setOffset, setPage, PRODUCTS_LIMIT }) {
  const handlePlusPage = () => {
    setPage(page + 1)
  }
  const handleMinusPage = () => {
    if (page >= 0) {
      setPage(page - 1)
    }
  }
  useEffect(() => {
    setOffset(PRODUCTS_LIMIT * page)
  }, [page, PRODUCTS_LIMIT, setOffset]);
  return (
    <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
      <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-end">
        <div>
          <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"aria-label="Pagination">
            <button
              type="button"
              disabled={page == 0 ? true:false}
              className={`relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 ${
                page == 0 && 'opacity-60'
              }`}
              onClick={handleMinusPage}
            >
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon className="h-5 w-5"aria-hidden="true" />
            </button>
            <p
              aria-current="page"
              className="z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
            >
              {page + 1}
            </p>
            <button
              type="button"
              className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              onClick={handlePlusPage}
            >
              <span className="sr-only">Next</span>
              <ChevronRightIcon className="h-5 w-5"aria-hidden="true" />
            </button>
          </nav>
        </div>
      </div>
    </div>
  )
}