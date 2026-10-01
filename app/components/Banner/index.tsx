"use client";
import { PlayCircleIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Modal from "react-modal";

const Banner = () => {
  const [isOpen, setOpen] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(email);
    setOpen(false);
  };

  return (
    <div className="relative bg-white overflow-hidden" id="web">
      <div className="radial-banner hidden lg:block"></div>

      <Modal
        isOpen={isOpen}
        onRequestClose={() => setOpen(false)}
        style={{
          overlay: {
            backgroundColor: "rgba(15, 20, 48, 0.55)",
            zIndex: 50,
          },
          content: {
            maxWidth: "600px",
            width: "90%",
            margin: "auto",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "#ffffff",
            border: "1px solid #e3e7f2",
            borderRadius: "20px",
            boxShadow: "0 30px 60px rgba(15, 20, 48, 0.25)",
          },
        }}
      >
        <h1 className="text-center font-bold text-ink text-2xl mb-6">Démo</h1>
        <form onSubmit={handleSubmit}>
          <p className="text-center lg:text-lg font-normal text-muted mb-4">
            Envoyez votre email pour recevoir le lien de la démo par mail.
          </p>
          <div className="form-group mb-6 text-center">
            <input
              type="email"
              value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              style={{ width: "300px", height: "42px" }}
              className="form-control rounded-pill w-50 border border-border px-4 text-ink outline-none focus:border-[var(--sp-primary)]"
              required
            />
          </div>
          <div className="d-flex justify-content-end text-center flex gap-3 justify-center">
            <button
              className="closebutton px-7 py-2"
              type="button"
              onClick={() => setOpen(false)}
            >
              Fermer
            </button>
            <button className="text-white sendbutton px-7 py-2" type="submit">
              Envoyer
            </button>
          </div>
        </form>
      </Modal>

      <div className="mx-auto max-w-7xl pt-10 lg:pt-16 sm:pb-24 px-6">
        <div className="height-work">
          <div className="grid grid-cols-1 lg:grid-cols-12 my-8 items-center">
            <div className="col-span-7">
              <span className="hidden md:inline-block feature-font text-sm font-semibold uppercase tracking-wide mb-4">
                Infrastructure de paiement
              </span>
              <h2 className="text-4xl lg:text-6xl font-bold mb-5 leading-tight text-ink md:text-start text-center">
                Une seule integration. Plusieurs facons de vous faire payer.
              </h2>
              <p className="text-muted md:text-lg font-normal mb-10 md:text-start text-center max-w-xl">
                Connectez votre entreprise aux moyens de paiement adaptes a vos
                marches depuis une infrastructure concue pour les marchands,
                plateformes et equipes techniques.
              </p>
              <div className="flex flex-wrap gap-4 items-center justify-center md:justify-start">
                <Link
                  href={"https://business.soleaspay.com"}
                  className="text-lg font-semibold text-white py-4 px-8 navbutton"
                >
                  Commencer
                </Link>
                <Link
                  href={"#payment-infrastructure"}
                  className="btn-outline text-lg font-semibold py-4 px-8"
                >
                  Decouvrir SoleasPay
                </Link>
                <button
                  onClick={() => setOpen(true)}
                  className="text-primary flex items-center justify-center gap-2 py-3 px-2 font-semibold hover:underline"
                >
                  <PlayCircleIcon className="h-6 w-6 text-[var(--sp-primary)]" />
                  <span>Obtenir une demo</span>
                </button>
              </div>
            </div>

            <div className="col-span-5 relative">
              <Image
                src="/home/images/Banner/bannerphone.svg"
                alt="solaspay gateway dashboard"
                width={1013}
                height={760}
              />
              <div className="arrowSix hidden lg:block"></div>
              <div className="arrowSeven hidden lg:block"></div>
              <div className="arrowEight hidden lg:block"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
