export function buildAvatarUrl(blobLink, fileName) {
  try {
    const url = new URL(blobLink);
    let base = url.origin + url.pathname.replace(/\/$/, "");
    if (blobLink.endsWith("/")) {
      base += `/${fileName}`;
    } else if (fileName && !blobLink.includes(fileName)) {
      base += `/${fileName}`;
    }
    return base + url.search;
  } catch {
    return blobLink;
  }
}
