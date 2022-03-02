function currencyCoverter(priceInGHS) {
    const usdGHS = 6.05; // ghs rate
    const usdCNY = 6.46; // cny rate
    const usdCAD = 1.26; // cad rate
    const usdGBP = 0.73; // gbp rate

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
