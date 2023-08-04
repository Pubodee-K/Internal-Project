export function getImageFormat(
    base64ImageCode: string,
    format: "bmp" | "gif" | "x-icon" | "jpeg" | "png" | "svg+xml" | "webp" = "png"
  ): string {
    return `data:image/${format};base64,${base64ImageCode}`;
  }
  