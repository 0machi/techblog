interface VerticalLineProps {
  isPcOnly?: boolean;
}

export default function VerticalLine({ isPcOnly = false }: VerticalLineProps) {
  const pcOnlyClass = isPcOnly ? 'max-lg:hidden' : ''

  return (
    <div
      className={`w-1 h-[300px] border-r border-dashed border-slate-200 ${pcOnlyClass}`}
    />
  )
}