import * as plugin from "../src";

describe("Sample plugin", () => {
    it("should export stages", () => {
        expect(plugin.init).toBeDefined();
        expect(plugin.version).toBeDefined();
        expect(plugin.publish).toBeDefined();
        expect(plugin.success).toBeDefined();
        expect(plugin.fail).toBeDefined();
    });
});
