import { LocalStorageModule } from "../Services/localStorage";

export const auth = new LocalStorageModule<{ email: string, password: string }>("auth");