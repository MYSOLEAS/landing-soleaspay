"use client"
import Image from "next/image";
import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/20/solid';
import { useEffect } from "react";


interface faqdata {
    heading: string;
    subheading: string;
}

const faqdata: faqdata[] = [

    {
        heading: "1. Qu\'est ce que Soleaspay ?",
        subheading: '<strong>SoleasPay</strong> est une passerelle de paiement qui aggrège près de 50 moyens de paiements au cameroun et a l\'étranger afin de permetre aux marchands de recevoir les paiements de leurs clients partout dans le monde.'
    },
    {
        heading: "2. A quoi ça sert ?",
        subheading: 'Soleaspay est utilisé pour : <ul><li>- La réception des paiements via des outils comme le qr code ou des liens de paiement;</li><li>- L\'achat et la vente des devises et cryptomonnaies;</li><li>- La monétisation des sites web, e-commerces et/ou des applications mobile via l\intégration du sopay button ou de l\'API de paiement Soleaspay;</li><li>- Le paiement des services utile (Airtime, Camtel, Eneo, Camwater, Netflix et Canal plus);</li><li>- Le transfert d\'argent entre utilisateurs à moindre coût.'
    },
    {
        heading: "3. Qui peut utiliser Soleaspay",
        subheading: 'Soleaspay est conçu pour être pris en main par des professionnel du developement mais aussi et surtout par tout utilisateur n\'ayant aucune notion en programmation informatique. Il s\'emploi aussi bien pour les commerçants traditionnel que pour les e-commerçants.'
    },
    {
        heading: "4. Quels sont les types de Compte sur Soleaspay ?",
        subheading: 'Il existe trois (03) types de comptes sur Soleaspay : <ul><li><strong>- Compte personnel</strong>: Il appartient à tout utilisateur Soleaspay. il permet d\'éffectuer ses paiements de biens et services, de transférer de l\'argent à un autre utilisateur Soleaspay;</li><li><strong>- Compte Marchant</strong>: Idéal pour les marchands et e-marchands il offre en plus des attributions du compte personnel, la possibilité de générer et distribuer des qr codes et des liens de paiement afin de recevoir l\'argent de leurs clients</li><li><strong>- Compte Professionnel</strong>: Indispensable pour les entreprises, il permet d\'intégrer et consommer les APIs de paiement et celle de retrait (PayIn et PayOut)</li></ul>'
    },
    {
        heading: "5. Comment créer un Compte Soleaspay ?",
        subheading: 'Il suffit de remplir le formulaire d\'inscription à l\'adresse : <a style="color: #FFA500; text-decoration: underline;" href="/auth/register"><em>S\'inscrire ici</em></a>.'
    },
    {
        heading: "6. Comment activer mon compte Soleaspay ?",
        subheading: 'Apres avoir rempli le formulaire de création de compte, il faut se rendre dans la boite mail de l\'adresse email fourni à l\'inscription et cliquer sur le bouton <em>activer mon compte</em>.'
    },
    {
        heading: "7. J\'ai pas reçu de Mail d\'activation",
        subheading: 'Si le mail d\'activation ne se retrouve pas même dans votre dossier spam, rendez vous l\'adresse : <a style="color: #FFA500; text-decoration: underline;" href="/auth/email-activation">Me Renvoyer le mail d\'activation</a>'
    },
    {
        heading: "8. C\'est quoi le kyc sur SoleasPay ?",
        subheading: 'Sur Soleaspay nous metont un point d\'honneur sur l\'identification de nos utilisateur ainsi le kyc(Know Your Custommer) est l\'ensemble des techniques que nous utilisons afin de garder à jours les informations que nous avons sur nos utilisateurs.'
    },
    {
        heading: "9. Quelles sont les différente transactions disponible sur Soleaspay ?",
        subheading: 'Les différentes transactions pouvant être éffectuer sur Soleaspay sont les suivantes : <ul><li>- La réception de paiement</li><li>- L\'émission des paiements</li><li>- L\'achat de crédit de communication</li><li>- L\'achat et la vente des devises</li><li>- Le transfert d\'argent entre uilisateurs</li></ul>'
    },
    {
        heading: "10. Que me coûte les services de Soleaspay ?",
        subheading: 'Chez SoleasPay, nous employons une politique de facturation à la consommation cela dit, vous paierez uniquement lors des transactions pour lesquels l\'argent sort du sopay pour un autre compte. <br> l\'ensemble de nos tarifs est disponible à l\'adresse <a style="color: #FFA500; text-decoration: underline;" href="/pricing"> Nos Tarifs</a>'
    },
    {
        heading: "11. Y a il des limitation à l\'utilisation de mon compte Soleaspay ?",
        subheading: 'L\'utilisation d\'un compte Soleaspay est limitée si et seulement si son proprietaire n\'a pas renseigner son Kyc. <br> Veuillez contacter le support pour plus d\'information liée à votre compte.'
    },
    {
        heading: "12. Combien de temps puis je utiliser mon compte Soleaspay ? ?",
        subheading: 'Un compte Soleaspay une fois activé est disponible indéfiniment. Néamoins vous pourrez à tout moment le supprimer dans votre dashboard.'
    },
    {
        heading: "13. Y a il des frais supplementaire à l\'utilisation de Soleaspay ?",
        subheading: 'Non, il n\'y a pas de frais supplementaire pour l\'exploitation d\'un compte soleaspay.'
    },
    {
        heading: "14. Comment intégrer Soleaspay à mon projet ?",
        subheading: 'Vous devez utiliser l\'une des deux integrations disponible sur soleaspay à savoir : <ul><li><strong>- Le Sopay Button</strong> : c\'est un widget complet intégrant tous nos moyens de paiement via un script JS</li><li><strong>- L\'API Soleaspay</strong>: Pour une utilisation personnalisée, une intégration via notre api est ideal.</li></ul>'
    },
    {
        heading: "15. Quels est le type d\'API de Soleaspay ?",
        subheading: 'SoleasPay est conçu pour être pris en main par des professionnel du developement mais aussi et surtout par tout utilisateur n\'ayant aucune notion en programmation informatique. Il s\'emploi aussi bien pour les commerçants traditionnel que pour les e-commerçants.'
    },
    {
        heading: "16. Comment intégrer l\'API Soleaspay ?",
        subheading: 'Il suffit de suivre la documentation de l\'API disponible à l\'adresse : <a style="color: #FFA500; text-decoration: underline;" href="https://doc.mysoleas.com/sopay-api">Soleaspay Doc</a>'
    },

]

const Faq = () => {

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    return (
        <div className="my-20 px-6" id="faq">
            <h3 className="text-center text-3xl lg:text-5xl font-bold text-offwhite mb-3">Foire Aux Questions</h3>
            <p className="text-center lg:text-lg font-normal text-bluish">Vous trouverez ici les réponses aux questions les plus fréquemment posées par nos utilisateurs.</p>

            <div className="mx-auto max-w-7xl">
                <div className="grid lg:grid-cols-2">
                    {/* Column-1 */}
                    <div>
                        <div className="w-full px-4 pt-16">

                            {faqdata.map((items, i) => (
                                <div className="mx-auto w-full max-w-5xl rounded-2xl bg-blue py-8 px-6 mb-5" key={i}>
                                    <Disclosure>
                                        {({ open }) => (
                                            <>
                                                <Disclosure.Button className="flex w-full justify-between rounded-lg text-offwhite sm:px-4 sm:py-2 text-left md:text-2xl font-medium">
                                                    <span>{items.heading}</span>
                                                    <ChevronUpIcon
                                                        className={`${open ? 'rotate-180 transform' : ''
                                                            } h-5 w-5 text-purple-500`}
                                                    />
                                                </Disclosure.Button>
                                                <Disclosure.Panel className="px-4 pt-4 pb-2 md:text-lg text-bluish font-normal opacity-50" dangerouslySetInnerHTML={{ __html: items.subheading }}></Disclosure.Panel>
                                            </>
                                        )}
                                    </Disclosure>
                                </div>
                            ))}

                        </div>
                    </div>

                    {/* Column-2 */}
                    <div className="mt-32">
                        <Image src={'/images/Faq/faq.svg'} alt="soleaspay faq image" width={941} height={379} />
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Faq;
