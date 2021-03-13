

function parseBalance(bal){
    if (typeof bal == "string" && bal.startsWith("0x")) {
        return (h2d(bal) / 10000000000).toFixed(2);
    }
    return (bal / 10000000000).toFixed(2);
}

function formatBalance(bal) {
    return parseBalance(bal);
}

function addrShort(addr){
    return `${addr.substring(0,6)}...${addr.substring(addr.length-6, addr.length)}`;
}

// convert big hex to decimal
function h2d(s) {
    function add(x, y) {
        var c = 0, r = [];
        var x = x.split('').map(Number);
        var y = y.split('').map(Number);
        while(x.length || y.length) {
            var s = (x.pop() || 0) + (y.pop() || 0) + c;
            r.unshift(s < 10 ? s : s - 10); 
            c = s < 10 ? 0 : 1;
        }
        if(c) r.unshift(c);
        return r.join('');
    }

    var dec = '0';
    s.split('').forEach(function(chr) {
        var n = parseInt(chr, 16);
        for(var t = 8; t; t >>= 1) {
            dec = add(dec, dec);
            if(n & t) dec = add(dec, '1');
        }
    });
    return dec;
}

export default ({ app }, inject) => {
    inject('util', {
        formatBalance,
        parseBalance,
        addrShort,
    });
}