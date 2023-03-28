export default defineEventHandler(e => {
    return `post route reached with slug ${e.context.params?.b}`;
})