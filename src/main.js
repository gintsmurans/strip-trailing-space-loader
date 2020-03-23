const loaderUtils = require('loader-utils');


const defaultOptions = {
    line_endings: 'unix',
    spacing: 'space',
};

module.exports = function (content) {
    let loaderOptions = loaderUtils.getOptions(this) || {};
    loaderOptions = Object.assign(defaultOptions, loaderOptions);

    if (content) {
        let result = content;
        if (loaderOptions.line_endings === 'unix') {
            result = result.replace(/\r/g, ''); // Remove CR characters, git on linux is not very found of them
        }
        if (loaderOptions.spacing === 'space') {
            result = result.replace(/^[\t]*/gm, '    ') // Replace all starting tabs with spaces
        }
        result = result
            .replace(/ *import/g, 'import') // Fix issue where developer has prepended import statement with a space.
            .replace(/[^\S\r\n]*$/gm, ''); // Replace spaces at the end of the line, but not CR LF
        if (result) {
            return result;
        }
    }

    return content;
};
