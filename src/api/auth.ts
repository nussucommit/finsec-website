import { auth } from "../firebase/config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut as firebaseSignOut,
} from "firebase/auth";
import { createUser } from "./profile";

type SignUpRequest = {
  name: string;
  email: string;
  password: string;
  subcomms: string;
  contactNum: string;
};
export async function signUp(params: SignUpRequest) {
  const { name, email, password, subcomms, contactNum } = params;

  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );

  await createUser({
    credential: userCredential,
    profile: {
      name,
      email,
      subcomms,
      contactNum,
    },
  });
}

type LoginRequest = {
  email: string;
  password: string;
};
export async function login(param: LoginRequest) {
  const { email, password } = param;
  return signInWithEmailAndPassword(auth, email, password);
}

export async function signOut() {
  await firebaseSignOut(auth);
}
