export function buildRoutePath(path) {
    const routeParameterRegex = /:([a-zA-Z]+)/g;
    const pathWithParams = path.replaceAll(routeParameterRegex, ('(?<$1>[a-z0-9\-_]+)'))
    
    const PathRegex = new RegExp(`^${pathWithParams}(?<query>\\?(.*))?$`)

    return PathRegex
}