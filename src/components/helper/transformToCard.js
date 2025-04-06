export const transformToCard = (item) => {
    switch (item.type) {
      case "AI Tool":
        const imgs = item?.content?.images;
        let img =
          (imgs[1] && imgs[1].url) || (imgs[0] && imgs[0].url) || "./bg-1.png";
        return {
          title: item?.metadata?.title,
          views: Math.floor(Math.random() * 1000),
          date: item?.metadata?.published_date || new Date().toLocaleDateString(),
          bg: img,
          tags: item?.assigned_tags || ["Data Learning", "NLP", "ML"],
          type: "AI Tool",
          link: item?.source?.url,
          id:item?._id || item?.id,
        };
  
      case "Article":
        return {
          type: "Article",
          title: item?.metadata?.title,
          date: item?.metadata?.created_at
            ? new Date(item?.metadata?.created_at).toLocaleDateString()
            : new Date().toLocaleDateString(),
          views: Math.floor(Math.random() * 1000),
          bg: item?.metadata?.image_url || "./bg-1.png",
          tags: item?.assigned_tags ||
            item?.content?.keywords || ["Data Learning", "NLP", "ML"],
          link: item?.source?.url,
          id:item?._id || item?.id,
        };
  
      case "Model":
        return {
          type: "Model",
          title: item?.Model,
          date: item["Publication date"] || new Date().toLocaleDateString(),
          views: Math.floor(Math.random() * 1000),
          bg: item?.metadata?.image_url || "./bg-1.png",
          tags: item?.assigned_tags ||
            item?.content?.keywords || ["Data Learning", "NLP", "ML"],
          link: item?.Link,
          id:item?._id || item?.id,
        };
    }
  };