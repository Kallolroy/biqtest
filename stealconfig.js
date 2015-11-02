steal.config({
    map: {
        "*": {
            "jquery/jquery.js": "jquery",
            "jquery": "/test/jquery/jquery-1.10.2/jquery-1.10.2.min.js",
            "funcunit": "/test/funcunit"
        }
    },
    paths: {
        "models/": "js/",
        "controllers/": "js/",
        "fixtures/": "js/"
    },
    shim: {
        jquery: {
            exports: "jQuery"
        }
    },
    ext: {
        js: "js",
        css: "css",
        ejs: "can/view/ejs/ejs.js"
    }
});
