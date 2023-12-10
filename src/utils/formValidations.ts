import { reactive } from "vue";

const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
const EMAIL_REGEX = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const ERROR_MESSAGES = {
  PASSWORD_MATCH: "Passwords do not match!",
  PASSWORD_FORMAT:
    "Password should be at least 8 characters long and contain at least one uppercase letter, one lowercase letter and one number!",
  EMAIL_FORMAT: "Email is not valid!",
  SUBJECT_FORMAT: "Subject should be at least 5 characters long!",
  MESSAGE_FORMAT: "Message should be at least 10 characters long!",
};

type errorType = {
  email: string | null;
  password: string | null;
  confirmPassword: string | null;
  subject: string | null;
  message: string | null;
};

export const errors = reactive<errorType>({
  email: "",
  password: "",
  confirmPassword: "",
  subject: null,
  message: null,
});

export function verifEmail(email: string) {
  if (EMAIL_REGEX.test(email)) {
    errors.email = null;
    return true;
  } else {
    errors.email = ERROR_MESSAGES.EMAIL_FORMAT;
    return false;
  }
}

export function verifSubject(subject: string) {
  if (subject.length < 5) {
    errors.subject = ERROR_MESSAGES.SUBJECT_FORMAT;
    return false;
  } else {
    errors.subject = null;
    return true;
  }
}

export function verifMessage(message: string) {
  if (message.length < 10) {
    errors.message = ERROR_MESSAGES.MESSAGE_FORMAT;
    return false;
  } else {
    errors.message = null;
    return true;
  }
}

export function verifPassword(password: string) {
  if (!PASSWORD_REGEX.test(password)) {
    errors.password = ERROR_MESSAGES.PASSWORD_FORMAT;
    return false;
  }

  errors.password = null;
  return true;
}

export function verifConfirmPassword(
  password: string,
  confirmPassword: string
) {
  if (password !== confirmPassword) {
    errors.confirmPassword = ERROR_MESSAGES.PASSWORD_MATCH;
    return false;
  }

  errors.confirmPassword = null;
  return true;
}
