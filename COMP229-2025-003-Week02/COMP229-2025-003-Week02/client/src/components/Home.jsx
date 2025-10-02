function Home() {
  const [lastMsg, setLastMsg] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem("lastMessage");
    if (stored) setLastMsg(JSON.parse(stored));
  }, []);

  return (
    <div>
      <h1>Welcome to my portfolio</h1>
      <p className="mission">My mission statement here.</p>

      {lastMsg && (
        <div>
          <h3>Last message received:</h3>
          <p>{lastMsg.firstName} {lastMsg.lastName} — {lastMsg.email}</p>
          <p>{lastMsg.message}</p>
        </div>
      )}
    </div>
  );
} 

export default Home;