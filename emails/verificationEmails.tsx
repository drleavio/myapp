import React from "react";

interface VerificationEmailProps {
  username: string;
  otp: string;
}
const verificationEmails = ({ username, otp }: VerificationEmailProps) => {
  return (
    <div>
      <h1>hello, {username}</h1>
      <p>your verification otp is {otp}</p>
    </div>
  );
};

export default verificationEmails;
