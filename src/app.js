export class Main {
    getSimpleMinutesLine(minutes) {
        const simpleMinutes = minutes % 5;
        return "Y".repeat(simpleMinutes) + "O".repeat(4 - simpleMinutes);
    }

getFiveMinutesLine(minutes) {
    const fiveMinutesBlocks = Math.floor(minutes / 5);
    let result = "";
    
    for (let i = 1; i <= 11; i++) {
        if (i <= fiveMinutesBlocks) {
            // Chaque 3ème lampe est rouge (15, 30, 45 minutes)
            result += (i % 3 === 0) ? "R" : "Y";
        } else {
            result += "O";
        }
    }
    
    return result;
}
getSimpleHoursLine(hours) {
    const simpleHours = hours % 5;
    return "R".repeat(simpleHours) + "O".repeat(4 - simpleHours);
}
}
