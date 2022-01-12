//GET Request to
export const onRequestGet = () => {
  return new Response("Hellow World");
}

export const onRequestPost = async ({ request }) => {
  const { name } = await request.json();

  return new Response(`Hello ${name}`);
}



