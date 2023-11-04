import axios from "axios";

export const getAnimeBaru = async (data: string) => {
  const res = await axios.get(
    `https://hudaxcode.vercel.app/api/v1/animebaru/${data}`
  );
  if (res.status === 200) {
    return res.data;
  }
};
