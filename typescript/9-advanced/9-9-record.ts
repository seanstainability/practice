type PageInfo = {
  title: string;
};
type Page = "home" | "about" | "contact";

const nav: Record<Page, PageInfo> = {
  // Page를 key로 삼고, PageInfo를 Value로 삼는다.
  home: { title: "Home" },
  about: { title: "About" },
  contact: { title: "Contact" },
};

// 기타...
type Product = "cat" | "dog";
type NewProduct = Capitalize<Product>; // 'Cat' | 'Dog' 대문자화
