export interface InputModel {
  width?: string;
  height?: string;
  formValue?: InputValue;
  inputChange?: any;
  value?: string | number;
  clearInput?: boolean | undefined;
}

export interface InputValue {
  name: string;
  id: string;
  placeholder: string;
  disable?: Boolean;
}

export interface PinInputModel {
  width?: string;
  height?: string;
  inputChange?: any;
  submitVerify?: any;
  isVerify?: boolean;
}

export interface ButtonModel {
  width?: string;
  height?: string;
  bg?: string;
  color?: string;
  formValue: any;
  clickEvent?: any;
  disable: boolean | undefined;
  style: any;
}
