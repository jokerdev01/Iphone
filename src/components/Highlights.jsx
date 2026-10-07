function Highlights() {
    return (
        /*
          - min-h-screen: Garante que a seção tenha no mínimo 100% da altura da tela.
          - flex items-center justify-center: Centraliza o conteúdo horizontal e verticalmente.
          - text-white: Garante a cor branca padrão do texto sobre o fundo preto.
        */
        <section className="bg-black text-white min-h-screen flex items-center justify-center py-20 px-6" id="design">
            
            {/* mx-auto centraliza o contêiner horizontalmente caso a tela seja muito larga */}
            <div className="max-w-7xl mx-auto w-full">

                <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold mb-4">Design revolucionário</h2>
                    <p className="text-xl text-gray-400">Cada detalhe foi pensado para criar a melhor experiência.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    <div className="bg-gray-900 rounded-3xl p-8">
                        <img className="w-full rounded-2xl mb-4" src="../../public/img/titanium-design.jpg" alt="iphone-titanium" />
                        <h3 className="font-bold mb-2 text-3xl">Titânio Premium</h3>
                        <p className="text-gray-300">Estrutura em titânio de grau aeroespacial. O smartphone mais forte e leve.</p>
                    </div>

                    <div className="bg-gray-900 rounded-3xl p-8">
                        <img className="w-full rounded-2xl mb-4" src="../../public/img/ios-features.jpg" alt="ios 2026" />
                        <h3 className="font-bold mb-2 text-3xl">iOS 26</h3>
                        <p className="text-gray-300">O sistema operacional mais avançado do mundo com IA integrada.</p>
                    </div>
                </div>

                <div className="bg-gray-900 rounded-3xl p-12 mb-16 text-center" id="performance">
                    <h3 className="text-4xl font-bold mb-6 text-gradient">A18 Pro</h3>
                    <p className="text-gray-300 mb-6">O chip mais potente em um smartphone</p>
                    <img className="w-full max-w-2xl mx-auto rounded-2xl mb-6" src="../../public/img/Chip-a18-pro.jpg" alt="Chip a18-pro" />

                    <ul className="space-y-3 text-gray-300 inline-block text-left">
                        <li>• CPU 20% mais rápida</li>
                        <li>• GPU 25% mais rápida</li>
                        <li>• IA 30% mais poderosa</li>
                        <li>• Câmera 15% melhor</li>
                    </ul>
                </div>

                <div id="camera" className="text-center">
                    <h3 className="text-4xl font-bold mb-10">Sistema de Câmera Pro avançado</h3>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-gray-900 rounded-2xl p-8 hover:scale-105 cursor-pointer transition-all duration-300">
                            <div className="text-4xl font-bold text-blue-600 mb-4">48MP</div>
                            <h4 className="text-xl font-semibold mb-2">Principal</h4>
                            <p className="text-gray-400">Sensor de 48 megapixels com tecnologia de imagem avançada</p>
                        </div>

                        <div className="bg-gray-900 rounded-2xl p-8 hover:scale-105 cursor-pointer transition-all duration-300">
                            <div className="text-4xl font-bold text-orange-600 mb-4">12MP</div>
                            <h4 className="text-xl font-semibold mb-2">Ultra wide</h4>
                            <p className="text-gray-400">Campo de visão de 120° com modo noturno</p>
                        </div>

                        <div className="bg-gray-900 rounded-2xl p-8 hover:scale-105 cursor-pointer transition-all duration-300">
                            <div className="text-4xl font-bold text-blue-600 mb-4">12MP</div>
                            <h4 className="text-xl font-semibold mb-2">Telefoto 5x</h4>
                            <p className="text-gray-400">Zoom óptico de 5x com imagem de alta qualidade</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Highlights;