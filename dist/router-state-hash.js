'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _hasher = require('hasher');

var _hasher2 = _interopRequireDefault(_hasher);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RouterStateHash = function RouterStateHash(router) {
    var self = this;

    self.router = router;
}; // Copyright (c) CBC/Radio-Canada. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

RouterStateHash.prototype.init = function () {
    var self = this;

    _hasher2.default.initialized.add(function (newHash, oldHash) {
        self.router._navigate(newHash, oldHash);
    });

    _hasher2.default.changed.add(function (newHash, oldHash) {
        self.router._navigate(newHash, oldHash);
    });

    _hasher2.default.init();
};

RouterStateHash.prototype.setUrlSilently = function (url) {
    _hasher2.default.changed.active = false;
    _hasher2.default.setHash(url);
    _hasher2.default.changed.active = true;
};

RouterStateHash.prototype.setUrl = function (url) {
    _hasher2.default.setHash(url);
};

RouterStateHash.prototype.setUrlWithoutGeneratingNewHistoryRecord = function (url) {
    _hasher2.default.replaceHash(url);
};

exports.default = RouterStateHash;