import Image from "next/image";
import LoginForm from "./LoginForm";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white md:bg-blue-200">
      <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg flex flex-col md:flex-row items-center justify-center gap-2 md:gap-0 p-2 md:p-6 min-h-screen md:min-h-0 pt-24 pb-24 md:pt-24 md:pb-24">
        {/* Logo Section */}
        <div className="flex flex-col justify-center items-center mb-0">
          <Image
            src="/images/logo.png"
            alt="Logo Al Irsyad"
            width={240}
            height={240}
            className="w-48 h-48 md:w-72 md:h-72 object-contain mb-0"
            priority
          />
        </div>
        {/* Login Form Section */}
        <div className="flex flex-col justify-center items-center px-2 md:px-6">
          <div className="w-full flex flex-col items-center">
            <h1 className="text-3xl md:text-4xl mb-0 md:mb-4 text-center text-gray-800 w-full">Welcome, Future Team Member!</h1>
<p className="text-base md:text-lg mb-4 text-center text-gray-600 w-full">We're glad to have you here. Let's start your application journey.</p>
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  );
};
