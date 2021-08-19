describe('example', function () {
    afterEach(() => {
        jest.useRealTimers();
    });

    it('should fail when modernFakeTimers are imported twice', () => {
        jest.useFakeTimers('modern').setSystemTime(new Date());

        expect(true).toBe(true);
    });
});
