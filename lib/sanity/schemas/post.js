export default {
  name: "post",
  title: "Gönderi & Yazı",
  type: "document",
  initialValue: () => ({
    publishedAt: new Date().toISOString()
  }),
  fields: [
    {
      name: "title",
      title: "Başlık",
      type: "string"
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96
      }
    },
    {
      name: "excerpt",
      title: "Özet",
      description:
        "Özet, blog akışlarında ve arama sonuçlarında kullanılır",
      type: "text",
      rows: 3,
      validation: Rule => Rule.max(200)
    },
    {
      name: "author",
      title: "Yazar",
      type: "reference",
      to: { type: "author" }
    },
    {
      name: "mainImage",
      title: "Ana Resim",
      type: "image",
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternatif Metin",
          description: "SEO ve erişilebilirlik için önemlidir."
        }
      ],
      options: {
        hotspot: true
      }
    },
    {
      name: "categories",
      title: "Kategoriler",
      type: "array",
      of: [{ type: "reference", to: { type: "category" } }]
    },
    {
      name: "publishedAt",
      title: "Yayınlanma Tarihi",
      type: "datetime"
    },
    {
      name: "featured",
      title: "Öne Çıkan Olarak İşaretle",
      type: "boolean"
    },
    {
      name: "body",
      title: "İçerik",
      type: "blockContent"
    }
  ],

  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "mainImage"
    },
    prepare(selection) {
      const { author } = selection;
      return Object.assign({}, selection, {
        subtitle: author && `tarafından ${author}`
      });
    }
  }
};
