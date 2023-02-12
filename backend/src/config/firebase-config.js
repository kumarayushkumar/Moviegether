import { initializeApp, credential as _credential } from "firebase-admin";

import serviceAccount from "./service-account.json";

initializeApp({
  credential: _credential.cert(serviceAccount)
})