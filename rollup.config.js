export default {
    entry: './index.js',
    dest: './bundles/ngx-validators.umd.js',
    sourceMap: false,
    format: 'umd',
    onwarn: function(warning) {
        // Suppress this error message... there are hundreds of them. Angular team says to ignore it.
        // https://github.com/rollup/rollup/wiki/Troubleshooting#this-is-undefined
        if (warning.code === 'THIS_IS_UNDEFINED') {
            return;
        }
        console.error(warning.message);
    },
    moduleName: 'ng2.validators',
    globals: {
        'google-libphonenumber': 'google.libphonenumber',
        '@angular/core': 'ng.core',
        '@angular/forms': 'ng.forms',
        'rxjs/Observable': 'Rx',
        'rxjs/ReplaySubject': 'Rx',
        'rxjs/add/operator/map': 'Rx.Observable.prototype',
        'rxjs/add/operator/mergeMap': 'Rx.Observable.prototype',
        'rxjs/add/observable/fromEvent': 'Rx.Observable',
        'rxjs/add/observable/of': 'Rx.Observable'
    }
}