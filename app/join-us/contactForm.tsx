"use client";
import React from 'react'
import axios from 'axios';
import Swal from 'sweetalert2';


export default function ContactForm() {
  const [status, setStatus] = React.useState('');
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [formData, setFormData] = React.useState({
    fullName: '',
    email: '',
    status: '',
    interest: '',
    education: '',
    desiredPosition: '',
    experience: '',
    helpDomain: '',
    investmentAmount: '',
    interestInCompany: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const resetForm = () => {
    setFormData({
      fullName: '',
      email: '',
      status: '',
      interest: '',
      education: '',
      desiredPosition: '',
      experience: '',
      helpDomain: '',
      investmentAmount: '',
      interestInCompany: '',
      message: ''
    });
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await axios.post('http://localhost:8080/api/public/message', formData);

      if (response.status === 200 && response.data.success) {
        Swal.fire({
          icon: 'success',
          title: 'Merci!',
          text: 'Votre demande a bien été envoyée.',
        });
        resetForm();
      } else {
        throw new Error('Une erreur est survenue');
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Erreur',
        text: 'Impossible d\'envoyer la demande, veuillez réessayer.',
      });
    }finally {
      setIsSubmitting(false)
    }
  };
  return (
    <>
            <form
              id="join-us-form"
              action="mailto:contact@mysoleas.com"
              method="POST"
              encType="multipart/form-data"
              className='text-base flex-column space-between'
              onSubmit={handleSubmit}
            >
              <div className="form-group mb-3">
                <label className="text-ink" htmlFor="fullName">Nom complet :</label>
                <input className='form-control' type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleInputChange} required />
              </div>
              <div className="form-group mb-3">
                <label className="text-ink" htmlFor="email">Email :</label>
                <input className='form-control' type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required />
              </div>
              <div className="form-group mb-3">
                <label className="text-ink" htmlFor="status">Statut désiré :</label>
                <select id="status"
                  className='form-control'
                  name="status"
                  value={formData.status}
                  onChange={(e) => {
                    handleInputChange(e);
                    setStatus(e.target.value);
                  }} required>
                  <option value="">Sélectionnez un statut</option>
                  <option value="intern">Stagiaire</option>
                  <option value="employee">Employé</option>
                  <option value="volunteer">Bénévole</option>
                  <option value="investor">Investisseur</option>
                </select>
              </div>
              {/* Section spécifique pour stagiaire */}
              {status === 'intern' && (
                <div id="stagiaire-details">
                  <div className="form-group mb-3">
                    <label className="text-ink" htmlFor="interest">Domaine d'intérêt :</label>
                    <input className='form-control' type="text" id="interest" name="interest" value={formData.interest} onChange={handleInputChange} required />
                  </div>
                  <div className="form-group mb-3">
                    <label className="text-ink" htmlFor="education">Niveau d’études actuel :</label>
                    <input className='form-control' type="text" id="education" name="education" value={formData.education} onChange={handleInputChange} required/>
                  </div>
                </div>
              )}

              {/* Section spécifique pour employé */}
              {status === 'employee' && (
                <div id="employee-details">
                  <div className="form-group mb-3">
                    <label className="text-ink" htmlFor="desired-position">Poste souhaité :</label>
                    <input className='form-control' type="text" id="desired-position" name="desiredPosition" value={formData.desiredPosition} onChange={handleInputChange} required/>
                  </div>
                  <div className="form-group mb-3">
                    <label className="text-ink" htmlFor="experience">Expérience professionnelle :</label>
                    <textarea className='form-control' id="experience" name="experience" value={formData.experience} onChange={handleInputChange} required></textarea>
                  </div>
                </div>
              )}

              {/* Section spécifique pour bénévole */}
              {status === 'volunteer' && (
                <div className="form-group mb-3" id="benevole-details">
                  <label className="text-ink" htmlFor="help-domain">Domaine d’aide :</label>
                  <input className='form-control' type="text" id="help-domain" name="helpDomain" value={formData.helpDomain} onChange={handleInputChange} required/>
                </div>
              )}

              {/* Section spécifique pour investisseur */}
              {status === 'investor' && (
                <div id="investor-details">
                  <div className="form-group mb-3">
                    <label className="text-ink" htmlFor="investment-amount">Montant d'investissement potentiel (en USD):</label>
                    <input className='form-control' type="text" id="investment-amount" name="investmentAmount" value={formData.investmentAmount} onChange={handleInputChange} required/>
                  </div>
                  <div className="form-group mb-3">
                    <label className="text-ink" htmlFor="interest-in-company">Intérêt principal dans l'entreprise :</label>
                    <textarea className='form-control' id="interest-in-company" name="interestInCompany" value={formData.interestInCompany} onChange={handleInputChange} required></textarea>
                  </div>
                </div>
              )}
              <div className="form-group mb-3">
                <label className="text-ink" htmlFor="message">Message :</label>
                <textarea className='form-control' id="message" name="message" value={formData.message} onChange={handleInputChange}></textarea>
              </div>
              <div className='text-end'>
                <button className='navbutton px-8 py-3 font-semibold' type="submit" disabled={isSubmitting}>
                    {isSubmitting ? 'Envoi en cours...' : 'Envoyer'}
                </button>
              </div>
            </form>

    <style jsx>
      {`
      .form-group {
        margin-bottom: 1rem;
      }

      .form-control {
        width: 100%;
        padding: 0.65rem 0.9rem;
        border: 1.5px solid var(--sp-border);
        border-radius: 0.6rem;
        background: #ffffff;
        color: var(--sp-text);
        transition: border-color .2s ease;
      }

      .form-control:focus {
        outline: none;
        border-color: var(--sp-primary);
      }
     `
      }</style>
    </>
  )
}