import * as dns from 'dns';
export * from 'dns';
import promisify = require('es6-promisify');

export interface LookupResult {
    address: string;
    family: number;
}

export interface LookupOptions {
    family?: number;
    hints?: number;
    all?: Boolean;
}

export let lookupAsync: (domain: string, options?: number | LookupOptions) => Promise<LookupResult[]> =
    promisify(dns.lookup, function (err: any, result: any) {
        if(err) {
            this.reject(err);
        } else if(Array.isArray(result) && result.length === 2 && typeof result[1] === 'number') {
            this.resolve([{
                address: result[0],
                family: result[1]
            }]);
        } else {
            this.resolve(result); // With LookupOptions.all === true
        }
    });
// export let lookupServiceAsync: (address: string, port: number) => Promise<string[]> = promisify(dns.lookupService);
export let resolveAsync: (domain: string, rrtype?: string) => Promise<string[]> = promisify(dns.resolve);
export let resolve4Async: (domain: string) => Promise<string[]> = promisify(dns.resolve4);
export let resolve6Async: (domain: string) => Promise<string[]> = promisify(dns.resolve6);
export let resolveCnameAsync: (domain: string) => Promise<string[]> = promisify(dns.resolveCname);
export let resolveMxAsync: (domain: string) => Promise<string[]> = promisify(dns.resolveMx);
export let resolveNsAsync: (domain: string) => Promise<string[]> = promisify(dns.resolveNs);
// export let resolveSoaAsync: (domain: string) => Promise<string[]> = promisify(dns.resolveSoa);
export let resolveSrvAsync: (domain: string) => Promise<string[]> = promisify(dns.resolveSrv);
export let resolveTxtAsync: (domain: string) => Promise<string[]> = promisify(dns.resolveTxt);
export let reverseAsync: (ip: string) => Promise<string[]> = promisify(dns.reverse);
