'use client';

import { useTranslation } from 'next-i18next';

import { LanguageSwitcher } from '@/components';

export default function Main() {
  const { i18n } = useTranslation();
  const { t } = useTranslation('translation');

  return (
    <div>
      Dashboard
      <p>Current Locale: {i18n.language}</p>
      <h1>{t('hello')}</h1>
      <h1>{t('welcome')}</h1>
      <LanguageSwitcher />
    </div>
  );
}
