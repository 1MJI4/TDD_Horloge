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

