'use strict';
/**
 * template config
 * @type {Object}
 */
module.exports = {
  type: 'nunjucks',
  content_type: 'text/html',
  file_ext: '.html',
  file_depr: '_',
  root_path: think.ROOT_PATH + '/view',
  adapter: {
    ejs: {}
  }
};