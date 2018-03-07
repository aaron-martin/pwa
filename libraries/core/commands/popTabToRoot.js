/**
 * Copyright (c) 2017, Shopgate, Inc. All rights reserved.
 *
 * This source code is licensed under the Apache 2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import AppCommand from '../classes/AppCommand';

/**
 * Builds an popTabToRoot command.
 * @param {Object} params The command parameters.
 * @param {string} params.targetTab The navigation stack that shall be popped to root view.
 * @return {AppCommand}
 */
export const popTabToRootCmd = params => (
  new AppCommand()
    .setCommandName('popTabToRoot')
    .setCommandParams(params)
);

/**
 * Sends an popTabToRoot command to the app.
 * @param {Object} params The command parameters.
 * @param {string} params.targetTab The navigation stack that shall be popped to root view.
 */
export default (params) => {
  popTabToRootCmd(params)
    .dispatch();
};
