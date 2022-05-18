import { ValidateTextInputProps } from "./interface"

export function validateTextInput(
  field: string,
  value: string
): ValidateTextInputProps {
  if (value.length < 5) {
    return {
      status: {
        isValid: false,
        message: `O campo ${field} deve conter no mínimo 5 caracteres`
      }
    }
  }

  return {
    status: {
      isValid: true,
    }
  }
}
