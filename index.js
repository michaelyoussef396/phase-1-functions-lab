// Code your solution in this file!

function distanceFromHqInBlocks(blocks) {
    let diff = blocks - 42;
    if (diff < 0)
        diff = diff * -1;
    return diff;
}

function distanceFromHqInFeet(blocks) {
    let diffBlocks = distanceFromHqInBlocks(blocks);
    let feet = diffBlocks * 264;
    return feet;
}

function distanceTravelledInFeet(start, end) {
    let travel = (start - end) * 264;
    if (travel < 0) {
        travel = travel * -1
    }
    return travel;
}

function calculatesFarePrice(start, end) {
    let feet = distanceTravelledInFeet(start, end);
    if (feet <= 400) {
        return 0;
    } else if (feet > 400 && feet <= 2000) {
        return 2.56;
    } else if (feet > 2000 && feet <= 2500) {
        return 25;
    } else if (feet > 2500) {
        return 'cannot travel that far';
    }
}