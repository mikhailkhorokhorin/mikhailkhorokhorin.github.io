export default function TerminalHeader() {
  return (
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      fontFamily: 'monospace',
      whiteSpace: 'pre',
      gap: '1rem',
      fontSize: '14px',
      marginBottom: '3rem',
      marginTop: '3rem',
      justifyContent: 'center'
    }}>
       <pre className="user-select-none" style={{ margin: 0 }}>
        {`___  ____ _    _           _ _
|  \\/  (_) |  | |         (_) |
| .  . |_| | _| |__   __ _ _| |
| |\\/| | | |/ / '_ \\ / _\` | | |
| |  | | |   <| | | | (_| | | |
\\_|  |_/_|_|\\_\\_| |_|\\__,_|_|_|`}
      </pre>

      <pre className="user-select-none" style={{ margin: 0 }}>
        {`_   ___                      _    _                _
| | / / |                   | |  | |              (_)
| |/ /| |__   ___  _ __ ___ | | _| |__   ___  _ __ _ _ __
|    \\| '_ \\ / _ \\| '__/ _ \\| |/ / '_ \\ / _ \\| '__| | '_ \\
| |\\  \\ | | | (_) | | | (_) |   <| | | | (_) | |  | | | | |
\\_| \\_/_| |_|\\___/|_|  \\___/|_|\\_\\_| |_|\\___/|_|  |_|_| |_|`}
      </pre>
    </div>
  );
}
