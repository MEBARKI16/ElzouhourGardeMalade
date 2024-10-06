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
      user_account: "Mon Compte",
      who_we_are: "Qui sommes-nous ?",
      who_we_are_description: "Nous sommes une entreprise spécialisée dans l'offre d'emploi aux freelances garde-malade. Nous travaillons en partenariat avec plusieurs cliniques de renom afin de vous offrir les meilleures opportunités de travail dans le domaine des soins à domicile. Nos valeurs sont centrées sur le respect, la bienveillance, et la confiance.",
      our_values: "Nos valeurs",
      values_description: "Nous croyons en la bienveillance, l'engagement, et la confiance mutuelle. Nous veillons à ce que chaque garde-malade puisse évoluer dans un environnement professionnel, respectueux, et épanouissant.",
      our_partnerships: "Nos partenariats",
      partnerships_description: "Nous collaborons avec plusieurs cliniques et hôpitaux de grande renommée. Ces partenariats nous permettent d'offrir des missions de soins à domicile fiables et bien rémunérées.",
      join_us: "Rejoignez-nous",
      join_us_description: "Vous êtes un garde-malade qualifié et passionné ? Rejoignez notre réseau de freelances dès aujourd'hui et accédez à des opportunités uniques dans le domaine des soins à domicile.",
  
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
      user_account: "حسابي",
      who_we_are: "من نحن؟",
      who_we_are_description: "نحن شركة متخصصة في تقديم فرص العمل للممرضين المستقلين. نحن نعمل بالشراكة مع العديد من العيادات الشهيرة لتقديم أفضل فرص العمل في مجال الرعاية المنزلية. قيمنا تركز على الاحترام، والاهتمام، والثقة.",
      our_values: "قيمنا",
      values_description: "نؤمن بالاهتمام، الالتزام، والثقة المتبادلة. نحن نضمن أن كل ممرض يعمل في بيئة مهنية، محترمة، وملهمة.",
      our_partnerships: "شراكاتنا",
      partnerships_description: "نحن نتعاون مع العديد من العيادات والمستشفيات ذات السمعة الكبيرة. هذه الشراكات تتيح لنا توفير فرص رعاية منزلية موثوقة ومربحة.",
      join_us: "انضم إلينا",
      join_us_description: "هل أنت ممرض مؤهل ومتحمس؟ انضم إلى شبكتنا من المستقلين اليوم وكن على اتصال بفرص فريدة في مجال الرعاية المنزلية.",

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
