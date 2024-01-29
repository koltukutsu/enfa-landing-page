import IframePreview from "./previews/iframe";
import TablePreview from "./previews/table";

/**
 * Bu, bu blog stüdyosu için kullanılan zengin metin alanlarının şema tanımıdır.
 * schemas.js'ye aktardığınızda, stüdyonun diğer bölümlerinde tekrar kullanılabilir:
 *  {
 *    name: 'someName',
 *    title: 'Bir başlık',
 *    type: 'blockContent'
 *  }
 */
export default {
  title: "Blok İçeriği",
  name: "blockContent",
  type: "array",
  of: [
    {
      title: "Blok",
      type: "block",
      // Stiller, kullanıcıların blokları nasıl işaretleyebileceklerini belirlemenizi sağlar. Bunlar
      // HTML etiketleri ile eşleşir, ancak istediğiniz herhangi bir başlık veya değeri belirleyebilirsiniz
      // ve içeriğinizi nerede kullanmak istediğinize bağlı olarak bununla nasıl ilgileneceğinize karar verebilirsiniz.
      styles: [
        { title: "Normal", value: "normal" },
        // {title: 'H1', value: 'h1'},
        { title: "H2", value: "h2" },
        { title: "H3", value: "h3" },
        { title: "H4", value: "h4" },
        { title: "Alıntı", value: "blockquote" }
      ],
      lists: [
        { title: "Madde İşaretli", value: "bullet" },
        { title: "Numaralı", value: "number" }
      ],
      // İşaretler, blok editöründeki metni çevrimiçi olarak işaretlemenizi sağlar.
      marks: {
        // Dekoratörler genellikle tek bir özelliği tanımlar - örn. bir tipografik
        // tercih veya editörler tarafından vurgulama.
        decorators: [
          { title: "Kalın", value: "strong" },
          { title: "Vurgu", value: "em" },
          { title: "Kod", value: "code" },
          { title: "Altı Çizili", value: "underline" },
          { title: "Üstü Çizili", value: "strike-through" }
        ],
        // Notlar herhangi bir nesne yapısı olabilir - örn. bir bağlantı veya dipnot.
        annotations: [
          {
            name: "internalLink",
            type: "object",
            title: "Dahili Bağlantı",
            fields: [
              {
                name: "reference",
                type: "reference",
                title: "Referans",
                to: [
                  { type: "post" }
                  // bağlanmak isteyebileceğiniz diğer türler
                ]
              }
            ]
          },
          {
            title: "URL",
            name: "link",
            type: "object",
            fields: [
              {
                title: "URL",
                name: "href",
                type: "url"
              }
            ]
          }
        ]
      }
    },
    // Burada ek tip türleri ekleyebilirsiniz. Blok tipiyle aynı dizide
    // 'string' ve 'number' gibi ilkel tipleri kullanamazsınız.

    {
      type: "image",
      options: { hotspot: true }
    },
    {
      type: "code"
    },
    {
      type: "object",
      name: "embed",
      title: "Gömme",
      fields: [
        {
          name: "url",
          type: "url",
          description:
            "Gömmek için URL'yi girin \r\n(örn: https://youtube.com/embed/xxx veya https://open.spotify.com/embed/track/xxxx)"
        },
        {
          name: "height",
          type: "number",
          description:
            "Bu gömme için gerekli yüksekliği girin. Boş bırakırsanız 16:9 oranı kullanılır."
        }
      ],
      components: {
        preview: IframePreview
      },
      preview: {
        select: { url: "url", height: "height" }
      }
    },
    {
      name: "tables",
      title: "Tablo",
      type: "object",
      fields: [
        {
          name: "table",
          title: "Tablo Ekle",
          description:
            "İlk satır başlık olarak kullanılacak. Atlamak istiyorsanız ilk satırı boş bırakın.",
          type: "table"
        }
      ],
      components: {
        preview: TablePreview
      },
      preview: {
        select: { table: "table" }
      }
    }
  ]
};
