
export function download_file(path) {
    let request = new XMLHttpRequest();
    request.open("GET", path, false);
    request.send();
    return request.responseText;
}
