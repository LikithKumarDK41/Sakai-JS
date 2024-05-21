'use client';

import { useTranslation } from 'next-i18next';

import { LanguageSwitcher } from '@/components';

export default function Main() {
  const { t } = useTranslation('translation');

  return (
    <div>
      Dashboard
      <h1>{t('hello')}</h1>
      <h1>{t('welcome')}</h1>
      <LanguageSwitcher />
    </div>
  );
}
