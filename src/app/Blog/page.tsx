export default async function Blog() {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve("Delay");
    }, 2000);
  });
  return <h1>Hello to my Blog</h1>;
}
