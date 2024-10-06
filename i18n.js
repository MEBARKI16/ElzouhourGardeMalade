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
      privacy_policy_title: "Politique de Confidentialité",
      personal_data: "Données personnelles",
      personal_data_content: "Nous collectons vos données personnelles lors de votre utilisation de nos services afin d'améliorer votre expérience.",
      data_usage: "Utilisation des données",
      data_usage_content: "Vos données sont utilisées pour personnaliser votre expérience, fournir un support, et améliorer nos services.",
      data_sharing: "Partage des données",
      data_sharing_content: "Vos informations ne sont jamais vendues, mais peuvent être partagées avec nos partenaires pour vous offrir un meilleur service.",
      user_rights: "Vos droits",
      user_rights_content: "Vous avez le droit d'accéder, de rectifier et de supprimer vos données à tout moment.",
      cookies: "Cookies",
      cookies_content: "Nous utilisons des cookies pour améliorer la navigation sur notre site. Vous pouvez gérer vos préférences de cookies dans les paramètres de votre navigateur.",
      changes: "Modifications de la politique",
      changes_content: "Nous nous réservons le droit de modifier cette politique à tout moment. Les modifications seront publiées sur cette page.",
      contact_us: "Nous contacter",
      contact_us_content: "Pour toute question concernant cette politique de confidentialité, vous pouvez nous contacter à contact@example.com."
      , name: "Nom",
      first_name: "Prénom",
      phone_number: "Numéro de Téléphone",
      subject: "Objet",
      submit: "Envoyer",
      form_submit_success: "Votre message a été envoyé avec succès.",
      our_office: "Notre siège se situe à Bab Ezzouar, Quartier d'affaire.",
      field_required: "Ce champ est requis."
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
      privacy_policy_title: "سياسة الخصوصية",
      personal_data: "البيانات الشخصية",
      personal_data_content: "نجمع بياناتك الشخصية عند استخدام خدماتنا لتحسين تجربتك.",
      data_usage: "استخدام البيانات",
      data_usage_content: "يتم استخدام بياناتك لتخصيص تجربتك، وتقديم الدعم، وتحسين خدماتنا.",
      data_sharing: "مشاركة البيانات",
      data_sharing_content: "لا يتم بيع معلوماتك، ولكن يمكن مشاركتها مع شركائنا لتحسين الخدمة المقدمة لك.",
      user_rights: "حقوق المستخدم",
      user_rights_content: "لديك الحق في الوصول إلى بياناتك، تصحيحها، وحذفها في أي وقت.",
      cookies: "الكوكيز",
      cookies_content: "نستخدم ملفات تعريف الارتباط لتحسين التنقل على موقعنا. يمكنك إدارة تفضيلات الكوكيز في إعدادات المتصفح الخاص بك.",
      changes: "التغييرات على السياسة",
      changes_content: "نحتفظ بالحق في تعديل هذه السياسة في أي وقت. سيتم نشر التغييرات على هذه الصفحة.",
      contact_us: "اتصل بنا",
      contact_us_content: "لأي استفسار حول سياسة الخصوصية هذه، يمكنك التواصل معنا عبر contact@example.com.",
      contact_us: "اتصل بنا",
      name: "الاسم",
      first_name: "اللقب",
      phone_number: "رقم الهاتف",
      subject: "الموضوع",
      submit: "إرسال",
      form_submit_success: "تم إرسال رسالتك بنجاح.",
      our_office: "مقرنا يقع في باب الزوار، الحي التجاري.",
      field_required: "هذا الحقل مطلوب."

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
