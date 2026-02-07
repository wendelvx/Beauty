// src/components/KittyBow.jsx

// Este componente aceita 'className' para que possamos mudar a cor e o tamanho onde quisermos.
export default function KittyBow({ className = "w-6 h-6 text-gold" }) {
  return (
    <svg 
      viewBox="0 0 100 65" // Viewbox ajustado para a proporção do laço
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      stroke="currentColor" // Usa a cor do texto definida no Tailwind (ex: text-gold)
      strokeWidth="3"       // Espessura da linha (ajuste se quiser mais grosso/fino)
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      {/* O nó central */}
      <ellipse cx="50" cy="32.5" rx="10" ry="9" />
      
      {/* A parte esquerda do laço (ligeiramente inclinada) */}
      <path d="M41 28C35 20 20 15 10 20C0 25 0 40 10 45C20 50 35 45 41 37" />
      
      {/* A parte direita do laço */}
      <path d="M59 28C65 20 80 15 90 20C100 25 100 40 90 45C80 50 65 45 59 37" />
    </svg>
  );
}