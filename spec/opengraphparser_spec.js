describe("OpenGraphParser", function() {
	it("should be able to convert '<h1>H1</h1>' to '# H1\\n\\n'", function() {
		var md = OpenGraphParser("<h1>H1</h1>");
		expect(md).toMatch(/\# H1\n\n/);
	});
});