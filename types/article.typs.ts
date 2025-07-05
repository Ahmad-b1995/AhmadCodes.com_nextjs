interface ArticleImage {
    alt: string;
    src: string;
  }
  
  interface Article {
    id: number;
    title: string;
    content: string;
    image: ArticleImage;
    createdAt: string;
  }