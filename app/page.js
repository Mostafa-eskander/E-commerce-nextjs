import Categories from "@/component/Home_Page/category";
import OneCategory from "@/component/Home_Page/oneCategory";
import SliderPage from "@/component/Home_Page/slider";

export default function Home() {
  return (
    <main>
      <div className="container">
        <SliderPage />
        <Categories />
        <OneCategory name='laptops' title='Labtop' />
        <OneCategory name='motorcycle' title='Motorcycle' />
        <OneCategory name='furniture' title='Furniture' />
      </div>
    </main>
  );
}
