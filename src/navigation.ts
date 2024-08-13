import {createLocalizedPathnamesNavigation, createSharedPathnamesNavigation} from 'next-intl/navigation';

export const locales = ['en', 'fr'] as const;

export const defaultLocale = 'en' as const;

// Use the default: `always`
export const localePrefix = 'as-needed' as const;

export const {Link, redirect, usePathname, useRouter} =
  createLocalizedPathnamesNavigation({
    locales,
    localePrefix,
    pathnames: {
      'home': {
        'en': 'home',
        'fr': 'acceuil'
      }
    }
  });
