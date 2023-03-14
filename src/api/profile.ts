import { UserCredential } from "firebase/auth";
import { auth, db } from "../firebase/config";
import { doc, setDoc, updateDoc } from "@firebase/firestore";
import { UserProfile } from "../types/profile";

const USER_PATH = "users";

export type CreateUserRequest = {
  credential: UserCredential;
  profile: UserProfile;
};
export async function createUser(params: CreateUserRequest) {
  const { credential, profile } = params;
  const uid = credential.user.uid;

  await setDoc(doc(db, USER_PATH, uid), profile);
}

export type UpdateUserRequest = {
  profile: Partial<Omit<UserProfile, "user" | "email">>;
};
export async function updateUserData(params: UpdateUserRequest) {
  const { profile } = params;

  if (!auth.currentUser) {
    console.error("User needs to log in");
    return;
  }

  const uid = auth.currentUser.uid;

  await updateDoc(doc(db, USER_PATH, uid), profile);
}
