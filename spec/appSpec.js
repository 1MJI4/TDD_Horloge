import { Main } from '../src/app.js';

describe("doit retourner YYOO", function() {
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