export default {
  name: "restaurent",
  title: "Restaurent",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "short_description",
      title: "Short description",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "image",
      title: "Image",
      type: "image",
    },
    {
      name: "lng",
      title: "Longitude of the Restaurent",
      type: "number",
    },
    {
      name: "lat",
      title: "Latitude of the Restuarent",
      type: "number",
    },
    {
      name: "address",
      title: "Restaurent Address",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "rating",
      title: "Enter a Rating from (1-5 start)",
      type: "number",
      validation: (Rule) =>
        Rule.required()
          .min(1)
          .max(5)
          .error("Please enter a value between 1 and 5"),
    },
    {
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "category" }],
    },
    {
      name: "dishes",
      title: "Dishes",
      type: "array",
      of: [
        {
          type: "reference",
          to: [
            {
              type: "dish",
            },
          ],
        },
      ],
    },
  ],
};
