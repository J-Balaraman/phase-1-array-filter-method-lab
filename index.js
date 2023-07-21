function findMatching (drivers, driver) {
    const findMatch = drivers.filter(drivers => drivers.toLowerCase() == driver.toLowerCase());
    return findMatch;
}

function fuzzyMatch (drivers, driver) {
    const findMatch = drivers.filter(function (potato) {return potato.charAt(0) == driver.charAt(0);} );
    return findMatch;
}

function matchName (drivers, driver) {
    const findMatch = drivers.filter(drivers => drivers.name == driver)
    return findMatch;
}

