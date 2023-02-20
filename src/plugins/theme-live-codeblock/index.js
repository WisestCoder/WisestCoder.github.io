/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const path = require('path');
const { validateThemeConfig } = require('./theme/utils/validateThemeConfig');
const generatorScope = require('./theme/utils/generatorScope')

function theme() {
  generatorScope()

  return {
    name: 'docusaurus-theme-live-codeblock',

    getThemePath() {
      return path.resolve(__dirname, './theme');
    },

    configureWebpack() {
      return {
        resolve: {
          alias: {
            buble: path.resolve(__dirname, './theme/utils/customBuble.js'),
          },
        },
      };
    },
  };
}

module.exports = theme;

theme.validateThemeConfig = validateThemeConfig;
