import slugify from "slugify";
export function ComposeArticleSlug(id: number, title: string) {
    return (`${slugify(title)}-${id}`);
}