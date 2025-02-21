/*
 * Copyright 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with
 * the License. A copy of the License is located at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 * CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions
 * and limitations under the License.
 */

var helpers = require('./__helpers');
var StyleDictionary = require('../index');

describe('buildAllPlatforms', () => {

  beforeEach(() => {
    helpers.clearOutput('__tests__/__output/__buildAllPlatforms/');
  });

  afterEach(() => {
    helpers.clearOutput('__tests__/__output/__buildAllPlatforms/');

  });

  it('should work with json config', () => {
    var StyleDictionaryExtended = StyleDictionary.extend(__dirname + '/__configs/test_buildAllPlatforms.json');
    StyleDictionaryExtended.buildAllPlatforms();
    expect(helpers.fileExists('./__tests__/__output/__buildAllPlatforms/web/_icons.css')).toBeTruthy();
    expect(helpers.fileExists('./__tests__/__output/__buildAllPlatforms/android/colors.xml')).toBeTruthy();
  });

  it('should work with js config', () => {
    var StyleDictionaryExtended = StyleDictionary.extend(__dirname + '/__configs/test_buildAllPlatforms.js');
    StyleDictionaryExtended.buildAllPlatforms();
    expect(helpers.fileExists('./__tests__/__output/__buildAllPlatforms/web/_icons.css')).toBeTruthy();
    expect(helpers.fileExists('./__tests__/__output/__buildAllPlatforms/android/colors.xml')).toBeTruthy();
  });
});
