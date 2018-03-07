/*
 * Copyright (c) 2017, Shopgate, Inc. All rights reserved.
 *
 * This source code is licensed under the Apache 2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* eslint global-require: "off" */
import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import mochaJsdom from 'mocha-jsdom';
import storageMock from './helpers/localStorage-mock';

const expect = chai.expect;
chai.use(sinonChai);

describe('Unified', () => {
  let SgUnifiedTracking;
  let SgTrackingCore;
  let trackingHelper;
  mochaJsdom();

  before(() => {
    global.localStorage = storageMock();
    global.Headers = () => {};
    global.fetch = () => new Promise(() => {});
    global.console.groupCollapsed = () => {};
    global.console.groupEnd = () => {};
    window.SGEvent = {};

    trackingHelper = require('../helpers/helper');
    SgTrackingCore = require('../core/Core').default.reset().registerFinished();
    SgUnifiedTracking = require('../plugins/trackers/Unified').default;
  });

  const events = [
    'viewContent',
    'purchase',
    'addToCart',
    'initiatedCheckout',
    'completedRegistration',
    'addToWishlist',
    'search',
    'addedPaymentInfo',
  ];

  let plugin = null;

  /**
   * Helper to get always the same plugin instance
   */
  function createPluginInstance() {
    plugin = plugin || new SgUnifiedTracking();
  }

  it('should register for events', () => {
    const registerSpy = sinon.spy(SgUnifiedTracking.prototype, 'registerHelper');

    createPluginInstance();

    events.forEach((event) => {
      expect(registerSpy).to.have.been.calledWith(event);
    });
    registerSpy.restore();
  });

  it('should do ajax requests', () => {
    const spy = sinon.spy(trackingHelper, 'sendDataRequest');

    createPluginInstance();

    // Trigger opt-out
    SgTrackingCore.optOut();
    expect(spy).to.have.been.calledWith('remove_unified_trackers');

    // Revert the opt-out
    SgTrackingCore.optOut(false);
    expect(spy).to.have.been.calledWith('add_unified_trackers');

    spy.restore();
  });

  it('should call SgTrackingAppHandler', () => {
    createPluginInstance();

    const spy = sinon.spy(plugin.appHandler, 'viewContent');

    SgTrackingCore.track.viewContent({
      page: {
        link: 'startpage',
        name: 'Startpage',
      },
    });

    expect(spy).to.have.been.calledWith(
      {
        id: '',
        type: 'startpage',
        name: 'Startpage',
      },
      {
        blacklist: true,
        trackers: undefined,
      });
    spy.restore();
  });
});
