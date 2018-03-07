/**
 * Copyright (c) 2017-present, Shopgate, Inc. All rights reserved.
 *
 * This source code is licensed under the Apache 2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import get from 'lodash/get';
import { TYPE_PHONE, OS_ALL } from '@shopgate/pwa-common/constants/Device';
import { componentsConfig } from '@shopgate/pwa-common/helpers/config';
import { getWebStorageEntry } from '@shopgate/pwa-core/commands/webStorage';
import core from '@shopgate/tracking-core/core/Core';
import { appDidStart$ } from '@shopgate/pwa-common/streams/app';
import UnifiedPlugin from '@shopgate/tracking-core/plugins/trackers/Unified';

/**
 * Setup tracking subscriptions.
 * @param {Function} subscribe The subscribe function.
 */
export default function setup(subscribe) {
  /**
   * Gets triggered when the app starts.
   */
  subscribe(appDidStart$, async () => {
    const clientInformationResponse = await getWebStorageEntry({ name: 'clientInformation' });

    const clientInformation = {
      type: get(clientInformationResponse, 'value.device.type', TYPE_PHONE),
      os: get(clientInformationResponse, 'value.device.os.platform', OS_ALL),
    };

    // TODO: instantiate the UnifiedPlugin only if a native tracker is configured (FB, AppsFlyer)
    // eslint-disable-next-line no-new
    new UnifiedPlugin();

    // eslint-disable-next-line no-undef
    const extensionsIndex = (await import(`${__THEME_PATH__}/extensions/tracking`)).default;
    const trackingExtensions = componentsConfig.tracking;

    Object.keys(trackingExtensions).forEach((key) => {
      const pluginInit = extensionsIndex[key];

      if (pluginInit) {
        /**
         * Call the init function of the plugin.
         * This init function will create the actual instances
         */
        pluginInit(clientInformation);
      }
    });

    core.registerFinished();
  });
}
