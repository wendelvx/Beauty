// src/components/KittyBow.jsx

export default function KittyBow({ 
  className = "w-6 h-6 text-primary", 
  filled = true, // Adicionamos a opção de ser preenchido por padrão
  strokeWidth = "2.5"
}) {
  return (
    <svg 
      viewBox="0 0 100 70" 
      fill={filled ? "currentColor" : "none"} // Preenchimento sólido para mais impacto
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} transition-all duration-300`}
      stroke="currentColor" 
      strokeWidth={strokeWidth}
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      {/* Lado Esquerdo - Curvas mais arredondadas e 'cheias' */}
      <path d="M42 35C42 15 15 5 8 22C0 40 5 60 15 62C30 65 42 50 42 35Z" />
      
      {/* Lado Direito - Espelhado com precisão */}
      <path d="M58 35C58 15 85 5 92 22C100 40 95 60 85 62C70 65 58 50 58 35Z" />

      {/* Círculo Central - O nó do laço, agora um círculo perfeito para simetria clínica */}
      <circle cx="50" cy="35" r="11" fill={filled ? "currentColor" : "white"} />
    </svg>
  );
}