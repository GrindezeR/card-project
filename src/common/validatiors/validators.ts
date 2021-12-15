export const required = (value: string) => {
  if (value) return undefined
  else return 'Field is required'
}

export const maxLength = (maxLength: number) => (value: string) => {
  if (value.length <= maxLength) return undefined
  else return `Max length is ${maxLength} symbols`
}

// export const validate = (values: string) => {
//   const errors: FormikErrorType = {};
//   if (!values.email) {
//     errors.email = 'Required';
//   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//     errors.email = 'Invalid email address';
//   }
//   if (!values.password) {
//     errors.password = 'Required';
//   } else if (values.password.length < 3) {
//     errors.password = 'Password should content more than 2 symbols';
//   }
//   return errors;
// }

export const isRequired = (name: string, value: string) => {
  if (value) return undefined
  else if(name === 'email') return 'Email field is required'
  else if(name === 'password') return 'Password field is required'
  else if(name === 'passwordControl') return 'The second password field is required'
}

export const isMinLength = (name: string, value: string, minLength: number) => {
  if (value.length >= minLength) return undefined
  else return `Min length of ${name} is ${minLength} symbols`
}

export const isEmail = (value: string) => {
  if ((/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value))) return undefined
  else return 'You entered an invalid email'
}
