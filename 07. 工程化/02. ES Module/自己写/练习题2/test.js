// export const a = 1;
// export const b = 2;
// export function c() {}
// export default { a, b };

const a = 1;
const b = 2;
function c() {}
const obj = { a, b };

export { a, b, c, obj as default };

console.log("test end");
