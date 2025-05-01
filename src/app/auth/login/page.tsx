import { LoginForm } from '@/features/auth/login/components/loginForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Login",
    description: "Login to your account",
}

const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Login - Bevel Space",
    "description": "Login to your account to access exclusive real estate listings.",
    "url": "https://bevelspace.vercel.app/auth/login",
    "provider": {
        "@type": "Organization",
        "name": "Bevel Space",
        "url": "https://bevelspace.vercel.app"
    }
}


export default function LoginPage() {
  return (
    <>
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"
        style={{ backgroundImage: `url('/images/authbg.png')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="max-w-md w-full space-y-8 bg-white py-6 sm:py-8 px-4 shadow rounded-lg sm:px-10">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
        </div>
        <LoginForm />
      </div>
      </div>
    </>
  );
}