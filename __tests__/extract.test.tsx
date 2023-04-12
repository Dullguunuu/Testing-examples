import { extractArticleIdFromSlug } from "@/components/extractArticle"

describe("extract", () => {
    test("extracting", () => {
        let str = "convert to lower case-399";
        let result = extractArticleIdFromSlug(str);
        expect(result).toBe("399")
    })
})