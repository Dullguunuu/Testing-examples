import { slugify } from "@/components/TextGenerative";


describe("generative", () => {
    test("testing slugify", () => {
        let str = "abc @def$ f",
            str2 = "abc-def-f";

        let result = slugify(str);
        expect(result).toBe(str2)
    })
})