/**
 * Copyright (c) 2017, Shopgate, Inc. All rights reserved.
 *
 * This source code is licensed under the Apache 2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { mockedPipelineRequestFactory } from './mock';

describe('MockPipelineRequest', () => {
  it(
    'should create class that extends MockedPipelineRequest and resolves on dispatch',
    () => new Promise((resolve, reject) => {
      const FirstClass = mockedPipelineRequestFactory((mockedInstance, res) => {
        expect(typeof mockedInstance === 'object').toBe(true);
        res(1);
      });
      expect(typeof FirstClass.mockedDispatchResolver).toBe('function');
      const firstInstance = new FirstClass('first');
      expect(firstInstance.name).toBe('first');
      expect(firstInstance.input).toEqual({});
      expect(firstInstance.handledErrors).toEqual([]);

      const afterSetInput = firstInstance.setInput({ firstOne: 1 });
      // Check if returns `this`
      expect(afterSetInput instanceof FirstClass).toBe(true);
      // Check if input is set
      expect(firstInstance.input).toEqual({ firstOne: 1 });

      const afterSetHandledErrors = firstInstance.setHandledErrors([1, 2]);
      expect(afterSetHandledErrors instanceof FirstClass).toBe(true);
      expect(afterSetInput.handledErrors).toEqual(afterSetHandledErrors.handledErrors);
      expect(afterSetHandledErrors.handledErrors).toEqual([1, 2]);
      // Check dispatch
      afterSetInput
        .dispatch()
        .then((value) => {
          expect(value).toBe(1);
          resolve();
        })
        .catch(() => {
          reject();
        });
    })
  );
  it(
    'should create another, independent class',
    () => new Promise((resolve, reject) => {
      const SecondClass = mockedPipelineRequestFactory((mockedInstance, res, rej) => {
        expect(typeof mockedInstance === 'object').toBe(true);
        rej(2);
      });
      const secondInstance = new SecondClass('second');
      expect(secondInstance.name).toBe('second');
      expect(secondInstance.input).toEqual({});

      const afterSetInput = secondInstance.setInput({ secondOne: 2 });
      expect(afterSetInput instanceof SecondClass).toBe(true);
      expect(afterSetInput.input).toEqual({ secondOne: 2 });
      afterSetInput
        .dispatch()
        .then(() => {
          reject();
        })
        .catch((val) => {
          expect(val).toBe(2);
          resolve();
        });
    })
  );
  it('should set defaults when calling methods', () => {
    const PipelineClass = mockedPipelineRequestFactory(() => {});
    const instance = new PipelineClass('third');
    instance
      .setInput()
      .setHandledErrors();
    expect(instance.input).toEqual({});
    expect(instance.handledErrors).toEqual([]);
  });
});
