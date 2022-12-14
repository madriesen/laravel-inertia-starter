const mix = require("laravel-mix");

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js("resources/ts/app.ts", "public/js")
    .vue({
        version: 3,
    })
    .postCss("resources/css/app.css", "public/css", [
        require("postcss-import"),
        require("tailwindcss"),
    ])
    .webpackConfig({
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    loader: "ts-loader",
                    options: {appendTsSuffixTo: [/\.vue$/]},
                    exclude: /node_modules/,
                },
            ],
        },
        resolve: {
            extensions: ["*", ".js", ".jsx", ".vue", ".ts", ".tsx"],
        },
    })
    .webpackConfig(require("./webpack.config"))
    .options({
        postCss: [require("tailwindcss")("./tailwind.config.js")]
    })
    .browserSync({
        proxy: "localhost", port: 3000, ghostMode: false
    });

if (mix.inProduction()) {
    mix.version();
}
