export const isValidName = (fullName: string) => fullName.trim().length > 0;

export const isValidEmail = (email: string) => /\S+@\S+\.\S+/.test(email);
