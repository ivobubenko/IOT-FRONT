import { signInWithGoogle, signIn } from "../config/auth";

export default function SignUpMenu() {
  return (
    <>
      <p className="text-lg text-gray-600 mb-8"></p>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h1 className="text-4xl font-bold mb-6 text-gray-800">
            Welcome to Smart Pot
          </h1>
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Your personalized solution for smart plant care.
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <button
            onClick={signInWithGoogle}
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Sign in with Google
          </button>
        </div>
      </div>
    </>
  );
}
