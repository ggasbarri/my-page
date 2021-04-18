export default async (req, res) => {
  const query = `
    {
        projectCollection {
          items {
            title
            description {
              json
            }
            published
            photo {
              title
              url
            }
            url
          }
        }
      }
        `;

  const response = await fetch(
    `https://graphql.contentful.com/content/v1/spaces/ofcgwyjms7pq/`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + process.env.CONTENTFUL_API_KEY,
      },
      body: JSON.stringify({ query }),
    }
  );

  const data = (await response.json()).data;

  res.json(data);
};
