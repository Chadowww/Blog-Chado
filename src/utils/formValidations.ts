import { reactive } from "vue";

type errorType = {
  email: string | null;
  subject: string | null;
  message: string | null;
};

export const errors = reactive<errorType>({
  email: null,
  subject: null,
  message: null,
});

export function verifEmail(email: string) {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (regex.test(email)) {
    errors.email = "";
    return true;
  } else {
    errors.email = "Email is not valid!";
    return false;
  }
}

export function verifSubject(subject: string) {
  if (subject.length < 5) {
    errors.subject = "Subject should be at least 5 characters long!";
    return false;
  } else {
    errors.subject = "";
    return true;
  }
}

export function verifMessage(message: string) {
  if (message.length < 10) {
    errors.message = "Message should be at least 10 characters long!";
    return false;
  } else {
    errors.message = "";
    return true;
  }
}
