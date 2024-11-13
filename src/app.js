export class Main {
    getSimpleMinutesLine(minutes) {
        const simpleMinutes = minutes % 5;
        return "Y".repeat(simpleMinutes) + "O".repeat(4 - simpleMinutes);
    }
}


