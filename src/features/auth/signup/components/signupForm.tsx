'use client'
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useState } from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { AuthService } from '@/services/auth.service';
import { useRouter } from 'next/navigation';

// Define the form validation schema
const signupSchema = z.object({
  email: z.string().email('Please enter a valid email'),
  password: z
    .string()
    .min(8, 'Password must be at least 8 characters')
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
      'Password must contain at least one uppercase letter, one lowercase letter, and one number'
    ),
  confirm_password: z.string(),
  first_name: z.string(),
  last_name: z.string(),
  username: z.string(),
}).refine((data) => data.password === data.confirm_password, {
  message: "Passwords don't match",
  path: ["confirm_password"],
});

type SignupFormData = z.infer<typeof signupSchema>;

export const SignupForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
  });

  const handleFormSubmit = async (data: SignupFormData) => {
    try {
      setIsSubmitting(true);
      
      await AuthService.register({
        email: data.email,
        password: data.password,
        confirmPassword: data.confirm_password,
        firstName: data.first_name,
        lastName: data.last_name,
        userName: data.username,
      });
      
      reset();
      // Redirect to login page instead of dashboard
      router.push('/auth/login');
    } catch (error) {
      console.error('Signup error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-6 max-w-md mx-auto">
      <div>
        <Label htmlFor="username" className="block text-sm font-medium text-gray-700">
          Username
        </Label>
        <Input
          {...register('username')}
          type="text"
          id="username"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#034642] focus:ring-[#034642]"
          placeholder="Enter your username"
        />
        {errors.username && (
          <p className="mt-1 text-sm text-red-600">{errors.username.message}</p>
        )}
      </div>
      <div>
        <Label htmlFor="first_name" className="block text-sm font-medium text-gray-700">
          First Name
        </Label>
        <Input
          {...register('first_name')}
          type="text"
          id="first_name"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#034642] focus:ring-[#034642]"
          placeholder="Enter your first name"
        />
        {errors.first_name && (
          <p className="mt-1 text-sm text-red-600">{errors.first_name.message}</p>
        )}
      </div>
      <div>
        <Label htmlFor="last_name" className="block text-sm font-medium text-gray-700">
          Last Name
        </Label>
        <Input
          {...register('last_name')}
          type="text"
          id="last_name"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#034642] focus:ring-[#034642]"
          placeholder="Enter your last name"
        />
        {errors.last_name && (
          <p className="mt-1 text-sm text-red-600">{errors.last_name.message}</p>
        )}
      </div>
      <div>
        <Label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email
        </Label>
        <Input
          {...register('email')}
          type="email"
          id="email"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#034642] focus:ring-[#034642]"
          placeholder="Enter your email address"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
        )}
      </div>
      {/* <div>
        <Label htmlFor="phone" className="block text-sm font-medium text-gray-700">
          Phone Number
        </Label>
        <Input
          {...register('phone')}
          type="text"
          id="phone"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#034642] focus:ring-[#034642]"
          placeholder="eg. +1234567890"
        />
        {errors.phone && (
          <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
        )}
      </div> */}

      <div>
        <Label htmlFor="password" className="block text-sm font-medium text-gray-700">
          Password
        </Label>
        <Input
          {...register('password')}
          type="password"
          id="password"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#034642] focus:ring-[#034642]"
          placeholder="Enter your password"
        />
        {errors.password && (
          <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>
        )}
      </div>

      <div>
        <Label htmlFor="confirm_password" className="block text-sm font-medium text-gray-700">
          Confirm Password
        </Label>
        <Input
          {...register('confirm_password')}
          type="password"
          id="confirm_password"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#034642] focus:ring-[#034642]"
          placeholder="Confirm your password"
        />
        {errors.confirm_password && (
          <p className="mt-1 text-sm text-red-600">{errors.confirm_password.message}</p>
        )}
      </div>

      <Button
        type="submit" variant="ghost"
        disabled={isSubmitting}
        className="w-full py-5"
      >
        {isSubmitting ? 'Signing up...' : 'Sign Up'}
      </Button>
      <p className="text-center text-gray-500">Already have an account? <Link href="/auth/login" className="text-[#034642]">Login</Link></p>
    </form>
  );
};

export default SignupForm;
