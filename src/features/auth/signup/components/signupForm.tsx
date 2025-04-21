'use client'
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useState } from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

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
  confirmPassword: z.string(),
  fullName: z.string(),
  phone: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

type SignupFormData = z.infer<typeof signupSchema>;

interface SignupFormProps {
  onSubmit: (data: SignupFormData) => Promise<void>;
}

export const SignupForm = ({ onSubmit }: SignupFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
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
      await onSubmit(data);
      reset();
    } catch (error) {
      console.error('Signup error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-6 max-w-md mx-auto">
      <div>
        <Label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
          Full Name
        </Label>
        <Input
          {...register('fullName')}
          type="text"
          id="fullName"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#034642] focus:ring-[#034642]"
          placeholder="eg. John Doe"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
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
      <div>
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
      </div>

      <div>
        <Label htmlFor="password" className="block text-sm font-medium text-gray-700">
          Password
        </Label>
        <Input
          {...register('password')}
          type="password"
          id="password"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#034642] focus:ring-[#034642]"
          placeholder="eg. Password123"
        />
        {errors.password && (
          <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>
        )}
      </div>

      <div>
        <Label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
          Confirm Password
        </Label>
        <Input
          {...register('confirmPassword')}
          type="password"
          id="confirmPassword"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#034642] focus:ring-[#034642]"
          placeholder="eg. Password123"
        />
        {errors.confirmPassword && (
          <p className="mt-1 text-sm text-red-600">{errors.confirmPassword.message}</p>
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
