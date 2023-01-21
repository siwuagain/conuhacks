import { ArrowRightOnRectangleIcon } from "@heroicons/react/20/solid";

export default function Header() {
  return (
    <>
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="https://img.icons8.com/bubbles/100/null/floating-island-forest.png"
            />
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              ReadyDoneData
            </h2>
          </div>
          <form className="mt-8 space-y-6" action="/api/form" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <input
                  className="relative block w-full appearance-none rouned-none rounded-t-md-border text-sm text-gray-900 border border-gray-300 px-0 py-1rounded-lg cursor-pointer bg-gray-50 dark:text-gray-500 focus:outline-none border-gray-300 placeholder-gray-600"
                  id="file_input"
                  type="file"
                />
              </div>
            </div>
            <button className="group relative flex w-full justify-center rounded-md border border-transparent bg-green-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <ArrowRightOnRectangleIcon
                  className="h-5 w-5 text-green-800 group-hover:text-indigo-400"
                  aria-hidden="true"
                />
              </span>
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
