export default {
  name: "featured",
  title: "Featured",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Featured Category name",
      type: "string",
    },
    {
      name: "short_description",
      title: "Short description",
      type: "string",
    },
    {
      name: "restaurents",
      title: "Restaurents",
      type: "array",
      of: [
        {
          type: "reference",
          to: [
            {
              type: "restaurent",
            },
          ],
        },
      ],
    },
  ],
};
