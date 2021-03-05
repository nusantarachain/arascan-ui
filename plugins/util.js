

function parseBalance(bal){
    if (typeof bal == "string" && bal.startsWith("0x")) {
        return (BigInt(bal) / BigInt(10000000000)).toString();
    }
    return (bal / 10000000000).toString();
}

function formatBalance(bal) {
    return parseBalance(bal) + " ARA";
}

export default ({ app }, inject) => {
    inject('util', {
        formatBalance,
        parseBalance
    });
}