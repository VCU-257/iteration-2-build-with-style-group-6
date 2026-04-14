// This is a wrapper for sections
export default function SectionOutline({ label, children, className = '' }) {
  return (
    <div
      aria-label={label}
      className={className}
    >
      {children && <div>{children}</div>}
    </div>
  )
}