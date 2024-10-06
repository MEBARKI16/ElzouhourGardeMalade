import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  fr: {
    translation: {
      offresgardesmalade: "Offres de Garde Malade",
      Connexion: "Connexion",
      select_wilaya: "Sélectionner une wilaya",
      price_maximum: "Prix maximum",
      clear_filters: "Effacer filtres",
      no_offers_found: "Aucun garde-malade trouvé",
      login: "Connexion",
      email: "Adresse email",
      password: "Mot de passe",
      login_button: "Se connecter",
      no_account: "Vous n'avez pas de compte ?",
      signup_link: "Inscrivez-vous",
      alert_fill_fields: "Veuillez remplir les champs.",
      alert_wrong_password: "Mot de passe incorrect.",
      alert_no_user_found: "Aucun utilisateur trouvé avec cet email.",
      alert_error: "Une erreur est survenue lors de la connexion.",
      alert_success: "Connexion réussie",
      manage_service: "Gérer votre service",
      select_photo: "Sélectionner une photo",
      name: "Nom",
      first_name: "Prénom",
      sector: "Wilaya",
      price: "Prix (DA)",
      phone: "Téléphone",
      experience: "Expérience (années)",
      description: "Description",
      availability: "Disponibilité",
      day: "Jour",
      night: "Nuit",
      detail_availability: "Détails de la disponibilité",
      publish: "Publier",
      update: "Mettre à jour",
      error_fill_fields: "Veuillez remplir tous les champs.",
      error_upload_image: "Erreur lors du téléchargement de l'image.",
      success_publish: "Service publié",
      success_update: "Service mis à jour",
      call_button: "Appeler",
      close_button: "Fermer",
      qui_sommes_nous: "Qui sommes-nous",
      contact: "Contact",
      politique_confidentialite: "Politique de confidentialité",
      user_account: "Mon Compte"
    }
  },
  ar: {
    translation: {
      offresgardesmalade: "عروض رعاية المرضى",
      Connexion: "تسجيل الدخول",
      select_wilaya: "اختر ولاية",
      price_maximum: "السعر الأقصى",
      clear_filters: "إزالة الفلاتر",
      no_offers_found: "لم يتم العثور على حارس مريض",
      login: "تسجيل الدخول",
      email: "البريد الإلكتروني",
      password: "كلمة المرور",
      login_button: "تسجيل الدخول",
      no_account: "ليس لديك حساب؟",
      signup_link: "سجل",
      alert_fill_fields: "يرجى ملء الحقول.",
      alert_wrong_password: "كلمة المرور غير صحيحة.",
      alert_no_user_found: "لم يتم العثور على مستخدم بهذا البريد الإلكتروني.",
      alert_error: "حدث خطأ أثناء تسجيل الدخول.",
      alert_success: "تم تسجيل الدخول بنجاح",
      manage_service: "إدارة خدمتك",
      select_photo: "اختر صورة",
      name: "الاسم",
      first_name: "اللقب",
      sector: "الولاية",
      price: "السعر (DA)",
      phone: "الهاتف",
      experience: "الخبرة (سنوات)",
      description: "الوصف",
      availability: "التوافر",
      day: "نهار",
      night: "ليل",
      detail_availability: "تفاصيل التوافر",
      publish: "نشر",
      update: "تحديث",
      error_fill_fields: "يرجى ملء جميع الحقول.",
      error_upload_image: "حدث خطأ أثناء تحميل الصورة.",
      success_publish: "تم نشر الخدمة",
      success_update: "تم تحديث الخدمة",
      call_button: "اتصل",
      close_button: "إغلاق",
      qui_sommes_nous: "من نحن",
      contact: "اتصل بنا",
      politique_confidentialite: "سياسة الخصوصية",
      user_account: "حسابي"
    }
  }
};

i18n.use(initReactI18next)
  .init({
    resources,
    lng: 'ar', // Définit la langue par défaut à 'ar' (arabe)
    fallbackLng: 'fr', // Si la langue arabe n'est pas disponible, revenir au français
    interpolation: {
      escapeValue: false // React se charge déjà de la sécurité contre les injections XSS
    }
  });

export default i18n;
