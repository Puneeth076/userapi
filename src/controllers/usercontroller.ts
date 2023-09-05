import userModel from "../models/usermodel";

export const registerCOntroller = async (req: any, res: any) => {
  try {
    const { name, email } = req.body;

    //check for exist's

    const isExist = await userModel.findOne({ email });

    if (isExist) {
      return res
        .status(501)
        .json({ status: false, msg: "user already exists" });
    }

    const user = await userModel.create({ name, email });

    await user.save();
    return res
      .status(201)
      .json({ status: true, msg: "user created successfully", data: user._id });
  } catch (e) {
    console.log(e);
  }
};
