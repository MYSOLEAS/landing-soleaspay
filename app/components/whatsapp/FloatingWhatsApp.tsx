"use client"
import React from 'react';
import {FloatingWhatsApp} from 'react-floating-whatsapp';
import  logoMysoleas from "../../../public/images/mysoleas.jpg"

const FloatingWhatsAppButton = () => {
  return (
    <FloatingWhatsApp
      phoneNumber="237698618200"
      accountName="MYSOLEAS"
      avatar={logoMysoleas.src}
    />
  );
};

export default FloatingWhatsAppButton;
