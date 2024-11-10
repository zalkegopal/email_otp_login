<template>
  <div class="login-card">
    <h2>Welcome back</h2>
    <p>Please login to your account</p>
    <form @submit.prevent="login">
      <div>
        <InputText type="text" placeholder="Email" v-model="email" />
      </div>
      <Button type="submit" variant="outlined">Login</Button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { generateOTP, PublicKey, ServiceID, TemplateID } from "../utils";
import emailjs from "@emailjs/browser";

const email = ref(null);
const router = useRouter();

// initialize emailjs
emailjs.init({
  publicKey: PublicKey,
});

const sendEmail = async (toEmail, otp) => {
  const params = {
    send_to: toEmail,
    from_name: "VueChat Team",
    reply_to: "gopalzalke@gmail.com",
    otp: otp,
  };

  const response = await emailjs.send(ServiceID, TemplateID, params);
    if (response) {
      console.log("SUCCESS!", response.status, response.text);
      return true;
    }
}
 
const login = () => {
  console.log(email.value);
  if (email.value) {
    const otp = generateOTP();
    // send otp to email
    const result = sendEmail(email.value, otp);
    if (result) {
      alert("Email sent sucess");
      localStorage.setItem("email", email.value);
      localStorage.setItem("otp", otp);
      router.push("/verify-otp");
    } else {
      alert("Fail to send email");
    }
  }
};
</script>

<style scoped>
.login-card {
  max-width: 60vw;
  margin: 0 auto;
  padding: 24px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

input {
  width: max-content;
  padding: 8px;
  margin-top: 12px;
  border: 2px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
}

.p-button {
  margin-top: 12px;
}
</style>
