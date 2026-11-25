// app/page.tsx
import Image from "next/image";
import SpotlightCard from "@/components/SpotlightCard";
import DotGrid from "@/components/DotGrid";
import GradientText from "@/components/GradientText";
import { cacheLife } from "next/cache";

async function getCurrentYear() {
  "use cache";
  cacheLife("max");
  return new Date().getFullYear();
}

export default async function Home() {
  const currentYear = await getCurrentYear();

  return (
    <main className="relative min-h-screen bg-[#050505] text-white overflow-hidden font-sans selection:bg-[#ff007f] selection:text-white">
      {/* FUNDO: DotGrid interativo */}
      <div className="fixed inset-0 z-0">
        <DotGrid
          baseColor="#2a2a2a"
          activeColor="#00e5ff"
          shape="circle"
          dotSize={6}
          gap={28}
          proximity={250}
          shockRadius={300}
          bounce={0.4}
          dpr={1}
          style={{}}
        />
      </div>

      {/* Luz suave no fundo */}
      <div className="fixed inset-0 z-0 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent pointer-events-none" />

      {/* CABEÇALHO FIXO (STICKY) */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-xl border-b border-white/10 transition-all duration-300">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-2 group">
            <Image
              src="/logo.png"
              alt="Grafello Logo"
              width={300}
              height={100}
              className="h-12 md:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]"
              priority
            />
          </a>

          {/* Menu de Navegação (Desktop) */}
          <nav className="hidden md:flex items-center gap-8 text-lg font-bold text-gray-300">
            <a
              href="#inicio"
              className="hover:text-[#00e5ff] transition-colors"
            >
              Início
            </a>
            <a
              href="#servicos"
              className="hover:text-[#00e5ff] transition-colors"
            >
              Nossos Serviços
            </a>
            <a
              href="#contato"
              className="hover:text-[#00e5ff] transition-colors"
            >
              Contato
            </a>
          </nav>

          {/* Botão Orçamento */}
          <a
            href="https://wa.me/5519989519186"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#ff007f] text-white px-5 py-2 md:px-6 md:py-2.5 rounded-full font-bold text-xs md:text-sm hover:bg-[#00e5ff] hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(255,0,127,0.6)] hover:shadow-[0_0_20px_rgba(0,229,255,0.8)]"
          >
            Orçamento Rápido
          </a>
        </div>
      </header>

      {/* CONTEÚDO PRINCIPAL */}
      <div className="relative z-10 pt-24 md:pt-32">
        {/* HERO SECTION */}
        {/* scroll-mt-28 garante que ao clicar em "Início" a tela pare abaixo do menu */}
        <section
          id="inicio"
          className="container mx-auto px-6 pt-10 pb-24 flex flex-col items-center justify-center text-center min-h-[70vh] scroll-mt-28"
        >
          {/* Título Arco-Íris Animado */}
          <div className="w-full max-w-5xl mb-6 flex items-center justify-center">
            <GradientText
              colors={[
                "#ff0000",
                "#ff7f00",
                "#ffff00",
                "#00ff00",
                "#00e5ff",
                "#0000ff",
                "#8a2be2",
                "#ff007f",
              ]}
              className="text-[5rem] md:text-[9rem] lg:text-[12rem] font-black uppercase tracking-tighter leading-none"
            >
              GRAFello
            </GradientText>
          </div>

          <div className="text-xl md:text-3xl font-medium max-w-3xl mx-auto mb-6">
            <span className="text-gray-300">
              Elevamos a imagem da sua marca.
            </span>
          </div>

          <p className="text-md md:text-lg text-gray-400 max-w-2xl mx-auto font-light leading-relaxed mb-10">
            Impressão de alta qualidade, design arrojado e acabamento impecável
            para destacar o seu negócio no mercado.
          </p>
        </section>

        {/* GRID DE SERVIÇOS */}
        <section
          id="servicos"
          className="container mx-auto px-6 py-20 border-t border-white/5 scroll-mt-28"
        >
          <div className="flex flex-col items-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
              Nossos{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-[#00e5ff] to-[#ff007f]">
                Serviços
              </span>
            </h2>
            <p className="text-gray-400 text-lg">
              Qualidade premium em cada detalhe.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <SpotlightCard
              spotlightColor="rgba(0, 229, 255, 0.25)"
              className="bg-white/3 border border-white/10 backdrop-blur-md p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-[#00e5ff]/20 flex items-center justify-center mb-6">
                <span className="text-[#00e5ff] text-2xl font-bold">📘</span>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">Blocos</h3>
              <p className="text-gray-400 leading-relaxed">
                Blocos personalizados e de alta durabilidade para suas anotações
                diárias ou corporativas.
              </p>
            </SpotlightCard>

            {/* Card 2 */}
            <SpotlightCard
              spotlightColor="rgba(255, 0, 127, 0.25)"
              className="bg-white/3 border border-white/10 backdrop-blur-md p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-[#ff007f]/20 flex items-center justify-center mb-6">
                <span className="text-[#ff007f] text-2xl font-bold">💳</span>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">
                Cartões de Visita
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Acabamento premium com opções de verniz localizado, hot stamping
                e relevo seco.
              </p>
            </SpotlightCard>

            {/* Card 3 */}
            <SpotlightCard
              spotlightColor="rgba(255, 230, 0, 0.25)"
              className="bg-white/3 border border-white/10 backdrop-blur-md p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-[#ffe600]/20 flex items-center justify-center mb-6">
                <span className="text-[#ffe600] text-2xl font-bold">📄</span>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">Panfletos</h3>
              <p className="text-gray-400 leading-relaxed">
                Material gráfico vibrante e de alta qualidade para divulgar
                promoções e sua marca.
              </p>
            </SpotlightCard>

            {/* Card 4 */}
            <SpotlightCard
              spotlightColor="rgba(0, 229, 255, 0.25)"
              className="bg-white/3 border border-white/10 backdrop-blur-md p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-[#00e5ff]/20 flex items-center justify-center mb-6">
                <span className="text-[#00e5ff] text-2xl font-bold">📅</span>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">Agendas</h3>
              <p className="text-gray-400 leading-relaxed">
                Perfeitas para brindes corporativos, com capa dura, wire-o e
                personalização completa.
              </p>
            </SpotlightCard>

            {/* Card 5 */}
            <SpotlightCard
              spotlightColor="rgba(255, 0, 127, 0.25)"
              className="bg-white/3 border border-white/10 backdrop-blur-md p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-[#ff007f]/20 flex items-center justify-center mb-6">
                <span className="text-[#ff007f] text-2xl font-bold">🗓️</span>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">
                Calendários
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Mantenha sua marca presente o ano inteiro na parede ou mesa dos
                seus clientes.
              </p>
            </SpotlightCard>

            {/* Card 6 */}
            <SpotlightCard
              spotlightColor="rgba(255, 255, 255, 0.15)"
              className="bg-white/3 border border-white/10 backdrop-blur-md p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-6">
                <span className="text-white text-2xl font-bold">✨</span>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">
                Outros Materiais
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Pastas, envelopes, banners e projetos sob medida. Precisa de
                algo diferente? Fale conosco.
              </p>
            </SpotlightCard>
          </div>
        </section>

        {/* RODAPÉ / CONTATO */}
        <footer
          id="contato"
          className="relative z-10 border-t border-white/10 bg-black/60 backdrop-blur-lg mt-10 scroll-mt-28"
        >
          <div className="container mx-auto px-6 py-16 flex flex-col md:flex-row justify-between items-center gap-10">
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Vamos tirar seu projeto do papel?
              </h2>
              <p className="text-gray-400 text-lg">
                Fale conosco agora mesmo e solicite seu orçamento sem
                compromisso.
              </p>
            </div>

            <div className="flex flex-col items-center md:items-end">
              <a
                href="https://wa.me/5519989519186"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-linear-to-r from-[#00e5ff] to-[#ff007f] hover:scale-105 transition-transform"
              >
                Telefone: (19) 9 98951-9186
              </a>
              <span className="text-sm text-gray-500 mt-2">
                Atendimento de Seg a Sex, das 8h às 18h
              </span>
            </div>
          </div>

          <div className="border-t border-white/5 py-6 text-center">
            <p className="text-xs text-gray-600">
              &copy; {currentYear} Grafello. Todos os direitos reservados.
            </p>
            <p className="text-xs text-gray-600 mt-2">
              Desenvolvido por{" "}
              <a
                href="https://andreluismoraes.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                André Luis de Moraes
              </a>
            </p>
          </div>
        </footer>
      </div>

      {/* BOTÃO VOLTAR AO TOPO (Agora no canto inferior DIREITO) */}
      <a
        href="#inicio"
        title="Voltar ao topo"
        className="fixed bottom-8 right-8 z-50 group flex items-center justify-center w-12 h-12 bg-black/60 backdrop-blur-md border border-white/20 rounded-full text-white shadow-lg hover:bg-[#00e5ff] hover:text-black hover:border-[#00e5ff] transition-all duration-300 hover:-translate-y-1"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 15.75l7.5-7.5 7.5 7.5"
          />
        </svg>
      </a>
    </main>
  );
}
