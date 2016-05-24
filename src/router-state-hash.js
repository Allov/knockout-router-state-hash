// Copyright (c) CBC/Radio-Canada. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import hasher from 'hasher';


var RouterStateHash = function(router) {
    var self = this;

    self.router = router;
};

RouterStateHash.prototype.init = function() {
    var self = this;

    hasher.initialized.add(function(newHash, oldHash) {
        self.router._navigate(newHash, oldHash);
    });

    hasher.changed.add(function(newHash, oldHash) {
        self.router._navigate(newHash, oldHash);
    });

    hasher.init();
};

RouterStateHash.prototype.setUrlSilently = function(url) {
    hasher.changed.active = false;
    hasher.setHash(url);
    hasher.changed.active = true;
};

RouterStateHash.prototype.setUrl = function(url) {
    hasher.setHash(url);
};

RouterStateHash.prototype.setUrlWithoutGeneratingNewHistoryRecord = function(url) {
    hasher.replaceHash(url);
};

export default RouterStateHash;
