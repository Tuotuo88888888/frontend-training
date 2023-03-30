function Ajax(url, { method = "GET", body = null, async = true } = {}) {
  return new Promise(function (resolve, reject) {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (xhr.readyState === xhr.DONE) {
        switch (xhr.status) {
          case 200:
            resolve(xhr.responseText);
            break;
          default:
            reject(
              new Error(
                `Unexpected status code: ${xhr.status} ${xhr.statusText}`
              )
            );
        }
      }
    };
    xhr.open(method, url, async);
    xhr.send(body);
  });
}
