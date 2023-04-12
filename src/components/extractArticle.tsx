export function extractArticleIdFromSlug(slug: string) {
    return slug.split("-").pop();
}