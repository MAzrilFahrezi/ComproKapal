import React, { createContext, useContext, useState, useEffect } from 'react';
import enTranslations from '../translations/en.json';
import idTranslations from '../translations/id.json';

const LanguageContext = createContext();

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};

export const LanguageProvider = ({ children }) => {
    // Get language from localStorage or default to 'en'
    const [currentLanguage, setCurrentLanguage] = useState(() => {
        const savedLanguage = localStorage.getItem('language');
        return savedLanguage || 'en';
    });

    // Save language to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem('language', currentLanguage);
    }, [currentLanguage]);

    const translations = {
        en: enTranslations,
        id: idTranslations
    };

    const translate = (key) => {
        const keys = key.split('.');
        let translation = translations[currentLanguage];

        for (const k of keys) {
            if (translation && translation[k]) {
                translation = translation[k];
            } else {
                console.warn(`Translation key not found: ${key}`);
                return key;
            }
        }

        return translation;
    };

    const toggleLanguage = () => {
        setCurrentLanguage(prev => prev === 'id' ? 'en' : 'id');
    };

    return (
        <LanguageContext.Provider value={{ 
            currentLanguage, 
            toggleLanguage, 
            translate,
            isEnglish: currentLanguage === 'en',
            isIndonesian: currentLanguage === 'id'
        }}>
            {children}
        </LanguageContext.Provider>
    );
};