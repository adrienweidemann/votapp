import { LockClosedIcon } from "@heroicons/react/24/outline";

import { Input } from "@components/Form/Input"

export const LoginForm = (): JSX.Element => {
    return (  
        <form className="w-2/5 space-y-6" action="#">
            <div className="flex justify-center place-items-center">
            <LockClosedIcon
                className="w-20 h-20 p-2 rounded-full ring-2 ring-secondary-300 text-secondary-300"
            />
            </div>

            <div className="text-2xl text-gray-900 font-semibold">
            <h2 className="text-secondary-300">Sign in</h2>
            </div>

            <div className="place-items-left">
            <Input label="Email address" type="text" name="email" placeholder="Email" required />
            </div>

            <div className="place-items-left">
            <Input label="Password" type="password" name="password" placeholder="Password" required />
            </div>

            <button
            type="submit"
            className="w-full text-white bg-primary-500 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm py-2.5 text-center">
            Sign In
            </button>
            <div>

            <a href="#" className="text-sm font-medium text-gray">
                Made with ❤️ at Strasbourg
            </a>
            </div>
        </form>
    )
}