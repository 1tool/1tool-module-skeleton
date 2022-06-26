let mix = require('laravel-mix');

mix.setPublicPath('public');

mix.js("src/index.js", "js").vue({ version: 3 })

mix.postCss("src/css/app.css", "public/css", [
    require("tailwindcss"),
])


mix.browserSync({
    watch: true,
    server: 'public',
    files: ['src/**/*'],
    middleware: [
        {
            route: "/api",
            handle: function (req, res, next) {
                // handle any requests at /api
            }
        }
    ]
});
