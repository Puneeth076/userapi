import addressModel from "../models/addressModel";
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

export const updateAddress = async (req: any, res: any) => {
  try {
    const { address1, address2, address3, state, country, userId, pincode } =
      req.body;

    const user = await addressModel.create({
      address1,
      address2,
      address3,
      state,
      country,
      userId,
      pincode,
    });
    if (user) {
      await user.save();
      return res.status("201").json({
        status: true,
        msg: `address update successfully with id ${userId}`,
      });
    }
  } catch (e) {
    console.log(e);
  }
};
