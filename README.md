# webpack-tailwind-config

npm init -y

npm install --save-dev webpack webpack-cli webpack-dev-server style-loader css-loader postcss postcss-loader tailwindcss@latest autoprefixer@latest sass-loader node-sass mini-css-extract-plugin css-minimizer-webpack-plugin html-webpack-plugin

mkdir dist src && touch src/index.html src/index.js src/style.scss src/tailwind.css

webpack.config.js

npx tailwindcss init
add purge to tailwind config

postcss.config.js

package.json npm scripts
