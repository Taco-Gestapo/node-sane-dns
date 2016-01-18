
declare module 'es6-promisify' {
    function promisify(fn: Function, cb?: Function): any;
    module promisify {}
    export = promisify;
}
