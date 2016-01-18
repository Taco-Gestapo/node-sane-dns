import * as dns from './index';
import * as assert from 'assert';

describe('dns', function() {
    describe('lookupAsync', function() {
        it('should handle single lookups', function(done) {
            dns.lookupAsync('www.google.com').then(function(result) {
                assert.equal(result.length, 1);
                assert.equal(typeof result[0].address, 'string');
                assert.equal(typeof result[0].family, 'number');
                done();
            }).catch(done);
        });
        it('should handle multiple lookups', function (done) {
            dns.lookupAsync('www.yahoo.com', { all: true }).then(function (result) {
                assert.ok(result.length > 1);
                result.forEach(function (item: dns.LookupResult) {
                    assert.equal(typeof item.address, 'string');
                    assert.equal(typeof item.family, 'number');
                });
                done();
            }).catch(done);
        });
        it('should handle lookup failures', function (done) {
            dns.lookupAsync('0f0531b6b2cfaec01ffd42301af0736f.com').then(function (result) {
                done(new Error('Unexpected success :('));
            }).catch(function (err) {
                done();
            });
        });
    });
});
