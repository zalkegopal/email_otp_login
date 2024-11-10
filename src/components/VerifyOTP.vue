<template>
  <div class="card flex justify-center">
    <div class="flex flex-col items-center">
      <div class="font-bold text-xl mb-2">Authenticate Your Account</div>
      <p class="text-surface-500 dark:text-surface-400 block mb-8">
        Please enter the code sent to
        <span class="email-address"> {{ email }}</span>
      </p>
      <InputOtp v-model="otp" :length="6" integerOnly>
        <template #default="{ attrs, events }">
          <input
            type="text"
            v-bind="attrs"
            v-on="events"
            class="custom-otp-input"
          />
        </template>
      </InputOtp>
      <div class="btns">
        <Button label="Resend Code" variant="text"></Button>
        <Button label="Verify OTP" @click="verifyOTP"></Button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

const otp = ref("");

const email = localStorage.getItem("email");
const otpSent = localStorage.getItem("otp");

const verifyOTP = async () => {
  if (!otp.value) return;

  // verify otp

  if (otpSent !== otp.value) {
    alert("Invalid OTP");
  } else {
    alert('OTP Verification successful!');
    localStorage.setItem('token', 'shyhhsnxksukwkuiolpshdgwsm');

    setTimeout(()=> {
      router.push("/dashboard");
    }, 2000)
  }
};
</script>

<style scoped>
.verify-otp {
  max-width: 40vw;
  margin: 0 auto;
  padding: 24px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.email-address {
  font-weight: bold;
}

.p-inputtext {
  width: 100%;
}

.p-button {
  margin-top: 12px;
}

.p-inputotp {
  display: flex;
  gap: 8px;
  justify-content: center;
  margin-top: 32px;
}

.custom-otp-input {
  width: 40px;
  font-size: 36px;
  border: 0 none;
  appearance: none;
  text-align: center;
  transition: all 0.2s;
  color: var(--p-primary-color);
  background: transparent;
  border-bottom: 2px solid var(--p-gray-400);
}

.custom-otp-input:focus {
  outline: 0 none;
  border-bottom-color: var(--p-primary-color);
}

.btns {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 20px;
}
</style>
