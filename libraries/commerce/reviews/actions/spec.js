/**
 * Copyright (c) 2017-present, Shopgate, Inc. All rights reserved.
 *
 * This source code is licensed under the Apache 2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { mockedPipelineRequestFactory } from '@shopgate/pwa-core/classes/PipelineRequest/mock';
import { EUNKNOWN, EACCESS } from '@shopgate/pwa-core/constants/Pipeline';
import fetchReviews from './fetchReviews';
import getProductReviews from './getProductReviews';
import getUserReview from './getUserReview';
import submitReview from './submitReview';
import {
  finalState,
} from '../selectors/mock';

const { console } = global;
let mockedResolver;
jest.mock(
  '@shopgate/pwa-core/classes/PipelineRequest',
  () => (
    mockedPipelineRequestFactory((mockInstance, resolve, reject) => {
      mockedResolver(mockInstance, resolve, reject);
    })
  )
);

describe('Reviews actions', () => {
  describe('fetchReviews', () => {
    beforeEach(() => {
      console.error = jest.fn();
    });
    afterEach(() => {
      console.error.mockClear();
    });
    /**
     * Assertion helper function
     * @param {string} variant ('then' or 'catch')
     * @param {function} done Async test case done callback function.
     */
    const testFetch = (variant, done) => {
      const mockedDispatch = jest.fn();
      const promise = fetchReviews('foo', 2, 1)(mockedDispatch);
      // Make sure test callback is executed after the internal fetchReviews one.
      setTimeout(() => {
        promise[variant]((result) => {
          expect(result.mockInstance.name).toBe('getProductReviews');
          expect(result.mockInstance.input).toEqual({
            productId: 'foo',
            limit: 2,
            offset: 1,
            sort: 'dateDesc',
          });
          expect(console.error).toHaveBeenCalledTimes(variant === 'then' ? 0 : 1);
          expect(mockedDispatch).toHaveBeenCalledTimes(2);
          done();
        });
      }, 0);
    };
    it('should resolve and call appropriate actions', (done) => {
      mockedResolver = (mockInstance, resolve) => {
        resolve({
          reviews: [],
          mockInstance,
        });
      };
      testFetch('then', done);
    });
    it('should fail and call appropriate actions', (done) => {
      mockedResolver = (mockInstance, resolve, reject) => {
        reject({
          mockInstance,
        });
      };
      testFetch('catch', done);
    });
  });
  describe('getProductReviews', () => {
    /**
     * Assertion helper function
     * @param {string} variant ('then' or 'catch')
     * @param {function} done Async test case done callback function.
     * @param {Object} state React state.
     */
    const testGetProductReviews = (variant, done, state) => {
      const mockedDispatch = jest.fn();
      const promise = getProductReviews('foo', 10, 'invalidSort')(mockedDispatch, () => state);
      setTimeout(() => {
        promise[variant]((result) => {
          expect(result.mockInstance.name).toBe('getProductReviews');
          expect(result.mockInstance.input).toEqual({
            productId: 'foo',
            limit: 10,
            sort: 'invalidSort',
          });
          expect(mockedDispatch).toHaveBeenCalledTimes(2);
          done();
        });
      }, 0);
    };
    it('should resolve and call appropriate actions', (done) => {
      mockedResolver = (mockInstance, resolve) => {
        resolve({
          reviews: [],
          mockInstance,
        });
      };
      testGetProductReviews('then', done, finalState);
    });
    it('should reject and call appropriate actions', (done) => {
      mockedResolver = (mockInstance, resolve, reject) => {
        reject({
          mockInstance,
        });
      };
      testGetProductReviews('catch', done, finalState);
    });
  });
  describe('getUserReview', () => {
    /**
     * Assertion helper function
     * @param {string} variant ('then' or 'catch')
     * @param {function} done Async test case done callback function.
     * @param {Object} state React state.
     */
    const testGetUserReview = (variant, done, state) => {
      const mockedDispatch = jest.fn();
      const promise = getUserReview('foo')(mockedDispatch, () => state);
      setTimeout(() => {
        promise[variant]((result) => {
          expect(result.mockInstance.name).toBe('getUserReview');
          expect(result.mockInstance.handledErrors).toEqual([EUNKNOWN, EACCESS]);
          expect(result.mockInstance.input).toEqual({
            productId: 'foo',
          });
          expect(mockedDispatch).toHaveBeenCalledTimes(2);
          done();
        });
      }, 0);
    };
    it('should resolve and call appropriate actions', (done) => {
      mockedResolver = (mockInstance, resolve) => {
        resolve({
          reviews: [],
          mockInstance,
        });
      };
      testGetUserReview('then', done, finalState);
    });
    it('should reject and call appropriate actions', (done) => {
      mockedResolver = (mockInstance, resolve, reject) => {
        reject({
          mockInstance,
        });
      };
      testGetUserReview('catch', done, finalState);
    });
  });
  describe('submitReview', () => {
    const testReviewInput = {
      productId: 'foo',
      rate: 10,
      title: ' Title ',
      author: ' Author  ',
      review: 'RRRR   ',
    };
    const testReviewSanitized = {
      productId: 'foo',
      rate: 10,
      title: 'Title',
      author: 'Author',
      review: 'RRRR',
    };
    /**
     * Assertion helper function
     * @param {string} variant ('then' or 'catch')
     * @param {Object} review Review.
     * @param {boolean} update Update.
     * @param {Object} state React state.
     * @param {function} done Async test case done callback function.
     */
    const testSubmitReview = (variant, review, update, state, done) => {
      const expectedDispatches = variant === 'then' ? 3 : 2;
      const mockedDispatch = jest.fn();
      const promise = submitReview(review, update)(mockedDispatch, () => state);
      setTimeout(() => {
        promise[variant]((result) => {
          expect(result.mockInstance.name).toBe(update ? 'updateProductReview' : 'addProductReview');
          expect(result.mockInstance.input).toEqual(testReviewSanitized);
          expect(mockedDispatch).toHaveBeenCalledTimes(expectedDispatches);
          done();
        });
      }, 0);
    };
    it('should resolve and call appropriate actions on update', (done) => {
      mockedResolver = (mockInstance, resolve) => {
        resolve({
          reviews: [],
          mockInstance,
        });
      };
      testSubmitReview('then', testReviewInput, true, finalState, done);
    });
    it('should resolve and call appropriate actions on add', (done) => {
      mockedResolver = (mockInstance, resolve) => {
        resolve({
          reviews: [],
          mockInstance,
        });
      };
      testSubmitReview('then', testReviewInput, false, finalState, done);
    });
    it('should reject and call appropriate actions on add', (done) => {
      mockedResolver = (mockInstance, resolve, reject) => {
        reject({
          reviews: [],
          mockInstance,
        });
      };
      testSubmitReview('catch', testReviewInput, false, finalState, done);
    });
    it('should reject and call appropriate actions on update', (done) => {
      mockedResolver = (mockInstance, resolve, reject) => {
        reject({
          reviews: [],
          mockInstance,
        });
      };
      testSubmitReview('catch', testReviewInput, true, finalState, done);
    });
  });
});
