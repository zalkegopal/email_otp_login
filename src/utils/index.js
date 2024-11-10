import emailjs from "@emailjs/browser";

export const ServiceID = "service_4xs7g9k";
export const TemplateID = "template_067nd4m";
export const PublicKey = "ZZD2RWlXRkjp-06bH";

export const generateOTP = () => {
  const digits = 6;
  let otp = "";

  while (otp.length < digits) {
    otp += Math.floor(Math.random() * 10);
  }
  console.log("otp", otp);
  return otp;
};