import { ComposeArticleSlug } from "@/components/composeArticleSlug";
import { title } from "process";

let a = {
    id: 1,
    title: "abc @def$ f"
}

describe("ComposeArticleSlug", () => {
    test("composing", () => {
        let res = ComposeArticleSlug(a.id, a.title)
        expect(res).toBe("abc-@defdollar-f-1")
    })
})