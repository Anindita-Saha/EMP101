export default function GlassCard({ children, className = '' }) {
  return (
    <div
      className={`glass rounded-2xl p-6 sm:p-8 shadow-sm shadow-black/5 hover:shadow-lg hover:shadow-signal/5 transition-shadow duration-300 ${className}`}
    >
      {children}
    </div>
  )
}
