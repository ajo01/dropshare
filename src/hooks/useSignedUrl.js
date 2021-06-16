import { useState } from "react";
// import TinyURL from "tinyurl";
// import admin from "firebase-admin";

const {Storage} = require('@google-cloud/storage');


const useSignedUrl = (file) => {
  const [signedUrl, setSignedUrl] = useState("");
  const expiryDate = Date.now() + 1000 * 60 * 60 * 24; // 24 hours
  const storage = new Storage();
  const fileName = file.name
  const bucketName = 'dropshare-4007c.appspot.com'

  async function generateSignedUrl() {
    // These options will allow temporary read access to the file
    const options = {
      version: 'v2', // defaults to 'v2' if missing.
      action: 'read',
      expires: expiryDate,
    };

    // Get a v2 signed URL for the file
    const [url] = await storage
      .bucket(bucketName)
      .file(fileName)
      .getSignedUrl(options);

    console.log(`The signed url for ${fileName} is ${url}.`);
    setSignedUrl(url)
    return signedUrl
  }

  generateSignedUrl().catch(console.error);


};

export default useSignedUrl;
