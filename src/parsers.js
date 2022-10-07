import yaml from 'js-yaml'

export default (file, format) => {
    let parse;
    if (format === '.json') {
        parse = JSON.parse(file);
    } else if (format === '.yml' || format === 'yaml') {
        parse = yaml.load(file);
    }
    return parse;
};
