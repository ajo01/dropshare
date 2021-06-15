import React, { useState, useEffect } from "react";
// import TinyURL from "tinyurl";
import gcs from "@google-cloud/storage";

const useSignedUrl = (file) => {
  const [signedUrl, setSignedUrl] = useState("");
  const expiryDate = Date.now() + 1000 * 60 * 60 * 24 // 24 hours

  useEffect(() => {
    const bucketName = 'dropshare-project-2021'
    const fileName = file.name;

    const bucket = gcs.bucket(bucketName);
    const file = bucket.file(fileName);
    return file.getSignedUrl({
      action: 'read',
      expires: expiryDate,
    }).then(signedUrls => {
      // signedUrls[0] contains the file's public URL
      setSignedUrl(signedUrls[0] )
    });

  }, [file]);
  return signedUrl;

  // TinyURL.shorten(url).then(function(res) {
  //     console.log(res)
  // }, function(err) {
  //     console.log(err)
  // })
};

export default useSignedUrl;
