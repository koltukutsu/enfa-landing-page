export default {
  name: 'author',
  title: "Yazarlar & Ekip Üyeleri",
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Adı',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    },
    {
      name: 'image',
      title: 'Resim',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'bio',
      title: 'Biyografi',
      type: 'array',
      of: [
        {
          title: 'Bloğ',
          type: 'block',
          styles: [{title: 'Normal', value: 'normal'}],
          lists: [],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
}
