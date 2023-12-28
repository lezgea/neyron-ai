import * as Yup from 'yup';

export const contactFormSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().required('Email is required'),
  message: Yup.string().required('Message is required'),
});
export const loginFormSchema = Yup.object().shape({
  email: Yup.string().required('Email is required'),
  password: Yup.string().required('Password is required'),
});
export const forgotPasswordSchema = Yup.object().shape({
  email: Yup.string().required('Email is required'),
});
export const resetPassword = Yup.object({
  password: Yup.string().required('Password is required'),
  confirmPassword: Yup.string().oneOf([Yup.ref('password')], 'Passwords must match'),
});
