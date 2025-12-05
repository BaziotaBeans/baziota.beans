export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-8 p-8">
      <div className="max-w-4xl space-y-8">
        <h1 className="text-6xl font-bold">Teste de Fontes</h1>
        
        <div className="space-y-4">
          <h2 className="text-3xl font-semibold">Fonte Inter (Global - Body)</h2>
          <p className="text-lg leading-relaxed">
            Este texto está usando a fonte Inter, que é aplicada globalmente no body. 
            A Inter é uma fonte moderna e legível, perfeita para textos longos e conteúdo geral.
            Esta é a fonte padrão que será usada em todo o site.
          </p>
          <div className="space-y-2">
            <p className="text-xl font-normal">Inter Normal (400)</p>
            <p className="text-xl font-semibold">Inter Semibold (600)</p>
            <p className="text-xl font-bold">Inter Bold (700)</p>
          </div>
        </div>

        <div className="space-y-4 border-t pt-8">
          <h2 className="text-3xl font-semibold font-array">Fonte Array (via Tailwind - font-array)</h2>
          <p className="text-lg leading-relaxed font-array">
            Este texto está usando a fonte Array através da classe Tailwind <code className="bg-gray-200 dark:bg-gray-800 px-2 py-1 rounded">font-array</code>.
            A Array é uma fonte customizada que pode ser aplicada em elementos específicos quando necessário.
          </p>
          
          <div className="space-y-2">
            <p className="text-xl font-normal font-array">Array Regular (400) - Lorem ipsum dolor sit amet</p>
            <p className="text-xl font-semibold font-array">Array Semibold (600) - Lorem ipsum dolor sit amet</p>
            <p className="text-xl font-bold font-array">Array Bold (700) - Lorem ipsum dolor sit amet</p>
          </div>
        </div>

        <div className="space-y-4 border-t pt-8">
          <h2 className="text-3xl font-semibold font-array">Comparação lado a lado:</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm font-semibold mb-2">Inter (Global)</p>
              <p className="text-base">
                The quick brown fox jumps over the lazy dog. 1234567890
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold mb-2 font-array">Array (font-array)</p>
              <p className="text-base font-array">
                The quick brown fox jumps over the lazy dog. 1234567890
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-4 border-t pt-8">
          <h2 className="text-3xl font-semibold">Exemplo de uso:</h2>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Texto padrão (Inter):</p>
              <p className="text-lg">
                Este é um parágrafo normal usando a fonte Inter, que é aplicada globalmente.
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Título com Array:</p>
              <h3 className="text-2xl font-bold font-array">Título em Array</h3>
            </div>
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Destaque com Array:</p>
              <p className="text-lg">
                Este parágrafo usa Inter, mas <span className="font-array font-bold">esta parte usa Array</span> para dar destaque.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
