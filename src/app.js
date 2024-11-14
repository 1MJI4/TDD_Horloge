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
                result += (i % 3 === 0) ? "R" : "Y"; // Chaque 3ème lampe est rouge
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

    getFiveHoursLine(hours) {
        const fiveHoursBlocks = Math.floor(hours / 5);
        let result = "";
    
        for (let i = 0; i < 4; i++) {
            result += (i < fiveHoursBlocks) ? "R" : "O";
        }
    
        return result;
    }
    

    getSecondsLamp(seconds) {
        return (seconds % 2 === 0) ? "Y" : "O";
    }

    getFullClock(hours, minutes, seconds) {
        const secondsLamp = this.getSecondsLamp(seconds);
        const fiveHoursLine = this.getFiveHoursLine(hours);
        const simpleHoursLine = this.getSimpleHoursLine(hours);
        const fiveMinutesLine = this.getFiveMinutesLine(minutes);
        const simpleMinutesLine = this.getSimpleMinutesLine(minutes);
        
        // Affichage de l'horloge
        return `${secondsLamp}\n${fiveHoursLine}\n${simpleHoursLine}\n${fiveMinutesLine}\n${simpleMinutesLine}`;
    }
}
