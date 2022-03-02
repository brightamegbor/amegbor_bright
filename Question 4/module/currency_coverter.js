function currencyCoverter(priceInGHS) {
    const usdGHS = 6.05;
    const usdCNY = 6.46;
    const usdCAD = 1.26;
    const usdGBP = 0.73;

    // get total dollars from cedis
    let totalUSD = priceInGHS / usdGHS;

    // convert to various currencies
    let cnyEquivalent = totalUSD * usdCNY;
    let cadEquivalent = totalUSD * usdCAD;
    let gbpEquivalent = totalUSD * usdGBP;

    // added to fixed to convert to 2 decimal
    let result = [
        'USD ' + totalUSD.toFixed(2),
        'CNY ' + cnyEquivalent.toFixed(2),
        'CAD ' + cadEquivalent.toFixed(2),
        'GBP ' + gbpEquivalent.toFixed(2)
    ];

    return result;
}

export { currencyCoverter };
