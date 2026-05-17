import { useRef, useState } from 'react'

const initialLines = [
  "Welcome to Khanh's OS v1.0.0",
  "Type 'help' to see available commands.",
]

const responses: Record<string, string[]> = {
  help: ['Available commands:', 'about, skills, projects, contact, clear'],
  about: ['Front-end engineer focused on modern UI and motion-driven web.'],
  skills: [
    'UI/UX design, Responsive layout, Design systems, TypeScript, Motion design, Accessibility.',
  ],
  projects: ['Glow Commerce, Studio Signal, Atlas Portfolio.'],
  contact: [
    'Email: khanh040605@gmail.com',
    'GitHub: https://github.com/duykhanh465',
    'LinkedIn: https://linkedin.com/in/duykhanh465',
  ],
}

export default function TerminalSection() {
  const inputRef = useRef<HTMLInputElement | null>(null)
  const [command, setCommand] = useState('')
  const [lines, setLines] = useState<string[]>(initialLines)

  const handleCommand = (value: string) => {
    const next = value.trim().toLowerCase()
    if (!next) {
      return
    }

    if (next === 'clear') {
      setLines(initialLines)
      return
    }

    const output = responses[next] ?? [`Command not found: ${next}`]
    setLines((prev) => [...prev, `> ${value}`, ...output])
  }

  return (
    <section className="section reveal" aria-label="Terminal">
      <div
        className="terminal glass"
        onClick={() => inputRef.current?.focus()}
        role="presentation"
      >
        <div className="terminal-bar">
          <span className="terminal-title">MAIN TERMINAL — 80x24</span>
          <div className="terminal-dots">
            <span className="dot red" />
            <span className="dot yellow" />
            <span className="dot green" />
          </div>
        </div>
        <div className="terminal-body">
          <div className="terminal-history">
            {lines.map((line, index) => (
              <p className="terminal-line" key={`${line}-${index}`}>
                {line}
              </p>
            ))}
          </div>
          <div className="terminal-input-row">
            <span className="prompt">&gt;</span>
            <input
              ref={inputRef}
              className="terminal-input"
              value={command}
              onChange={(event) => setCommand(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === 'Enter') {
                  handleCommand(command)
                  setCommand('')
                }
              }}
              aria-label="Terminal command"
              spellCheck={false}
              autoComplete="off"
            />
            <span className="cursor">_</span>
          </div>
        </div>
      </div>
    </section>
  )
}
