import dbConnect from "@/lib/dbConnect";
import UserModel from "@/model/User";

export async function GET(request: Request) {
  await dbConnect();

  try {
    const username = await request.json();
    const response = await UserModel.findOne({ username, isVerified: true });
    console.log(response);
    return Response.json({
      success: true,
      message: "username is unique",
    });
  } catch (error) {
    return Response.json({
      success: true,
      message: "username is unique",
    });
  }
}
