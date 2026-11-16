import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export const useDocumentTitle = (titleKey: string, isRawText = false) => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const currentTitle = isRawText ? titleKey : t(titleKey);
    
    document.title = `${currentTitle}`;
  }, [titleKey, isRawText, t, i18n.language]); 
};