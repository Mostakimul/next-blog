import Categories from '@/components/categories/Categories';
import Hero from '@/components/hero/Hero';
import Navbar from '@/components/navbar/Navbar';
import Greetings from '@/components/welcome/Greetings';

export default function Home() {
  return (
    <main>
      <section
        className="h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/hero/hero-bg-2.jpg')" }}
      >
        <Navbar />
        <Hero />
      </section>
      <Greetings />
      <Categories />
    </main>
  );
}
