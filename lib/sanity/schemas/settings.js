import { CogIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export default defineType({
  name: "settings",
  type: "document",
  title: "Ayarlar",
  icon: CogIcon,
  fieldsets: [
    {
      title: "SEO & Meta Verileri",
      name: "metadata",
      options: {
        collapsible: true,
        collapsed: false
      }
    },
    {
      title: "Sosyal Medya",
      name: "social"
    },
    {
      title: "Web Sitesi Logosu",
      name: "logos",
      options: {
        collapsible: true,
        collapsed: false
      }
    }
  ],
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Site Başlığı - Tarayıcı Pencere Başlığı",
    }),
    defineField({
      title: "URL",
      name: "url",
      type: "url",
      description: "Ana site URL'si. Kanonik URL oluşturmak için kullanılır."
    }),
    defineField({
      name: "copyright",
      type: "string",
      title: "Telif Hakkı",
      description: "Footer'da © sonrasında görünmesi için şirket adını girin"
    }),
    defineField({
      title: "Ana logo",
      description: "Ana logonuzu burada yükleyin. SVG tercih edilir.",
      name: "logo",
      type: "image",
      fieldset: "logos",
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternatif metin",
          description: "SEO ve erişilebilirlik için önemlidir."
        }
      ]
    }),

    defineField({
      title: "Alternatif logo (isteğe bağlı)",
      description:
        "Alternatif logoyu burada yükleyin. Bu, açık/koyu varyasyon olabilir",
      name: "logoalt",
      type: "image",
      fieldset: "logos",
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternatif metin",
          description: "SEO ve erişilebilirlik için önemlidir."
        }
      ]
    }),

    defineField({
      name: "email",
      type: "string",
      title: "Destek E-postası",
      validation: Rule =>
        Rule.regex(
          /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
          {
            name: "email", // Hata mesajı "E-posta desenine uymuyor"
            invert: false // Desenle eşleşmeyen herhangi bir değere izin vermek için
          }
        )
    }),

    defineField({
      name: "phone",
      type: "string",
      title: "Destek Telefonu"
    }),

    defineField({
      name: "w3ckey",
      type: "string",
      title: "Web3Forms Erişim Anahtarı",
      description:
        "web3forms.com'dan alınan Erişim anahtarını girin. Formun çalışması için gereklidir."
    }),

    defineField({
      name: "social",
      type: "array",
      title: "Sosyal Bağlantılar",
      description: "Sosyal Medya URL'lerinizi girin",
      validation: Rule => Rule.unique(),
      of: [
        {
          type: "object",
          fields: [
            {
              type: "string",
              name: "media",
              title: "Sosyal Medya Seçin",
              options: {
                list: [
                  { title: "Twitter", value: "twitter" },
                  { title: "Facebook", value: "facebook" },
                  { title: "Instagram", value: "instagram" },
                  { title: "Linkedin", value: "linkedin" },
                  { title: "Youtube", value: "youtube" }
                ]
              }
            },
            {
              type: "url",
              name: "url",
              title: "Tam Profil URL"
            }
          ],
          preview: {
            select: {
              title: "media",
              subtitle: "url"
            }
          }
        }
      ]
    }),

    defineField({
      title: "Meta Açıklaması",
      name: "description",
      fieldset: "metadata",
      type: "text",
      rows: 5,
      validation: Rule => Rule.min(20).max(200),
      description: "SEO için Meta Açıklaması Girin"
    }),

    defineField({
      name: "openGraphImage",
      type: "image",
      title: "Open Graph Görüntüsü",
      description:
        "Facebook, Twitter vb. sitelerde paylaşım önizlemeleri için kullanılacak resim.",
      fieldset: "metadata"
    })
  ]
});
