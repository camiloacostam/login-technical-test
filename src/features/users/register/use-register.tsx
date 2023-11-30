import { IRegisterForm } from "..";

export function useRegister() {
  const registerUser = (values: IRegisterForm) => {
    console.log(values);
  };

  return { registerUser };
}
