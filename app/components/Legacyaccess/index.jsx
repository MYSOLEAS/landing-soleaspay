import Link from 'next/link';
import { ClockIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';

const LegacyAccess = () => {
    return (
        <section className="relative overflow-hidden" style={{ background: 'linear-gradient(180deg, var(--sp-surface) 0%, var(--sp-surface-2) 100%)' }}>
            <div className="mx-auto max-w-7xl px-6 py-10">
                <div className="content-card md:flex items-center gap-8">
                    <div className="icon-chip mb-4 md:mb-0 shrink-0">
                        <ClockIcon className="h-6 w-6 text-white" strokeWidth={1.75} />
                    </div>

                    <div className="flex-1">
                        <h3 className="text-xl font-semibold text-ink mb-2">Vous utilisez encore l&apos;ancienne version SoleasPay ?</h3>
                        <p className="text-muted leading-relaxed">
                            Vous pouvez continuer à y accéder pendant la transition.{' '}
                            <span className="font-semibold text-ink">Elle cessera de fonctionner le 30 août 2027.</span>{' '}
                            D&apos;ici là, pensez à activer votre compte sur la nouvelle version de SoleasPay pour ne perdre aucun accès à vos services.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 mt-6 md:mt-0 shrink-0">
                        <a
                            href="https://app.soleaspay.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-outline font-semibold px-6 py-3 inline-flex items-center justify-center gap-2"
                        >
                            Ancienne version <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                        </a>
                        <Link
                            href="https://app.soleaspay.com/auth/register"
                            className="navbutton font-semibold px-6 py-3 inline-flex items-center justify-center"
                        >
                            Activer mon compte
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LegacyAccess;