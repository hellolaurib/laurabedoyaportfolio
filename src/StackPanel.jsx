// One full-viewport panel that pins in place and gets covered by the next
// panel sliding up over it — a stacked-cards scroll effect. `first` skips
// the overlap pull so the stack starts flush after the page content above it.
export default function StackPanel({ children, index, first = false }) {
  return (
    <div
      className={`relative h-[200vh] ${first ? '' : '-mt-[100vh]'}`}
      style={{ zIndex: index }}
    >
      <div className="sticky top-0 h-screen">
        <div className="relative left-1/2 h-full w-screen -translate-x-1/2 overflow-hidden bg-white">
          {children}
        </div>
      </div>
    </div>
  );
}

// A gallery of StackPanels, one per { key, node } entry.
export function PanelStack({ panels }) {
  return (
    <div className="relative">
      {panels.map((panel, i) => (
        <StackPanel key={panel.key} index={i} first={i === 0}>
          {panel.node}
        </StackPanel>
      ))}
    </div>
  );
}
