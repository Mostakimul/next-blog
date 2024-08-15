import Hero from '@/components/hero/Hero';
import Navbar from '@/components/navbar/Navbar';

export default function Home() {
  return (
    <main
      className="h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/hero/hero-bg-2.jpg')" }}
    >
      <Navbar />
      <Hero />
    </main>
  );
}
