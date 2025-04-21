import dotenv from "dotenv";
dotenv.config();


export const redirectController= (req, res) => {
    const user = req.user;
    if (!user?.tokens?.accessToken || !user?.tokens?.refreshToken) {
      return res.redirect(`${process.env.FRONT_END_URL}/login?error=true`);
    }

    const redirectURL = `${process.env.Front_END_URL}/google/success?accessToken=${user.tokens.accessToken}`;
    res.cookie("refreshToken", user.tokens.refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: "Strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });
    return res.redirect(redirectURL);
  }