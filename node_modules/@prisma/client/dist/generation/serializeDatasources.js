"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// this is NOT printing datasources, but just serializing the data source
// object used for generation
// this is needed, as we need to print `path.resolve` statements
// it basically just strips the quotes
function serializeDatasources(datasources) {
    const str = JSON.stringify(datasources, null, 2);
    const replaceRegex = /"('file:'.*'\))"/;
    return str
        .split('\n')
        .map(line => {
        return line.replace(replaceRegex, (match) => {
            return match.slice(1, match.length - 1); // strip the quotes
        });
    })
        .join('\n');
}
exports.serializeDatasources = serializeDatasources;
function datasourceToDatasourceOverwrite(datasource) {
    return {
        name: datasource.name,
        url: datasource.url.fromEnvVar ? `env("${datasource.url.fromEnvVar}")` : datasource.url.value,
    };
}
exports.datasourceToDatasourceOverwrite = datasourceToDatasourceOverwrite;
//# sourceMappingURL=serializeDatasources.js.map