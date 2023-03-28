export default defineEventHandler(e => {
    return `get route reached with slug ${e.context.params?.a}`;
})