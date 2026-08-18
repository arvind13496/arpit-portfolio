const LINKS = [
  { href: '#about', label: 'about' },
  { href: '#origin', label: 'the obsession' },
  { href: '#work', label: 'spec work' },
  { href: '#beyond', label: 'beyond copy' },
  { href: '#doodle', label: 'doodle pad' },
  { href: '#contact', label: "let's talk" },
];

export default function Nav() {
  return (
    <nav aria-label="Primary">
      {LINKS.map((l) => (
        <a key={l.href} href={l.href}>
          {l.label}
        </a>
      ))}
    </nav>
  );
}
