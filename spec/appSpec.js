import { Main } from '../src/app.js';

describe("Ligne des simples minutes", function() {
    const main = new Main();

    it('should return YYOO for 32 minutes', function() {
        expect(main.getSimpleMinutesLine(32)).toBe("YYOO");
    });

    it('should return OOOO for 10 minutes', function() {
        expect(main.getSimpleMinutesLine(10)).toBe("OOOO");
    });
});

describe("Ligne des blocs de 5 minutes", function() {
    const main = new Main();

    it('should return YYYOOOOOOOO for 15 minutes', function() {
        expect(main.getFiveMinutesLine(15)).toBe("YYROOOOOOOO");
    });

    it('should return YYRYYROOOOO for 30 minutes', function() {
        expect(main.getFiveMinutesLine(30)).toBe("YYRYYROOOOO");
    });

    it('should return YYRYYRYYRYY for 55 minutes', function() {
        expect(main.getFiveMinutesLine(55)).toBe("YYRYYRYYRYY");
    });

    it('should return OOOOOOOOOOO for 0 minutes', function() {
        expect(main.getFiveMinutesLine(0)).toBe("OOOOOOOOOOO");
    });
});


describe("Ligne des heures simples", function() {
    const main = new Main();

    it('should return ROOO for 1 hour', function() {
        expect(main.getSimpleHoursLine(1)).toBe("ROOO");
    });

    it('should return RROO for 2 hours', function() {
        expect(main.getSimpleHoursLine(2)).toBe("RROO");
    });
});



describe("Ligne des blocs de 5 heures", function() {
    const main = new Main();

    it('should return RROO for 10 hours', function() {
        expect(main.getFiveHoursLine(10)).toBe("RROO");
    });

    it('should return RRRR for 20 hours', function() {
        expect(main.getFiveHoursLine(20)).toBe("RRRR");
    });

   
});



describe("Lampe des secondes", function() {
    const main = new Main();

    it('should return Y for 0 seconds (even)', function() {
        expect(main.getSecondsLamp(0)).toBe("Y");
    });

    it('should return O for 1 second (odd)', function() {
        expect(main.getSecondsLamp(1)).toBe("O");
    });

    it('should return Y for 2 seconds (even)', function() {
        expect(main.getSecondsLamp(2)).toBe("Y");
    });
});

describe("Horloge complète", function() {
    const main = new Main();

    it('should display the full clock for 12:32:00', function() {
        const result = main.getFullClock(12, 32, 0);
        expect(result).toBe("Y\nRROO\nRROO\nYYRYYROOOOO\nYYOO");
    });

    it('should display the full clock for 23:59:59', function() {
        const result = main.getFullClock(23, 59, 59);
        expect(result).toBe("O\nRRRR\nRRRO\nYYRYYRYYRYY\nYYYY");
    });

});
