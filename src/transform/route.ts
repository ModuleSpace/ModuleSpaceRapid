export function makeRoute(path: string): string {
    const parts: string[] = path.split("\\");
    return "/" + parts[parts.length - 1].split(".")[0];
}
