import { useRef } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import { LockClosedIcon } from '@heroicons/react/solid';
import { useAuth } from '@hooks/useAuth';
import { useState } from 'react';

export default function LoginPage() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const auth = useAuth();
  const router = useRouter();
  const [errorLogin, setErrorLogin] = useState(null);
  const [loading, setLoading] = useState(false);

  const submitHandler = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    setErrorLogin(null);
    setLoading(true);

    auth
      .signIn(email, password)
      .then(() => {
        router.push('/dashboard');
      })
      .catch((error) => {
        if (error.response?.status === 401) {
          setErrorLogin('Incorrect user or password.');
        } else if (error.request) {
          setErrorLogin('There is an error.');
        } else {
          setErrorLogin('Something went wrong.');
        }
        setLoading(false);
      });
  };

  return (
    <>
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <Image className="mx-auto h-12 w-auto" alt="Workflow" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" width="40px" height="40px" layout="fixed" />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={submitHandler}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                  ref={emailRef}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                  ref={passwordRef}
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <Link href="/">
                  <span className="font-medium text-indigo-600 hover:text-indigo-500">Forgot your password?</span>
                </Link>
              </div>
            </div>
            {errorLogin && (
              <div className="p-3 mb-3 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800" role="alert">
                <span className="font-medium">Error!</span> {errorLogin}
              </div>
            )}

            {loading && (
              <span className="flex absolute h-4 w-4 top-0 right-0 -mt-1 -mr-1">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-300 opacity-75" />
                <span className="relative inline-flex rounded-full h-4 w-4 bg-indigo-400" />
              </span>
            )}

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                </span>
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
