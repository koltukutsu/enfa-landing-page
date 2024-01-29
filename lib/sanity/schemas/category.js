export default {
  name: "category",
  title: "Kategori",
  type: "document",
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
      },
      validation: Rule => Rule.required()
    },
    {
      name: "color",
      title: "Renk",
      type: "string",
      description: "Kategorinin rengi",
      options: {
        list: [
          { title: "Yeşil", value: "green" },
          { title: "Mavi", value: "blue" },
          { title: "Mor", value: "purple" },
          { title: "Turuncu", value: "orange" }
        ]
      }
    },
    {
      name: "description",
      title: "Açıklama",
      type: "text"
    }
  ]
};
