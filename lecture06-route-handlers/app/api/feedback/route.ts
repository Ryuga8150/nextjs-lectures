type Feedback = {
  name?: string;
  email?: string;
  message?: string;
};

export async function POST(request: Request) {
  // different from reading req.body in express
  const data: Feedback = await request.json();
  console.log("data: ", data);

  const { name, email, message } = data;

  return Response.json({ name, data, message });
}
