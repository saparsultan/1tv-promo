"use client"
import React from 'react';
import Link from "next/link";
import Image from "next/image";
import logoIcon from '@/assets/logo.svg'
import {useRouter} from "next/navigation";
import {useLocale, useTranslations} from "next-intl";

export default function Header() {
  const locale = useLocale()
  const router = useRouter();
  const t = useTranslations('Menu');
  function handleLocaleChange(newLocale) {
    console.log("newLocale", newLocale)
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000; SameSite=Lax`;
    router.push(`/${newLocale}`);
  }

  console.log({locale})

  const executeScroll = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: 'smooth' });
  };

 return (
     <div className='header__container'>
       <div className="container">
         <div className='header'>
           <div className="header-left">
             <Link href='/' className="logo">
               <Image src={logoIcon} alt='1tv logo' />
             </Link>
             <nav className="nav">
               <div onClick={() => executeScroll('rules')}>
                 {t('rules')}
               </div>
               <div onClick={() => executeScroll('winners')}>
                 {t('winners')}
               </div>
               <div onClick={() => executeScroll('faq')}>
                 {t('faq')}
               </div>
               <div>
                 {t('cabinet')}
               </div>
             </nav>
           </div>
           <div className="header-right">
             <Link href='#' className="phone">
               <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <path
                     d="M28.1619 15.8155C28.1612 12.5236 26.8532 9.36671 24.5255 7.03898C22.1978 4.71124 19.0409 3.40325 15.749 3.40259V5.88517C17.7128 5.88562 19.6325 6.46813 21.2654 7.5591C22.8983 8.65007 24.1713 10.2006 24.9234 12.0147C25.4225 13.2197 25.6794 14.5112 25.6793 15.8155H28.1619ZM3.33606 13.3329V7.12646C3.33606 6.79725 3.46684 6.48153 3.69963 6.24874C3.93241 6.01595 4.24814 5.88517 4.57735 5.88517H10.7838C11.113 5.88517 11.4288 6.01595 11.6615 6.24874C11.8943 6.48153 12.0251 6.79725 12.0251 7.12646V12.0916C12.0251 12.4208 11.8943 12.7366 11.6615 12.9694C11.4288 13.2021 11.113 13.3329 10.7838 13.3329H8.30123C8.30123 15.9666 9.34746 18.4924 11.2098 20.3547C13.0721 22.217 15.5979 23.2633 18.2316 23.2633V20.7807C18.2316 20.4515 18.3623 20.1357 18.5951 19.903C18.8279 19.6702 19.1436 19.5394 19.4729 19.5394H24.438C24.7672 19.5394 25.083 19.6702 25.3158 19.903C25.5485 20.1357 25.6793 20.4515 25.6793 20.7807V26.9871C25.6793 27.3163 25.5485 27.6321 25.3158 27.8649C25.083 28.0977 24.7672 28.2284 24.438 28.2284H18.2316C10.0055 28.2284 3.33606 21.559 3.33606 13.3329Z"/>
                 <path
                     d="M22.6317 12.9664C23.0064 13.8698 23.1992 14.8383 23.199 15.8164H20.9646C20.9648 15.1317 20.8301 14.4537 20.5681 13.8211C20.3062 13.1885 19.9222 12.6137 19.438 12.1296C18.9539 11.6454 18.3791 11.2614 17.7465 10.9995C17.1139 10.7376 16.4359 10.6028 15.7512 10.603V8.36865C17.2242 8.36873 18.6641 8.80558 19.8888 9.62397C21.1135 10.4424 22.068 11.6055 22.6317 12.9664Z"/>
               </svg>
               <span>+7 747 875 39 18</span>
             </Link>
             <div className="lang">
               <div onClick={() => handleLocaleChange('kk')} className={locale === 'kk' ? 'active' : ''}>Каз</div>
               <div onClick={() => handleLocaleChange('ru')} className={locale === 'ru' ? 'active' : ''}>Рус</div>
             </div>
           </div>
         </div>
       </div>
     </div>
 )
}