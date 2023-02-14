import admin from "firebase-admin"
import serviceAccount from "./service-account.json" assert { type: "json" }

export default admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
})