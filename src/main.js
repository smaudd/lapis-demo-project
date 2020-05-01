require.context('../content/', true, /\.yml$/)
require.context('./templates/', true, /\.ejs$/)
console.log(process)
if (module.hot) {
  module.hot.accept([`./templates/index.ejs`], function() {
    console.log('SOY TEMPLATE!!')
    // Do something with the updated library module...
  })
}

