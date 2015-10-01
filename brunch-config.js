exports.config = {
  // See http://brunch.io/#documentation for docs.
  files: {
    javascripts: {
      joinTo: 'app.js'

      // To use a separate vendor.js bundle, specify two files path
      // https://github.com/brunch/brunch/blob/stable/docs/config.md#files
      // joinTo: {
      //  'js/app.js': /^(web\/static\/js)/,
      //  'js/vendor.js': /^(web\/static\/vendor)|(deps)/
      // }
      //
      // To change the order of concatenation of files, explicitly mention here
      // https://github.com/brunch/brunch/tree/master/docs#concatenation
      // order: {
      //   before: [
      //     'web/static/vendor/js/jquery-2.1.1.js',
      //     'web/static/vendor/js/bootstrap.min.js'
      //   ]
      // }
    },
    stylesheets: {
      joinTo: 'app.css'
    },
    templates: {
      joinTo: 'app.js'
    }
  },

  conventions: {
    // This option sets where we should place non-css and non-js assets in.
    // By default, in Phoenix this is set to '/web/static/assets'.
    // assets: /^(web\/static\/assets)/
  },

  paths: {
    // Dependencies and current project directories to watch
    // watched: [],

    // Where to compile files to
    // public: ""
  },

  plugins: {
    // Configuration for plugins: Brunch tends to avoid explicit config,
    // but it will be necessary for some things (using Babel's experimental
    // features, for example)
    babel: {
      code: {
        stage: 0
      }
    }
  },

  modules: {

  },

  npm: {
    enabled: true
  }
};
