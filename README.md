# strip-trailing-space-loader

Strip trailing space is a loader for webpack that will remove all trailing whitespaces from compiled files.
Plugin will also replace CRLF to LF, but you can specifiy line_endings in options to something else than `unix` to skip this.

### Instalation
`npm install strip-trailing-space-loader --save-dev`


### Webpack usage

``` javascript
{
  module: {
    rules:[
      {
        test: /\.m?js$/,
        use: [
            {
                loader: 'stripTrailingWhitespace',
                options: {
                    line_endings: 'unix',
                },
            },
        ],
      }
    ]
  }
}
```